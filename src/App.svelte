<script lang="ts">
  import OBSWebSocket from 'obs-websocket-js';
  import { Icon } from 'svelte-icons-pack';
  import { BsRecordCircle } from 'svelte-icons-pack/bs';
  import { FaFloppyDisk, FaSolidCameraRetro } from 'svelte-icons-pack/fa';
  import { RiMediaReplay30Fill } from 'svelte-icons-pack/ri';
  import { SlControlPause } from 'svelte-icons-pack/sl';
  import ControlButton from './components/ControlButton.svelte';
  import { OutputState } from './const/obs';
  import { SceneSettings } from './const/settings-map';

  const socket = new OBSWebSocket();
  let isRecording = false;
  let isPaused = false;
  let isReplay = false;

  socket.connect(import.meta.env.VITE_WS_ADDRESS, import.meta.env.VITE_WS_PASSWORD)
    .then(() => {
      socket.call('GetRecordStatus')
        .then((e) => {
          isRecording = e.outputActive;
          isPaused = e.outputPaused;
        });
      socket.call('GetReplayBufferStatus')
        .then((e) => {
          isReplay = e.outputActive;
        });
    });

  socket.on('CurrentProgramSceneChanged', (e) => {
    socket.call(
      'SetVideoSettings',
      SceneSettings[e.sceneName] ?? {},
    );
  });

  socket.on('RecordStateChanged', (e) => {
    switch (e.outputState) {
      case OutputState.OBS_WEBSOCKET_OUTPUT_STARTED:
        isRecording = true;
        break;
      case OutputState.OBS_WEBSOCKET_OUTPUT_STOPPED:
        isPaused = false;
        isRecording = false;
        break;
      case OutputState.OBS_WEBSOCKET_OUTPUT_PAUSED:
        isPaused = true;
        break;
      case OutputState.OBS_WEBSOCKET_OUTPUT_RESUMED:
        isPaused = false;
        break;
      default:
        break;
    }
  });
  socket.on('ReplayBufferStateChanged', (e) => {
    switch (e.outputState) {
      case OutputState.OBS_WEBSOCKET_OUTPUT_STARTED:
        isReplay = true;
        break;
      case OutputState.OBS_WEBSOCKET_OUTPUT_STOPPED:
        isReplay = false;
        break;
      default:
        break;
    }
  });

  function clickRecord() {
    if (isRecording) {
      socket.call('StopRecord');
    } else {
      socket.call('StartRecord');
    }
  };

  function clickPause() {
    if (isPaused) {
      socket.call('ResumeRecord');
    } else {
      socket.call('PauseRecord');
    }
  }

  function clickReplay() {
    if (isReplay) {
      socket.call('StopReplayBuffer');
    } else {
      socket.call('StartReplayBuffer');
    }
  }

  function clickSaveReplay() {
    if (isReplay) {
      socket.call('SaveReplayBuffer');
    }
  }

  async function clickScreenshot() {
    const { sceneName } = await socket.call('GetCurrentProgramScene');
    const { recordDirectory } = await socket.call('GetRecordDirectory');
    const datetime = new Date().toLocaleString('sv').replace(/:/g, '-');
    const path = `${recordDirectory}/Screenshot ${datetime}.png`;
    await socket.callBatch([
      {
        requestType: 'GetSourceScreenshot',
        requestData: {
          sourceName: sceneName,
          imageFormat: 'png',
        },
      },
      {
        requestType: 'SaveSourceScreenshot',
        requestData: {
          sourceName: sceneName,
          imageFormat: 'png',
          imageFilePath: path,
        },
      },
    ]);
    await fetch(
      'http://127.0.0.1:8080/notification',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'IMAGE',
          title: 'Screenshot',
          message: `Saved to ${path}`,
          image: path,
        }),
      },
    );
  }
</script>

<div class="grid grid-cols-3">
  <ControlButton
    onclick={clickRecord}
  >
    <Icon size="80%" src={BsRecordCircle}
      color={isRecording ? 'red' : 'inherit'}
    />
  </ControlButton>
  <ControlButton
    onclick={clickPause}
    disabled={!isRecording}
  >
    <Icon size="80%" src={SlControlPause}
      color={isPaused ? 'yellow' : 'inherit'}
    />
  </ControlButton>
  <ControlButton
    onclick={clickScreenshot}
  >
    <Icon size="80%" src={FaSolidCameraRetro}/>
  </ControlButton>
  <ControlButton
    onclick={clickReplay}
  >
    <Icon size="80%" src={RiMediaReplay30Fill}
      color={isReplay ? 'green' : 'inherit'}
    />
  </ControlButton>
  <ControlButton
    onclick={clickSaveReplay}
    disabled={!isReplay || isPaused}
  >
    <Icon size="80%" src={FaFloppyDisk}/>
  </ControlButton>
</div>

<style>
</style>

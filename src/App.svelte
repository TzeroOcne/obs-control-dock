<script lang="ts">
  import OBSWebSocket from 'obs-websocket-js';
  import { SceneSettings } from './const/settings-map';

  const socket = new OBSWebSocket();

  socket.connect('ws://127.0.0.1:4455', 'haB8ihFOJ6Ig2wQ6');
  socket.on('CurrentProgramSceneChanged', (e) => {
    socket.call(
      'SetVideoSettings',
      SceneSettings[e.sceneName] ?? {},
    );
  })
</script>

<h1 class="text-3xl font-bold underline">
  Auto Settings Changer
</h1>

<style>
</style>

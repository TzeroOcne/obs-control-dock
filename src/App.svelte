<script lang="ts">
  import OBSWebSocket from 'obs-websocket-js';
  const socket = new OBSWebSocket();

  socket.connect('http://192.168.100.100:4455', 'haB8ihFOJ6Ig2wQ6');
</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<button
  on:click={() => socket.call('SetVideoSettings', { baseWidth: 1920, baseHeight: 1080 })}
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
<button
  on:click={() => socket.call('SetVideoSettings', { baseWidth: 1920, baseHeight: 1200 })}
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>

<style>
</style>

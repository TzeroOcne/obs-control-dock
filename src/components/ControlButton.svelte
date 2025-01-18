<script lang="ts">
  import { cn } from '@/lib/tailwind';
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  type Props = {
    onclick?: MouseEventHandler<HTMLButtonElement>;
    children?: Snippet;
    class?: string;
  };
  let {
    onclick,
    children,
    class: clazz,
  }: Props = $props();
</script>


<div class="aspect-square">
  <button class={cn('btn border-0 p-0 w-full h-full min-h-0 rounded-none', clazz)}
    {onclick}
  >
    {#if children}
      {@render children()}
    {/if}
  </button>
</div>

<style>
</style>

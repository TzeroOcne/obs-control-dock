<script lang="ts">
  import { cn } from '@/lib/tailwind';
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  type Props = {
    onclick?: MouseEventHandler<HTMLButtonElement>;
    children?: Snippet;
    class?: string;
    disabled?: boolean;
  };
  let {
    onclick,
    children,
    disabled = false,
    class: clazz,
  }: Props = $props();
</script>


<div class="aspect-square">
  <button class={cn('btn border-0 p-0 w-full h-full min-h-0 rounded-none hover:bg-[#2e3754]', clazz)}
    {onclick}
    {disabled}
  >
    {#if children}
      {@render children()}
    {/if}
  </button>
</div>

<style>
</style>

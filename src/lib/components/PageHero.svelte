<script lang="ts">
	import type { Snippet } from 'svelte';
	let { eyebrow = '', title = '', lead = '', children }: { eyebrow?: string; title?: string; lead?: string; children?: Snippet } = $props();
</script>

<section class="page-hero">
	<div class="container">
		{#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
		{#if title}<h1>{title}</h1>{/if}
		{#if lead}<p class="lead">{lead}</p>{/if}
		{@render children?.()}
	</div>
</section>

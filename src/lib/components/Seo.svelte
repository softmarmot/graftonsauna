<script lang="ts">
	import { site } from '#lib';
	let { title, description = site.tagline }: { title: string; description?: string } = $props();
</script>

<svelte:head>
	<title>{title === 'Home' ? `${site.name} · ${site.tagline}` : `${title} · ${site.name}`}</title>
	<meta name="description" content={description} />
</svelte:head>

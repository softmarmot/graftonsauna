<!-- Google Maps embed for the location in src/lib/site.ts (no API key). -->
<script lang="ts">
	import { site, mapEmbedUrl } from '#lib';
	let { ratio = '4 / 3' }: { ratio?: string } = $props();
</script>

<div class="map" style:aspect-ratio={ratio}>
	<iframe
		src={mapEmbedUrl}
		title="Map showing {site.name}"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		allowfullscreen
	></iframe>
</div>

<style>
	.map { width: 100%; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); background: var(--sand); }
	.map iframe { display: block; width: 100%; height: 100%; border: 0; filter: grayscale(0.35) contrast(1.05); }
</style>

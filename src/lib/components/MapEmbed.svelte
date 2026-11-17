<!--
	Full-width Google Maps band for the location in src/lib/site.ts (no API key).
	Spans the whole viewport, edge to edge, like a section of its own.
-->
<script lang="ts">
	import { site, mapEmbedUrl } from '#lib';
</script>

<section class="map" aria-label="Map">
	<iframe
		src={mapEmbedUrl}
		title="Map showing {site.name}"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		allowfullscreen
	></iframe>
</section>

<style>
	.map { width: 100%; height: clamp(320px, 45vw, 520px); background: var(--sand); }
	.map iframe { display: block; width: 100%; height: 100%; border: 0; filter: grayscale(0.35) contrast(1.05); }
</style>

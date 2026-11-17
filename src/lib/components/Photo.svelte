<!--
	Image slot. Until the client supplies real photos this renders a styled
	placeholder with a caption describing the shot. Pass `src` for a real image.
-->
<script lang="ts">
	type Tone = 'wood' | 'steam' | 'water' | 'ember' | 'forest';
	let {
		label,
		tone = 'wood',
		src = '',
		ratio = '4 / 3',
		class: cls = ''
	}: { label: string; tone?: Tone; src?: string; ratio?: string; class?: string } = $props();
</script>

{#if src}
	<img class="photo {cls}" {src} alt={label} style:aspect-ratio={ratio} loading="lazy" />
{:else}
	<div class="photo photo--ph photo--{tone} {cls}" style:aspect-ratio={ratio} role="img" aria-label={label}>
		<span class="photo__label">Photo · {label}</span>
	</div>
{/if}

<style>
	.photo { display: block; width: 100%; object-fit: cover; border-radius: var(--radius); }
	.photo--ph { position: relative; overflow: hidden; }
	.photo--ph::after {
		content: ''; position: absolute; inset: 0;
		background:
			radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.18), transparent 55%),
			repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0 2px, transparent 2px 38px);
	}
	.photo--wood { background: linear-gradient(160deg, #a8743f, #6b4220 60%, #3e2512); }
	.photo--ember { background: linear-gradient(160deg, #d08a4a, #8c3f1c 55%, #2d140b); }
	.photo--steam { background: linear-gradient(170deg, #e7e2d6, #b9b3a5 60%, #7d776b); }
	.photo--water { background: linear-gradient(170deg, #9cb7b4, #4f7471 60%, #213836); }
	.photo--forest { background: linear-gradient(170deg, #5f7d61, #2f4a36 60%, #14241a); }
	.photo--steam::after, .photo--water::after, .photo--forest::after {
		background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.25), transparent 60%);
	}
	.photo__label {
		position: absolute; left: 14px; top: 12px; z-index: 1;
		font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
		color: rgba(255, 255, 255, 0.85); background: rgba(0, 0, 0, 0.25);
		padding: 4px 8px; border-radius: 3px;
	}
</style>

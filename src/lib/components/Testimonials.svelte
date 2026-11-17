<script lang="ts">
	import { testimonials } from '#lib';
	let { tone = 'sand' }: { tone?: 'sand' | 'plain' } = $props();
</script>

<section class="section" class:section--sand={tone === 'sand'}>
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">Kind words</p>
			<h2>What our guests say</h2>
		</div>
		<div class="grid-3">
			{#each testimonials as t}
				<figure class="quote">
					<span class="quote__mark" aria-hidden="true">“</span>
					<blockquote>{t.quote}</blockquote>
					<figcaption>{t.name}</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.quote { margin: 0; padding: 32px; background: var(--paper); border-radius: var(--radius); border: 1px solid var(--line); }
	.quote__mark { font-family: var(--font-head); font-size: 4rem; line-height: 0.6; color: var(--wood); display: block; }
	.quote blockquote { margin: 12px 0 20px; font-family: var(--font-head); font-size: 1.4rem; line-height: 1.35; color: var(--green); }
	.quote figcaption { font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
</style>

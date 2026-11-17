<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { faqs } from '#lib';
	import { site } from '#lib';
</script>

<Seo title="FAQ" description="Answers to common questions about visiting the sauna." />

<PageHero eyebrow="Good to know" title="Frequently asked questions">
	<p class="lead">Can’t find your answer? Call <a href={site.phoneHref}>{site.phone}</a> or email <a href="mailto:{site.email}">{site.email}</a>.</p>
</PageHero>

<section class="section">
	<div class="container narrow faq">
		{#each faqs as f, i}
			<details open={i === 0}>
				<summary>{f.q}</summary>
				<p>{f.a}</p>
			</details>
		{/each}
	</div>
</section>

<style>
	.faq { margin-inline: auto; }
	details { border-bottom: 1px solid var(--line); }
	summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 24px 0; font-family: var(--font-head); font-size: 1.55rem; color: var(--green); }
	summary::-webkit-details-marker { display: none; }
	summary::after { content: '+'; font-family: var(--font-body); font-size: 1.6rem; font-weight: 300; transition: transform 0.2s; }
	details[open] summary::after { transform: rotate(45deg); }
	details p { margin: 0 0 24px; color: var(--muted); max-width: 62ch; }
</style>

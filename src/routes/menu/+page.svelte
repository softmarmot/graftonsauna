<script lang="ts">
	import { asset } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import { dishes, platters, kitchenPromises, site } from '#lib';
</script>

<Seo title="Menu" description="Home-cooked khinkali, khachapuri, borscht, plov and festive meat platters, made to order." />

<PageHero eyebrow="Home cooking" title="Homemade treats" lead="Made with love and care. Every dish is cooked to order for you and your group, so order ahead and it will be ready when you come out of the sauna." />

<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">Signature dishes</p>
			<h2>From our kitchen</h2>
		</div>
		<div class="grid-3 dishes">
			{#each dishes as d}
				<article class="dish">
					<Photo label={d.name} src={asset(d.img)} ratio="4 / 3" />
					<div class="dish__body">
						<h3>{d.name}</h3>
						<p class="dish__tag">{d.tagline}</p>
						<p>{d.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--dark">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow eyebrow--light">For celebrations</p>
			<h2>Festive meat platters</h2>
			<p class="platters__lead">Five generous platters for the table, from a classic mix to a full festive spread. Ask us what goes on each one.</p>
		</div>
		<div class="platters">
			{#each platters as p}
				<div class="platter">
					<img src={asset(p.img)} alt={p.name} loading="lazy" />
					<h3>{p.name}</h3>
					<p>{p.tagline}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section section--cream">
	<div class="container order">
		<div>
			<p class="eyebrow">How to order</p>
			<h2>Cooked to order, for you and your family</h2>
			<p class="lead">Call us at least a day before your visit and tell us what you’d like. We can serve it at the sauna or pack it to take home.</p>
			<div class="btn-row">
				<a class="btn" href={site.phoneHref}>Call {site.phone}</a>
				<a class="btn btn--ghost" href="mailto:{site.email}?subject=Food%20order">Email your order</a>
			</div>
		</div>
		<ul class="promises">
			{#each kitchenPromises as k}<li>{k}</li>{/each}
		</ul>
	</div>
	<p class="container note">Tasty · Quality · Homemade. Prices on request, and the menu may change with the season. Please tell us about any allergies.</p>
</section>

<style>
	.dish { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
	.dish :global(.photo) { border-radius: 0; }
	.dish__body { padding: 22px 24px 26px; }
	.dish__body h3 { margin-bottom: 2px; }
	.dish__tag { color: var(--wood); font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; }
	.dish__body p:last-child { margin: 0; color: var(--muted); font-size: 0.97rem; }

	.platters__lead { color: rgba(247, 243, 234, 0.8); }
	.platters { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; text-align: center; }
	.platter img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 50%; border: 3px solid rgba(247, 243, 234, 0.25); }
	.platter h3 { font-size: 1.45rem; margin: 16px 0 2px; }
	.platter p { margin: 0; color: #d9b48a; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; }
	@media (max-width: 900px) { .platters { grid-template-columns: repeat(3, 1fr); } }
	@media (max-width: 520px) { .platters { grid-template-columns: repeat(2, 1fr); } }

	.order { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: center; }
	.promises { list-style: none; margin: 0; padding: 0; }
	.promises li { font-family: var(--font-head); font-size: 1.6rem; color: var(--green); padding: 16px 0 16px 36px; border-bottom: 1px solid var(--line); position: relative; }
	.promises li::before { content: '✓'; position: absolute; left: 0; color: var(--wood); font-family: var(--font-body); font-size: 1.1rem; top: 22px; }
	.note { margin-top: 48px; text-align: center; color: var(--muted); font-size: 0.9rem; }
	@media (max-width: 760px) { .order { grid-template-columns: 1fr; } }
</style>

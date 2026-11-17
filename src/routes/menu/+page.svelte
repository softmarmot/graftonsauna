<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import { menu } from '#lib';
</script>

<Seo title="Menu" description="Teas, cold drinks and small plates for between rounds." />

<PageHero eyebrow="Food & drink" title="Between rounds" lead="Herbal teas, cold drinks and small plates, served in the lounge. Order when you arrive or add a snack board to your booking." />

<section class="section">
	<div class="container menu">
		{#each menu as cat, i}
			<div class="menu__cat">
				<h2>{cat.title}</h2>
				<ul>
					{#each cat.items as it}
						<li>
							<div class="menu__row"><span class="menu__name">{it.name}</span><span class="menu__dots"></span><span class="menu__price">${it.price}</span></div>
							<p>{it.desc}</p>
						</li>
					{/each}
				</ul>
				{#if i === 1}
					<div class="menu__photo"><Photo label="Tea set and honey on the lounge table" tone="ember" ratio="16 / 9" /></div>
				{/if}
			</div>
		{/each}
	</div>
	<p class="container menu__note">Please tell us about allergies when you book. Menu and prices may change with the season.</p>
</section>

<style>
	.menu { display: grid; grid-template-columns: 1fr 1fr; gap: 56px 80px; }
	.menu__cat h2 { font-size: 2.2rem; border-bottom: 2px solid var(--green); padding-bottom: 10px; }
	.menu__cat ul { list-style: none; padding: 0; margin: 0; }
	.menu__cat li { padding: 12px 0; }
	.menu__row { display: flex; align-items: baseline; gap: 10px; }
	.menu__name { font-family: var(--font-head); font-size: 1.4rem; color: var(--green); }
	.menu__dots { flex: 1; border-bottom: 1.5px dotted var(--line); transform: translateY(-5px); }
	.menu__price { font-variant-numeric: lining-nums; font-family: var(--font-head); font-size: 1.3rem; }
	.menu__cat p { margin: 0; color: var(--muted); font-size: 0.95rem; }
	.menu__photo { margin-top: 24px; }
	.menu__note { margin-top: 56px; text-align: center; color: var(--muted); font-size: 0.9rem; }
	@media (max-width: 760px) { .menu { grid-template-columns: 1fr; } }
</style>

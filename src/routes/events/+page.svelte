<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import { events, privateEvents } from '#lib';
	import { site, bookHref } from '#lib';
</script>

<Seo title="Events" description="Sauna nights, seasonal events and private parties." />

<PageHero eyebrow="What’s on" title="Events & private parties" lead="Seasonal sauna nights, guided mornings and the whole sauna house for your own celebration." />

<section class="section">
	<div class="container">
		<h2>Upcoming events</h2>
		<div class="events">
			{#each events as e}
				{@const [mon, day] = e.date.split(' ')}
				<article class="event">
					<div class="event__date"><span>{mon}</span><strong>{day}</strong><small>{e.day}</small></div>
					<div class="event__body">
						<h3>{e.title}</h3>
						<p class="event__meta">{e.time} · {e.price}</p>
						<p>{e.desc}</p>
					</div>
					<a class="btn btn--ghost" href={bookHref}>Reserve</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--sand">
	<div class="container grid-2">
		<div>
			<p class="eyebrow">Private hire</p>
			<h2>Host your sauna party</h2>
			<p class="lead">The sauna, the jacuzzi and the relaxation area, just for your group of up to 8.</p>
			<p class="price">from $450 <small>/ 3 hours</small></p>
			<p style="margin-top:1em">Includes sauna, shock bucket, hot jacuzzi, robes, teas and soft drinks. Add a host or one of our home-cooked festive platters.</p>
			<div class="btn-row">
				<a class="btn" href={bookHref}>Book a party</a>
				<a class="btn btn--ghost" href="mailto:{site.email}?subject=Private%20event">Ask a question</a>
			</div>
		</div>
		<Photo label="Festive table with platters" tone="ember" ratio="4 / 5" />
	</div>
</section>

<section class="section">
	<div class="container grid-4">
		{#each privateEvents as p}
			<div class="card">
				<h3>{p.title}</h3>
				<p class="muted">{p.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.events { margin-top: 28px; border-top: 1px solid var(--line); }
	.event { display: grid; grid-template-columns: 96px 1fr auto; gap: 32px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
	.event__date { text-align: center; background: var(--green); color: var(--cream); border-radius: var(--radius); padding: 12px 6px; line-height: 1.1; }
	.event__date span, .event__date small { display: block; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; }
	.event__date strong { display: block; font-variant-numeric: lining-nums; font-family: var(--font-head); font-size: 2.4rem; font-weight: 500; }
	.event__body h3 { margin-bottom: 4px; }
	.event__meta { color: var(--wood); font-size: 0.9rem; letter-spacing: 0.05em; margin-bottom: 6px; }
	.event__body p:last-child { margin: 0; color: var(--muted); }
	.muted { color: var(--muted); margin: 0; }
	@media (max-width: 640px) {
		.event { grid-template-columns: 76px 1fr; gap: 18px; }
		.event .btn { grid-column: 1 / -1; justify-self: start; }
	}
</style>

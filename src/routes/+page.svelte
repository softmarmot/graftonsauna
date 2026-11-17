<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import SessionCards from '#lib/components/SessionCards.svelte';
	import Hours from '#lib/components/Hours.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { site, booking, bookHref } from '#lib';

	const features = [
		{ title: 'Electric sauna heat', tone: 'ember', text: 'A powerful electric heater with a basket of stones. Steady, even heat from the first minute, with steam whenever you want it.' },
		{ title: 'Shock bucket', tone: 'water', text: 'A bucket shower of ice-cold water: pull the rope and it tips over you. The moment everyone talks about afterwards.' },
		{ title: 'Hot jacuzzi', tone: 'forest', text: 'Optional on any private booking, heated to 102°F and ready when you arrive.' },
		{ title: 'Home-cooked food', tone: 'wood', src: 'images/menu/khachapuri.jpg', text: 'Khinkali, borscht, plov and festive platters, cooked to order for your group.' }
	] as const;

	const ritual = [
		{ n: '01', t: 'Heat', d: '10–15 minutes in the sauna. Pour water on the stones for steam.' },
		{ n: '02', t: 'Cold', d: 'Pull the shock bucket or take a cold shower. A few seconds is enough.' },
		{ n: '03', t: 'Rest', d: 'Sit down with a cup of tea. Let your body settle.' },
		{ n: '04', t: 'Repeat', d: 'Three rounds is the classic. Go at your own pace.' }
	];
</script>

<Seo title="Home" />

<section class="hero">
	<div class="hero__bg" aria-hidden="true"></div>
	<div class="container hero__inner">
		<p class="eyebrow eyebrow--light">Private sauna for up to 8</p>
		<h1>Heat, cold water<br />and time to slow down</h1>
		<p class="hero__lead">A Finnish-style sauna for up to 8 guests, with an ice-cold shock bucket, an optional hot jacuzzi and home-cooked food to order.</p>
		<div class="btn-row">
			<a class="btn btn--light" href={bookHref}>Book a session</a>
			<a class="btn btn--ghost-light" href={booking.giftCardUrl}>Buy a gift card</a>
		</div>
	</div>
	<span class="hero__ph">Video / photo · sauna house at dusk with steam</span>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">Sessions</p>
			<h2>Choose how you sauna</h2>
			<p class="lead">One hour minimum, then add time in 30-minute steps. Every booking includes towels, water and tea.</p>
		</div>
		<SessionCards />
	</div>
</section>

<section class="section">
	<div class="container grid-2">
		<Photo label="Inside the sauna, benches and heater" tone="wood" ratio="4 / 5" />
		<div>
			<p class="eyebrow">The sauna house</p>
			<h2>Built for proper heat</h2>
			<p class="lead">We built {site.name} for the slow kind of sauna: strong, steady heat, cold water close by and nothing on the clock except your own booking.</p>
			<p>The room seats eight on two tiers of wooden benches and is warmed by an electric heater, so it is hot and ready the moment you walk in. Step out to the shock bucket, then into the jacuzzi, and move between heat and cold the way it has been done for centuries.</p>
			<div class="btn-row"><a class="btn btn--ghost" href={resolve('/about')}>Our story</a><a class="btn btn--ghost" href={resolve('/services')}>All services</a></div>
		</div>
	</div>
</section>

<section class="section section--cream">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">What’s included</p>
			<h2>Everything you need for a proper sauna</h2>
		</div>
		<div class="grid-4">
			{#each features as f}
				<article class="feature">
					<Photo label={f.title} tone={f.tone} src={'src' in f ? asset(f.src) : ''} ratio="3 / 4" />
					<h3>{f.title}</h3>
					<p>{f.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--dark">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow eyebrow--light">The ritual</p>
			<h2>Heat. Cold. Rest. Repeat.</h2>
		</div>
		<ol class="ritual">
			{#each ritual as r}
				<li><span>{r.n}</span><h3>{r.t}</h3><p>{r.d}</p></li>
			{/each}
		</ol>
	</div>
</section>

<section class="section">
	<div class="container grid-2">
		<div>
			<p class="eyebrow">Opening hours</p>
			<h2>When to find us</h2>
			<Hours />
			<p class="note">Community Sauna runs Tuesday and Thursday at 6:30 pm. Private bookings fill every other slot.</p>
		</div>
		<div>
			<Photo label="Jacuzzi and relaxation area" tone="forest" ratio="4 / 3" />
			<div class="visit__card">
				<h3>Visit us</h3>
				<p>{site.address[0]}<br />{site.address[1]}</p>
				<p>Free parking on site.</p>
				<a class="btn" href={site.mapUrl} target="_blank" rel="noopener">Get directions</a>
			</div>
		</div>
	</div>
</section>

<Testimonials />

<style>
	.hero { position: relative; overflow: hidden; min-height: min(86vh, 760px); display: flex; align-items: center; color: var(--cream); background: var(--green-deep); }
	.hero__bg {
		position: absolute; inset: 0;
		background:
			radial-gradient(ellipse 60% 70% at 78% 85%, rgba(208, 138, 74, 0.55), transparent 70%),
			radial-gradient(ellipse 50% 40% at 70% 20%, rgba(247, 243, 234, 0.12), transparent 70%),
			linear-gradient(120deg, #142a1f 30%, #2c3a2a 65%, #5a3a1f);
	}
	.hero__inner { position: relative; padding: 100px 0; }
	.hero h1 { color: var(--cream); max-width: 14ch; }
	.hero__lead { font-size: 1.2rem; max-width: 520px; color: rgba(247, 243, 234, 0.85); margin-bottom: 32px; }
	.hero__ph { position: absolute; right: 20px; bottom: 16px; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(247, 243, 234, 0.5); }
	.feature h3 { margin-top: 20px; }
	.feature p { color: var(--muted); font-size: 0.97rem; }
	.ritual { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
	.ritual li { border-top: 1px solid rgba(247, 243, 234, 0.3); padding-top: 22px; }
	.ritual span { font-family: var(--font-head); font-size: 1rem; color: #d9b48a; letter-spacing: 0.1em; font-variant-numeric: lining-nums; }
	.ritual h3 { font-size: 2.2rem; margin: 6px 0 8px; }
	.ritual p { color: rgba(247, 243, 234, 0.78); margin: 0; }
	@media (max-width: 860px) { .ritual { grid-template-columns: 1fr 1fr; } }
	@media (max-width: 480px) { .ritual { grid-template-columns: 1fr; } }
	.note { margin-top: 20px; color: var(--muted); }
	.visit__card { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; margin: -60px 24px 0; position: relative; }
</style>

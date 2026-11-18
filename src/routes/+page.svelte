<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import SessionCards from '#lib/components/SessionCards.svelte';
	import Hours from '#lib/components/Hours.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { site, booking, bookHref, mapUrl, ritualPhoto, heroVideo, parallax, photos } from '#lib';
	import MapEmbed from '#lib/components/MapEmbed.svelte';

	const features = [
		{ title: 'Electric sauna heat', tone: 'ember', photo: photos.electricHeater, text: 'A powerful electric heater with a basket of stones. Steady, even heat from the first minute, with steam whenever you want it.' },
		{ title: 'Shock bucket', tone: 'water', photo: photos.woodenBucket, text: 'A bucket shower of ice-cold water: pull the rope and it tips over you. The moment everyone talks about afterwards.' },
		{ title: 'Hot jacuzzi', tone: 'forest', photo: photos.hotTubDeck, text: 'Optional on any private booking, heated to 102°F and ready when you arrive.' },
		{ title: 'Home-cooked food', tone: 'wood', src: 'images/menu/khachapuri.jpg', text: 'Khinkali, borscht, plov and festive platters, cooked to order for your group.' }
	] as const;

	// The video only loads in the browser, and never for visitors who prefer reduced motion
	// (they get the still poster instead).
	let showVideo = $state(false);
	$effect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
		const sync = () => (showVideo = !reduce.matches);
		sync();
		reduce.addEventListener('change', sync);
		return () => reduce.removeEventListener('change', sync);
	});

	const ritual = [
		{ n: '01', t: 'Heat', d: '10–15 minutes in the sauna. Pour water on the stones for steam.' },
		{ n: '02', t: 'Cold', d: 'Pull the shock bucket or take a cold shower. A few seconds is enough.' },
		{ n: '03', t: 'Rest', d: 'Sit down with a cup of tea. Let your body settle.' },
		{ n: '04', t: 'Repeat', d: 'Three rounds is the classic. Go at your own pace.' }
	];
</script>

<Seo title="Home" />

<section class="hero">
	<!-- Parallax video: moves at half the scroll speed, like the ritual band. -->
	<div class="hero__media" style:background-image="url({heroVideo.poster})" use:parallax={0.5} aria-hidden="true">
		{#if showVideo}
			<video autoplay muted loop playsinline preload="auto" poster={heroVideo.poster}>
				{#each heroVideo.sources as src}<source {src} type="video/mp4" />{/each}
			</video>
		{/if}
	</div>
	<!-- Soft steam drifting up over the video. Pure CSS, decorative only. -->
	<div class="hero__steam" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
	<div class="container hero__inner">
		<p class="eyebrow eyebrow--light">Private sauna for up to 8</p>
		<h1>Heat, cold water<br />and time to slow down</h1>
		<p class="hero__lead">A Finnish-style sauna for up to 8 guests, with an ice-cold shock bucket, an optional hot jacuzzi and home-cooked food to order.</p>
		<div class="btn-row">
			<a class="btn btn--light" href={bookHref}>Book a session</a>
			<a class="btn btn--ghost-light" href={booking.giftCardUrl}>Buy a gift card</a>
		</div>
	</div>
	{#if heroVideo.credit}
		<a class="hero__credit" href={heroVideo.creditUrl} target="_blank" rel="noopener">Video: {heroVideo.credit}</a>
	{/if}
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

<section class="section section--sand">
	<div class="container grid-2">
		<Photo label={photos.saunaInterior.alt} src={photos.saunaInterior.src} srcset={photos.saunaInterior.srcset} ratio="4 / 5" />
		<div>
			<p class="eyebrow">The sauna house</p>
			<h2>Built for proper heat</h2>
			<p class="lead">We built {site.name} for the slow kind of sauna: strong, steady heat, cold water close by and nothing on the clock except your own booking.</p>
			<p>The room seats eight on two tiers of wooden benches and is warmed by an electric heater, so it is hot and ready the moment you walk in. Step out to the shock bucket, then into the jacuzzi, and move between heat and cold the way it has been done for centuries.</p>
			<div class="btn-row"><a class="btn btn--ghost" href={resolve('/about')}>Our story</a><a class="btn btn--ghost" href={resolve('/services')}>All services</a></div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">What’s included</p>
			<h2>Everything you need for a proper sauna</h2>
		</div>
		<div class="grid-4">
			{#each features as f}
				<article class="feature">
					{#if 'photo' in f}
						<Photo label={f.photo.alt} tone={f.tone} src={f.photo.src} srcset={f.photo.srcset} sizes="(max-width: 760px) 100vw, 25vw" ratio="3 / 4" />
					{:else}
						<Photo label={f.title} tone={f.tone} src={asset(f.src)} ratio="3 / 4" />
					{/if}
					<h3>{f.title}</h3>
					<p>{f.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--dark ritual-band">
	<!-- Parallax: the photo moves at half the scroll speed of the content. -->
	<div
		class="ritual-band__bg"
		style:background-image="url({ritualPhoto.url}), url({asset('images/parallax-sauna.jpg')})"
		use:parallax={0.5}
		aria-hidden="true"
	></div>
	<div class="container ritual-band__inner">
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
	{#if ritualPhoto.credit}
		<a class="ritual-band__credit" href={ritualPhoto.creditUrl} target="_blank" rel="noopener">Photo: {ritualPhoto.credit}</a>
	{/if}
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
			<div class="visit__card">
				<h3>Visit us</h3>
				<p>{site.address[0]}<br />{site.address[1]}</p>
				<p>Free parking on site.</p>
				<a class="btn" href={mapUrl} target="_blank" rel="noopener">Get directions</a>
			</div>
		</div>
	</div>
</section>

<MapEmbed />

<Testimonials />

<style>
	.hero { position: relative; overflow: hidden; min-height: min(86vh, 760px); display: flex; align-items: center; color: var(--cream); background: var(--green-deep); }
	.hero__media {
		position: absolute; left: 0; right: 0; top: 0; height: 100%; z-index: 0;
		background: var(--green-deep) center / cover no-repeat;
		pointer-events: none; will-change: transform;
	}
	.hero__media video { width: 100%; height: 100%; object-fit: cover; display: block; }
	/* Overlay keeps the headline readable over any frame of the video. */
	.hero::before {
		content: ''; position: absolute; inset: 0; z-index: 1;
		background:
			linear-gradient(90deg, rgba(20, 42, 31, 0.78) 0%, rgba(20, 42, 31, 0.45) 55%, rgba(20, 42, 31, 0.2)),
			linear-gradient(180deg, rgba(20, 42, 31, 0.35), transparent 30%, rgba(20, 42, 31, 0.5));
	}
	.hero h1, .hero__lead { text-shadow: 0 1px 14px rgba(0, 0, 0, 0.4); }
	.hero__inner { position: relative; z-index: 2; padding: 100px 0; }
	/* Headline, lead and buttons arrive one after another on load. */
	.hero__inner > * { animation: rise-in 1s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
	.hero__inner > :nth-child(2) { animation-delay: 0.12s; }
	.hero__inner > :nth-child(3) { animation-delay: 0.26s; }
	.hero__inner > :nth-child(4) { animation-delay: 0.4s; }
	/* Steam: large, very faint, soft-edged wisps that rise, swell and fade.
	   Only transform/opacity animate, so it stays cheap on phones. */
	.hero__steam { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
	.hero__steam span {
		position: absolute; bottom: -30%; width: 46vmax; height: 46vmax; border-radius: 50%;
		background: radial-gradient(closest-side, rgba(247, 243, 234, 0.16), rgba(247, 243, 234, 0.06) 55%, transparent);
		opacity: 0; animation: steam 18s ease-in-out infinite;
	}
	.hero__steam span:nth-child(1) { left: 2%; animation-delay: 0s; }
	.hero__steam span:nth-child(2) { left: 30%; animation-delay: -4.5s; animation-duration: 21s; }
	.hero__steam span:nth-child(3) { left: 55%; animation-delay: -9s; }
	.hero__steam span:nth-child(4) { left: 72%; animation-delay: -13.5s; animation-duration: 23s; }
	@keyframes steam {
		0% { opacity: 0; transform: translate3d(0, 0, 0) scale(0.7); }
		25% { opacity: 1; }
		70% { opacity: 0.6; }
		100% { opacity: 0; transform: translate3d(4vw, -70vh, 0) scale(1.25); }
	}
	@media (prefers-reduced-motion: reduce) {
		.hero__inner > * { animation: none; }
		.hero__steam { display: none; }
	}
	.hero h1 { color: var(--cream); max-width: 14ch; }
	.hero__lead { font-size: 1.2rem; max-width: 520px; color: rgba(247, 243, 234, 0.85); margin-bottom: 32px; }
	.hero__credit { position: absolute; right: 16px; bottom: 12px; z-index: 2; font-size: 0.7rem; letter-spacing: 0.06em; color: rgba(247, 243, 234, 0.7); text-decoration: none; }
	.hero__credit:hover { text-decoration: underline; }
	.feature h3 { margin-top: 20px; }
	.feature p { color: var(--muted); font-size: 0.97rem; }
	/* Parallax band. The image layer is moved by the parallax action
	   (transform-based, so it works on iOS too) and clipped to the section. */
	.ritual-band {
		position: relative;
		overflow: hidden;
		min-height: 85vh;
		display: flex; align-items: center;
		padding: clamp(110px, 16vw, 200px) 0;
	}
	.ritual-band__bg {
		position: absolute; left: 0; right: 0; top: 0; height: 100%; z-index: 0;
		background-size: cover, cover; background-position: center, center;
		pointer-events: none; will-change: transform;
	}
	.ritual-band::before {
		content: ''; position: absolute; inset: 0; z-index: 1;
		background: linear-gradient(180deg, rgba(20, 42, 31, 0.6), rgba(20, 42, 31, 0.3) 45%, rgba(20, 42, 31, 0.65));
	}
	.ritual-band__inner { position: relative; z-index: 2; width: min(var(--container), 100% - 40px); }
	.ritual-band :global(h2), .ritual-band :global(h3), .ritual-band p { text-shadow: 0 1px 12px rgba(0, 0, 0, 0.45); }
	.ritual-band__credit {
		position: absolute; right: 16px; bottom: 12px; z-index: 2;
		font-size: 0.7rem; letter-spacing: 0.06em; color: rgba(247, 243, 234, 0.7); text-decoration: none;
	}
	.ritual-band__credit:hover { text-decoration: underline; }
	.ritual { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
	.ritual li { border-top: 1px solid rgba(247, 243, 234, 0.3); padding-top: 22px; }
	.ritual span { font-family: var(--font-head); font-size: 1rem; color: #d9b48a; letter-spacing: 0.1em; font-variant-numeric: lining-nums; }
	.ritual h3 { font-size: 2.2rem; margin: 6px 0 8px; }
	.ritual p { color: rgba(247, 243, 234, 0.78); margin: 0; }
	@media (max-width: 860px) { .ritual { grid-template-columns: 1fr 1fr; } }
	@media (max-width: 480px) { .ritual { grid-template-columns: 1fr; } }
	.note { margin-top: 20px; color: var(--muted); }
	.visit__card { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); padding: 36px; }
</style>

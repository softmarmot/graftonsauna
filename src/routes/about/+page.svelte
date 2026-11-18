<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import Logo from '#lib/components/Logo.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { site } from '#lib';

	const values = [
		{ t: 'Real heat', d: 'A strong electric heater with a full basket of stones. Hot from the first minute, with as much steam as you like.' },
		{ t: 'Small groups', d: 'One room, eight guests at most. Nobody is rushing you out and nobody is crowding the bench.' },
		{ t: 'Cold done right', d: 'An ice-cold shock bucket and showers, a few steps from the sauna door.' },
		{ t: 'Quiet hosting', d: 'We get everything ready, show you around and then leave you to it.' },
		{ t: 'Clean, always', d: 'A full hour between bookings to clean, restock and bring the heat back up.' }
	];
</script>

<Seo title="About" description="The story behind {site.name}." />

<section class="page-hero">
	<div class="container">
		<Logo size="lg" />
		<p class="lead" style="margin-top:36px">A small sauna house built for slow evenings, good friends and the old ritual of heat and cold.</p>
	</div>
</section>

<section class="section">
	<div class="container grid-2">
		<div>
			<p class="eyebrow">Our story</p>
			<h2>Why we built a sauna</h2>
			<p>We grew up with saunas: in grandparents’ gardens, by lakes, after long winter days. When we could not find one nearby that felt the same, we decided to build it ourselves.</p>
			<p>{site.name} is the result. A hot sauna, an ice-cold shock bucket, a hot jacuzzi and good home cooking. Nothing flashy. Just the things that make a sauna worth the drive.</p>
			<p>Every session is private or hosted, so the place always feels calm.</p>
		</div>
		<Photo label="Our lounge: brick grill with a wooden mantel and a log-end wall" src={asset('images/lounge.webp')} ratio="4 / 5" />
	</div>
</section>

<section class="section section--sand">
	<div class="container grid-2">
		<Photo label="Steam rising from the stones" tone="steam" ratio="4 / 3" />
		<div>
			<p class="eyebrow">The tradition</p>
			<h2>Löyly, the breath of the sauna</h2>
			<p>In Finland the steam that rises when water hits hot stones has its own word: löyly. It is the heart of every round. Pour a ladle, feel the wave of heat, breathe slowly.</p>
			<p>Add a pull of the shock bucket and a cup of herbal tea, and you have a ritual that people have trusted for health, rest and company for more than a thousand years.</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">What we care about</p>
			<h2>Our philosophy</h2>
		</div>
		<div class="values">
			{#each values as v, i}
				<div class="value">
					<span>{String(i + 1).padStart(2, '0')}</span>
					<h3>{v.t}</h3>
					<p>{v.d}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section section--cream">
	<div class="container grid-2">
		<div>
			<p class="eyebrow">Private hire</p>
			<h2>Bring your people</h2>
			<p>Birthdays, team days, a weekend with old friends. Book the whole sauna for your group of up to 8, add the jacuzzi and a festive platter, and we will have it all ready when you arrive.</p>
			<a class="btn" href={resolve('/contact')}>Ask about private hire</a>
		</div>
		<Photo label="Friends in the jacuzzi" tone="forest" ratio="4 / 3" />
	</div>
</section>

<Testimonials tone="plain" />

<style>
	.values { display: grid; grid-template-columns: repeat(5, 1fr); gap: 28px; }
	.value { border-top: 2px solid var(--green); padding-top: 18px; }
	.value span { font-family: var(--font-head); color: var(--wood); font-variant-numeric: lining-nums; }
	.value h3 { margin: 4px 0 8px; }
	.value p { color: var(--muted); font-size: 0.95rem; }
	@media (max-width: 960px) { .values { grid-template-columns: 1fr 1fr; } }
	@media (max-width: 520px) { .values { grid-template-columns: 1fr; } }
</style>

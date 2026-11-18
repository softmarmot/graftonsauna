<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import SessionCards from '#lib/components/SessionCards.svelte';
	import { booking, bookHref, photos } from '#lib';

	const details = [
		{ t: 'Private Sauna', tone: 'wood', photo: photos.rusticSauna, p: ['The whole sauna house for your group of up to 8. The heater is switched on before you arrive, so the room is fully hot from your first minute.', 'Book one hour, or add time in 30-minute steps. Most groups stay two hours, which gives time for three or four relaxed rounds.'] },
		{ t: 'Sauna & Jacuzzi', tone: 'forest', photo: photos.hotTubSnow, p: ['Everything in the private session, plus our hot jacuzzi. Warm water after the cold bucket is the best part of the evening.', 'Robes for every guest and a welcome drink are included.'] },
		{ t: 'Community Sauna', tone: 'steam', photo: photos.pouringWater, p: ['A hosted, shared session on Tuesday and Thursday evenings. Our host runs the rounds, pours the steam and shows first-timers how it works.', 'A friendly way to try sauna if you are on your own. 18+, swimwear required.'] },
	] as const;
</script>

<Seo title="Services" description="Private sauna sessions, hot jacuzzi and community nights." />

<PageHero eyebrow="Services & pricing" title="Sauna sessions" lead="Every booking includes the sauna, shock bucket, showers, towels, water and tea.">
	<div class="btn-row hero-cta"><a class="btn" href={bookHref}>Book now</a></div>
</PageHero>

<section class="section">
	<div class="container"><SessionCards /></div>
</section>

{#each details as d, i}
	<section class="section" class:section--sand={i % 2 === 0}>
		<div class="container grid-2" class:flip={i % 2 === 1}>
			<Photo label={d.photo.alt} tone={d.tone} src={d.photo.src} srcset={d.photo.srcset} ratio="4 / 3" />
			<div>
				<h2>{d.t}</h2>
				{#each d.p as para}<p>{para}</p>{/each}
				<a class="btn btn--ghost" href={bookHref}>Book</a>
			</div>
		</div>
	</section>
{/each}

<section class="section">
	<div class="container section-head" style="margin-bottom:0">
		<p class="eyebrow">Gift cards</p>
		<h2>Give someone a sauna</h2>
		<p class="lead">Square eGift cards in any amount, delivered by email.</p>
		<a class="btn" href={booking.giftCardUrl}>Buy a gift card</a>
	</div>
</section>

<style>
	.hero-cta { justify-content: center; margin-top: 28px; }
	@media (min-width: 761px) { .flip > :global(:first-child) { order: 2; } }
</style>

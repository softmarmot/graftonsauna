<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import SessionCards from '#lib/components/SessionCards.svelte';
	import AddOns from '#lib/components/AddOns.svelte';
	import { booking, bookHref } from '#lib';

	const details = [
		{ t: 'Private Sauna', tone: 'wood', p: ['The whole sauna house for your group of up to 8. The stove is lit an hour before you arrive, so the room is fully hot from your first minute.', 'Book one hour, or add time in 30-minute steps. Most groups stay two hours, which gives time for three or four relaxed rounds.'] },
		{ t: 'Sauna & Hot Tub', tone: 'forest', p: ['Everything in the private session, plus our cedar hot tub. It sits outside under the trees and is especially good on cold, clear nights.', 'Robes for every guest and a welcome drink are included.'] },
		{ t: 'Community Sauna', tone: 'steam', p: ['A hosted, shared session on Tuesday and Thursday evenings. Our host runs the rounds, pours the aroma steam and shows first-timers how it works.', 'A friendly way to try sauna if you are on your own. 18+, swimwear required.'] },
		{ t: 'Birch whisk ritual', tone: 'ember', p: ['A traditional treatment with a bundle of fresh birch and oak leaves. The whisk moves hot steam across your body, then gentle tapping and pressing relaxes the muscles.', 'About 15 minutes, followed by a cold rinse and tea.'] }
	] as const;
</script>

<Seo title="Services" description="Private sauna sessions, hot tub, community nights and treatments." />

<PageHero eyebrow="Services & pricing" title="Sessions & treatments" lead="Every booking includes the sauna, cold plunge, outdoor showers, towels, water and tea.">
	<div class="btn-row hero-cta"><a class="btn" href={bookHref}>Book now</a></div>
</PageHero>

<section class="section">
	<div class="container"><SessionCards /></div>
</section>

<section class="section section--sand">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">Extras</p>
			<h2>Add-ons & treatments</h2>
			<p class="lead">Add any of these when you book, or ask on the day if there is time.</p>
		</div>
		<AddOns />
	</div>
</section>

{#each details as d, i}
	<section class="section" class:section--cream={i % 2 === 1}>
		<div class="container grid-2" class:flip={i % 2 === 1}>
			<Photo label={d.t} tone={d.tone} ratio="4 / 3" />
			<div>
				<h2>{d.t}</h2>
				{#each d.p as para}<p>{para}</p>{/each}
				<a class="btn btn--ghost" href={bookHref}>Book</a>
			</div>
		</div>
	</section>
{/each}

<section class="section section--sand">
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

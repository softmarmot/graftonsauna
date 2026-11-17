<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import MapEmbed from '#lib/components/MapEmbed.svelte';
	import Hours from '#lib/components/Hours.svelte';
	import { site, mapUrl } from '#lib';
</script>

<Seo title="Contact" description="How to find and contact {site.name}." />

<PageHero eyebrow="Get in touch" title="Contact & directions" lead="Questions about a booking, a private event or gift cards? We usually reply within a day." />

<section class="section">
	<div class="container">
		<div class="cards">
			<a class="card c" href={site.phoneHref}><p class="eyebrow">Call</p><h3>{site.phone}</h3><p>Tue – Sun, during opening hours</p></a>
			<a class="card c" href="mailto:{site.email}"><p class="eyebrow">Email</p><h3>{site.email}</h3><p>Bookings, events and anything else</p></a>
			<a class="card c" href={mapUrl} target="_blank" rel="noopener"><p class="eyebrow">Visit</p><h3>{site.address[0]}</h3><p>{site.address[1]} · free parking</p></a>
		</div>
		<div class="grid-2 lower">
			<div>
				<h2>Opening hours</h2>
				<Hours />
			</div>
			<div>
				<MapEmbed />
				<p class="directions"><a class="btn btn--ghost" href={mapUrl} target="_blank" rel="noopener">Get directions</a></p>
				<p class="note">Arrive 10 minutes early so we can show you around. Your session time starts at the booked time.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
	.c { text-decoration: none; color: inherit; transition: border-color 0.2s, transform 0.2s; }
	.c:hover { border-color: var(--green); transform: translateY(-2px); }
	.c h3 { font-size: 1.45rem; overflow-wrap: anywhere; }
	.c p:last-child { color: var(--muted); margin: 0; }
	.lower { margin-top: 64px; align-items: start; }
	.directions { margin: 18px 0 0; }
	.note { margin-top: 14px; color: var(--muted); font-size: 0.95rem; }
	@media (max-width: 860px) { .cards { grid-template-columns: 1fr; } }
</style>

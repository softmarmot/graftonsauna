<!--
	Booking area. Shows the Square Appointments widget when `booking.widgetScriptSrc`
	is set in src/lib/site.ts, otherwise a clearly marked placeholder.
	Square's widget script writes its iframe in place with document.write, so it is
	loaded inside a sandboxed srcdoc iframe; that works on client-side navigation too.
-->
<script lang="ts">
	import { booking, site } from '#lib';
	let {
		title = 'Book your session',
		intro = 'Pick a date, a time and how long you want the room. Square sends a confirmation by email and a reminder by text before you arrive.'
	}: { title?: string; intro?: string } = $props();

	const widgetDoc = booking.widgetScriptSrc
		? `<!doctype html><html><body style="margin:0"><script src="${booking.widgetScriptSrc}"><\/script></body></html>`
		: '';
</script>

<section class="section section--dark" id="book">
	<div class="container booking">
		<div class="booking__text">
			<p class="eyebrow eyebrow--light">Reservations</p>
			<h2>{title}</h2>
			<p>{intro}</p>
			<p class="booking__help">
				Booking for a group bigger than 8 or a private event? Call
				<a href={site.phoneHref}>{site.phone}</a> or email <a href="mailto:{site.email}">{site.email}</a>.
			</p>
			<div class="btn-row">
				{#if booking.bookingUrl}
					<a class="btn btn--light" href={booking.bookingUrl} target="_blank" rel="noopener">Open booking page</a>
				{/if}
				<a class="btn btn--ghost-light" href={booking.giftCardUrl}>Buy a gift card</a>
			</div>
		</div>
		<div class="booking__widget">
			{#if widgetDoc}
				<iframe
					srcdoc={widgetDoc}
					title="Book a session"
					width="100%"
					height="820"
					sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
				></iframe>
			{:else}
				<div class="booking__ph">
					<svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="6" y="10" width="36" height="32" rx="3" /><path d="M6 19h36M16 6v8M32 6v8M14 27h4M22 27h4M30 27h4M14 34h4M22 34h4" /></svg>
					<p class="booking__ph-title">Square Appointments booking</p>
					<p>
						The live booking calendar loads here. Paste the widget script URL into
						<code>booking.widgetScriptSrc</code> in <code>src/lib/site.ts</code>.
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.booking { display: grid; gap: 48px; grid-template-columns: 1fr 1.3fr; align-items: start; }
	.booking h2 { color: var(--cream); }
	.booking__text p { color: rgba(247, 243, 234, 0.82); }
	.booking__help a { color: var(--cream); }
	.booking__widget iframe { border: 0; border-radius: var(--radius); background: #fff; }
	.booking__ph {
		border: 1.5px dashed rgba(247, 243, 234, 0.45); border-radius: var(--radius);
		min-height: 420px; display: flex; flex-direction: column; align-items: center; justify-content: center;
		text-align: center; padding: 32px; gap: 6px; color: rgba(247, 243, 234, 0.8);
	}
	.booking__ph-title { font-family: var(--font-head); font-size: 1.5rem; color: var(--cream); margin-top: 8px; }
	.booking__ph code { background: rgba(255, 255, 255, 0.1); padding: 1px 6px; border-radius: 3px; font-size: 0.85em; }
	@media (max-width: 860px) { .booking { grid-template-columns: 1fr; } }
</style>

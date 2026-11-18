<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Logo from '#lib/components/Logo.svelte';
	import BookingSlot from '#lib/components/BookingSlot.svelte';
	import { site, nav, bookHref, booking, mapUrl, reveal } from '#lib';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	let open = $state(false);
	const year = new Date().getFullYear();
	const current = $derived(page.url.pathname.replace(/\/$/, ''));
	const isCurrent = (href: string) => current === href.replace(/\/$/, '');
	const external = booking.bookingUrl ? { target: '_blank', rel: 'noopener' } : {};

	// Header picks up a soft shadow once the page scrolls under it.
	let scrolled = $state(false);
	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Crossfade between pages where the browser supports View Transitions.
	// Other browsers (and reduced-motion visitors) just navigate as before.
	onNavigate((navigation) => {
		if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		return new Promise((done) => {
			document.startViewTransition(async () => {
				done();
				await navigation.complete;
			});
		});
	});
</script>

<div class="demo-note">Demo site. Name, phone, email, prices and photos are placeholders.</div>

<header class="header" class:is-open={open} class:is-scrolled={scrolled}>
	<div class="container header__inner">
		<a href={resolve('/')} class="header__logo" onclick={() => (open = false)}><Logo /></a>
		<nav class="header__nav" id="site-nav" aria-label="Main">
			{#each nav as item}
				<a href={resolve(item.href)} aria-current={isCurrent(resolve(item.href)) ? 'page' : undefined} onclick={() => (open = false)}>{item.label}</a>
			{/each}
			<a class="header__phone header__phone--mobile" href={site.phoneHref}>{site.phone}</a>
		</nav>
		<div class="header__actions">
			<a class="header__phone" href={site.phoneHref}>{site.phone}</a>
			<a class="btn" href={bookHref} {...external}>Book now</a>
			<button class="header__toggle" aria-controls="site-nav" aria-expanded={open} aria-label="Menu" onclick={() => (open = !open)}>
				<span></span><span></span><span></span>
			</button>
		</div>
	</div>
</header>

<main use:reveal={page.url.pathname}>
	{@render children()}
	<BookingSlot />
</main>

<footer class="footer">
	<div class="container footer__grid">
		<div>
			<Logo tone="light" />
			<p class="footer__tag">{site.tagline}</p>
			<div class="footer__social">
				<a href={site.instagram} aria-label="Instagram"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a>
				<a href={site.facebook} aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.2V10H7v4h3v7h4v-7h3l.5-4H14V8.6c0-.4.3-.6.6-.6z" /></svg></a>
			</div>
		</div>
		<div>
			<h4>Visit</h4>
			<p>{site.address[0]}<br />{site.address[1]}</p>
			<a href={mapUrl} target="_blank" rel="noopener">Get directions →</a>
		</div>
		<div>
			<h4>Hours</h4>
			<ul class="footer__hours">
				{#each site.hours as h}<li><span>{h.days}</span><span>{h.time}</span></li>{/each}
			</ul>
		</div>
		<div>
			<h4>Contact</h4>
			<p><a href={site.phoneHref}>{site.phone}</a><br /><a href="mailto:{site.email}">{site.email}</a></p>
			<h4>Explore</h4>
			<p class="footer__links">
				{#each nav.slice(1) as n}<a href={resolve(n.href)}>{n.label}</a>{/each}
			</p>
		</div>
	</div>
	<div class="container footer__bottom">
		<span>© {year} {site.name}. All rights reserved.</span>
		<span>Payments by Square: Visa · Mastercard · Amex · Apple Pay · Google Pay</span>
		<span>Developed by <a href={site.credit.url} target="_blank" rel="noopener">{site.credit.name}</a></span>
	</div>
</footer>

<style>
	.header { position: sticky; top: 0; z-index: 50; background: rgba(251, 249, 244, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); transition: box-shadow 0.3s ease; view-transition-name: site-header; }
	.header.is-scrolled { box-shadow: 0 6px 24px -14px rgba(20, 42, 31, 0.35); }
	.header__inner { display: flex; align-items: center; gap: 28px; min-height: 84px; }
	.header__logo { text-decoration: none; flex: none; }
	.header__nav { display: flex; gap: 26px; margin-left: auto; }
	.header__nav a { position: relative; text-decoration: none; color: var(--ink); font-size: 0.8rem; letter-spacing: 0.16em; text-transform: uppercase; padding: 6px 0; transition: color 0.2s; }
	/* Underline draws in from the left on hover. */
	.header__nav a::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1.5px; background: var(--wood); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
	.header__nav a:hover, .header__nav a[aria-current='page'] { color: var(--green); }
	.header__nav a:hover::after, .header__nav a[aria-current='page']::after { transform: scaleX(1); }
	@media (prefers-reduced-motion: reduce) { .header__nav a::after { transition: none; } }
	.header__actions { display: flex; align-items: center; gap: 18px; }
	.header__actions .btn { padding: 11px 22px; }
	.header__phone { text-decoration: none; font-size: 0.9rem; color: var(--green); white-space: nowrap; }
	.header__nav .header__phone--mobile { display: none; }
	.header__toggle { display: none; background: none; border: 0; width: 40px; height: 40px; padding: 8px; cursor: pointer; }
	.header__toggle span { display: block; height: 2px; background: var(--green); margin: 5px 0; transition: transform 0.2s, opacity 0.2s; }

	@media (max-width: 1180px) { .header__actions .header__phone { display: none; } }
	@media (max-width: 980px) {
		.header__toggle { display: block; }
		.header__nav { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; gap: 0; padding: 8px 20px 20px; background: var(--paper); border-bottom: 1px solid var(--line); display: none; }
		.is-open .header__nav { display: flex; }
		.header__nav a { padding: 14px 0; border-bottom: 1px solid var(--line); }
		.header__nav a::after { display: none; }
		.header__nav .header__phone--mobile { display: block; color: var(--green); }
		.header__actions { margin-left: auto; }
		.is-open .header__toggle span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
		.is-open .header__toggle span:nth-child(2) { opacity: 0; }
		.is-open .header__toggle span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
	}
	@media (max-width: 420px) { .header__actions .btn { padding: 10px 16px; letter-spacing: 0.1em; } }

	.footer { background: var(--green-deep); color: rgba(247, 243, 234, 0.8); padding: 72px 0 28px; font-size: 0.95rem; }
	.footer a { color: var(--cream); text-decoration: none; }
	.footer a:hover { text-decoration: underline; }
	.footer h4 { color: var(--cream); font-family: var(--font-body); font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 12px; font-weight: 500; }
	.footer__grid { display: grid; grid-template-columns: 1.3fr 1fr 1.2fr 1fr; gap: 40px; }
	.footer__tag { margin-top: 18px; font-family: var(--font-head); font-style: italic; font-size: 1.2rem; }
	.footer__social { display: flex; gap: 14px; }
	.footer__hours { list-style: none; padding: 0; margin: 0; }
	.footer__hours li { display: flex; justify-content: space-between; gap: 12px; padding: 3px 0; }
	.footer__links { display: flex; flex-direction: column; gap: 2px; }
	.footer__bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-top: 56px; padding-top: 22px; border-top: 1px solid rgba(247, 243, 234, 0.15); font-size: 0.8rem; color: rgba(247, 243, 234, 0.55); }
	@media (max-width: 900px) { .footer__grid { grid-template-columns: 1fr 1fr; } }
	@media (max-width: 560px) { .footer__grid { grid-template-columns: 1fr; } }
</style>

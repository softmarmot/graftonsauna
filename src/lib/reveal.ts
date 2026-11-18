/**
 * Svelte action: content fades and rises gently into place the first time it
 * scrolls into view. Put it on <main> once; it finds the blocks to animate by
 * selector, so pages need no extra markup.
 *
 * - Blocks already on screen when the page loads are left alone (no flash).
 * - Siblings in a grid are staggered slightly, so a row arrives left to right.
 * - Nothing is hidden without JavaScript, and nothing moves for visitors who
 *   prefer reduced motion.
 *
 * Usage: <main use:reveal={page.url.pathname}> (the parameter re-scans after
 * client-side navigation).
 */
const SELECTOR = [
	'.section-head',
	'.grid-2 > *',
	'.grid-3 > *',
	'.grid-4 > *',
	'.ritual > li',
	'.cards > *',
	'.reveal-me'
].join(', ');

const STEP_MS = 90; // delay between siblings
const MAX_STEPS = 4;

export function reveal(node: HTMLElement, _key?: unknown) {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
	if (reduce.matches || !('IntersectionObserver' in window)) return {};

	const done = (el: Element) => {
		// Drop the classes once the transition has run, so hover effects that
		// also use `transform` (card lift, photo zoom) work normally afterwards.
		const clean = () => el.classList.remove('reveal', 'is-in');
		el.addEventListener('transitionend', clean, { once: true });
		setTimeout(clean, 1600); // in case transitionend never fires
	};

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-in');
				io.unobserve(entry.target);
				done(entry.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
	);

	const scan = () => {
		const fold = window.innerHeight;
		for (const el of node.querySelectorAll<HTMLElement>(SELECTOR)) {
			if (el.dataset.reveal) continue;
			el.dataset.reveal = '1';
			if (el.getBoundingClientRect().top < fold) continue; // already visible
			const index = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
			el.style.setProperty('--reveal-delay', `${(index % MAX_STEPS) * STEP_MS}ms`);
			el.classList.add('reveal');
			io.observe(el);
		}
	};

	let frame = requestAnimationFrame(scan);

	return {
		update() {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(scan);
		},
		destroy() {
			cancelAnimationFrame(frame);
			io.disconnect();
		}
	};
}

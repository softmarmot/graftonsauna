/**
 * Svelte action: moves the element vertically as the page scrolls, slower than
 * the content, to create a parallax effect. Transform-based, so it also works
 * on iOS (which ignores `background-attachment: fixed`). Does nothing when the
 * visitor prefers reduced motion.
 *
 * Usage: <div class="bg" use:parallax={0.3}></div>
 * The element should be absolutely positioned and taller than its section.
 */
export function parallax(node: HTMLElement, speed = 0.3) {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
	const section = node.parentElement ?? node;
	let frame = 0;
	let visible = false;

	const update = () => {
		frame = 0;
		if (reduce.matches) {
			node.style.transform = '';
			return;
		}
		const rect = section.getBoundingClientRect();
		// 0 when the section's centre is at the viewport centre.
		const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
		node.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
	};
	const onScroll = () => {
		if (visible && !frame) frame = requestAnimationFrame(update);
	};

	const io = new IntersectionObserver(([entry]) => {
		visible = entry.isIntersecting;
		if (visible) onScroll();
	});
	io.observe(section);
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll);
	reduce.addEventListener('change', update);
	update();

	return {
		update(newSpeed: number) {
			speed = newSpeed;
			update();
		},
		destroy() {
			io.disconnect();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			reduce.removeEventListener('change', update);
			if (frame) cancelAnimationFrame(frame);
		}
	};
}

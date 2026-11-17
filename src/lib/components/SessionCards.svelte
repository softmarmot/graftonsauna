<script lang="ts">
	import { sessions } from '#lib';
	import { bookHref } from '#lib';
</script>

<div class="grid-3">
	{#each sessions as s}
		<article class="card session" class:session--featured={s.featured}>
			{#if s.featured}<span class="session__badge">Most booked</span>{/if}
			<p class="eyebrow">{s.guests}</p>
			<h3>{s.name}</h3>
			<p class="price">${s.price} <small>/ {s.unit}</small></p>
			<p class="session__extra">{s.extra}</p>
			<p>{s.blurb}</p>
			<ul class="session__list">
				{#each s.includes as i}<li>{i}</li>{/each}
			</ul>
			<a class="btn" class:btn--ghost={!s.featured} href={bookHref}>Book {s.name}</a>
		</article>
	{/each}
</div>

<style>
	.session { display: flex; flex-direction: column; position: relative; }
	.session .btn { margin-top: auto; }
	.session__extra { color: var(--muted); font-size: 0.9rem; margin-top: 8px; }
	.session__list { padding: 0; margin: 0 0 28px; list-style: none; font-size: 0.95rem; }
	.session__list li { padding: 7px 0 7px 22px; border-top: 1px solid var(--line); position: relative; }
	.session__list li::before { content: ''; position: absolute; left: 2px; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--wood); }
	.session--featured { background: var(--green); border-color: var(--green); color: var(--cream); }
	.session--featured h3, .session--featured .price { color: var(--cream); }
	.session--featured .price small, .session--featured .session__extra { color: rgba(247, 243, 234, 0.7); }
	.session--featured .session__list li { border-color: rgba(247, 243, 234, 0.2); }
	.session--featured .btn { background: var(--cream); color: var(--green); border-color: var(--cream); }
	.session__badge {
		position: absolute; top: -12px; right: 24px; background: var(--wood); color: #fff;
		font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
	}
</style>

<script lang="ts">
	import { addOns } from '#lib';
</script>

<div class="addons">
	{#each addOns as a}
		<div class="addon">
			<div>
				<h4>{a.name} <span>{a.time}</span></h4>
				<p>{a.note}</p>
			</div>
			<strong>{a.price}</strong>
		</div>
	{/each}
</div>

<style>
	.addons { display: grid; grid-template-columns: 1fr 1fr; column-gap: 56px; }
	.addon { display: flex; justify-content: space-between; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); }
	.addon h4 { font-size: 1.4rem; margin: 0 0 4px; }
	.addon h4 span { font-family: var(--font-body); font-size: 0.8rem; color: var(--muted); margin-left: 6px; letter-spacing: 0.05em; }
	.addon p { margin: 0; color: var(--muted); font-size: 0.95rem; }
	.addon strong { font-variant-numeric: lining-nums; font-family: var(--font-head); font-size: 1.6rem; font-weight: 500; color: var(--green); white-space: nowrap; }
	@media (max-width: 760px) { .addons { grid-template-columns: 1fr; } }
</style>

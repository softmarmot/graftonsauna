<script lang="ts">
	import { site } from '#lib';
</script>

<ul class="hours">
	{#each site.hours as h}
		<li><span>{h.days}</span><span>{h.time}</span></li>
	{/each}
</ul>

<style>
	.hours { list-style: none; padding: 0; margin: 0; font-variant-numeric: lining-nums; }
	.hours li { display: flex; justify-content: space-between; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 1.05rem; }
	.hours li span:first-child { font-family: var(--font-head); font-size: 1.35rem; color: var(--green); }
</style>

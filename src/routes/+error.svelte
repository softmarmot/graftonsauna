<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo title={page.status === 404 ? 'Page not found' : 'Something went wrong'} />

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">{page.status}</p>
		<h1>{page.status === 404 ? 'This page has cooled off' : 'Something went wrong'}</h1>
		<p class="lead">The page you are looking for isn’t here. Head back to the start and warm up again.</p>
		<p style="margin-top:28px"><a class="btn" href={resolve('/')}>Back to home</a></p>
	</div>
</section>

import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// BASE_PATH is the sub-path the site is served from, e.g. "/graftonsauna" on
// GitHub Pages (https://<user>.github.io/graftonsauna/). Leave it unset for a
// custom domain or local development, where the site lives at the root.
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '') as '' | `/${string}`;

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Static output: every page is pre-rendered to plain HTML in build/.
			// 404.html is served by GitHub Pages for unknown URLs.
			adapter: adapter({ fallback: '404.html' }),
			paths: { base }
		})
	]
});

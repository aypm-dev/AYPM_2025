<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page_name } from '$lib/stores/page';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let show_nav = true;

	onMount(async () => {
		if ($page_name == '/') {
			document.addEventListener('scroll', scrollHandler, false);
			show_nav = false;
		}
	});

	async function scrollHandler() {
		if (window.scrollY > 50) {
			show_nav = true;
			document.removeEventListener('scroll', scrollHandler, false);
		}
	}

	if (browser) {
		document.body.classList.add('no-scroll-bar');
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="Angel Paniagua Mora's Portfolio, filled with proyects I worked in before, and important info."
	/>
	<meta
		name="keywords"
		content="Angel Paniagua Mora, webdev, aypm, AYPM portfolio, portfolio, frontend developer, developer, frontend, backend, backend developer, aypm dev, dev"
	/>
	<meta name="author" content="Angel Paniagua Mora" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<script type="application/ld+json">
        {
            "@context": "http://aypm.dev",
            "@type": "WebSite",
            "name": "AYPM Angel Paniagua Mora",
            "url": "https://aypm.dev",
        }
	</script>
</svelte:head>

{#if show_nav}
	<Header />
{/if}

<div class:h-16={show_nav} class="transition-all duration-1000 delay-300" />
<slot />

<Footer />

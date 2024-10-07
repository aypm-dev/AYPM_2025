<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let show_nav = $page.url.pathname === '/' ? false : true;

	onMount(async () => {
		if ($page.url.pathname === '/') {
			document.addEventListener('scroll', scrollHandler, false);
		}
	});

	async function scrollHandler() {
		if (window.scrollY > 50) {
			show_nav = true;
			document.removeEventListener('scroll', scrollHandler, false);
		}
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />

	<meta
		name="keywords"
		content="Angel Paniagua Mora, webdev, aypm, AYPM portfolio, portfolio, frontend developer, developer, frontend, backend, backend developer, aypm dev, dev, costa rica desarrollador"
	/>
	<meta name="author" content="Angel Paniagua Mora" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<meta property="og:site_name" content="<AYPM /> Frontend Developer Portfolio" />
	<meta property="og:title" content="Angel Paniagua Mora | Full-Stack Developer Portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aypm.dev" />
	<meta property="og:image" content="https://www.aypm.dev/hcbs.png" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="<AYPM /> Frontend Developer Portfolio" />
	<meta name="twitter:description" content="About Angel Paniagua Mora, and contact info/methods" />

	<script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Angel Paniagua Mora Portfolio",
            "url": "https://aypm.dev",
            "author": {
                "@type": "Person",
                "name": "Angel Paniagua Mora"
            }
        }
	</script>
</svelte:head>

{#if show_nav}
	<Header />
{/if}

<div class:h-16={show_nav} class="transition-all duration-1000 delay-300" />
<slot />

<Footer />

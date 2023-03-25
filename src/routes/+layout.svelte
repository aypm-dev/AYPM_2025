<script lang="ts">
	
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
    import { page_name } from "$lib/stores/page"
	import { onMount } from "svelte";

	let show_nav = true

	onMount(async ()=>{
		if ($page_name == "/") {
			document.addEventListener('scroll', scrollHandler, false)
			show_nav = false
		}
	})

	async function scrollHandler(){
		if (window.scrollY > 50) {
			show_nav = true
			document.removeEventListener("scroll", scrollHandler, false)
		}
	}

</script> 

{#if show_nav}
	<Header/>
{/if}

<div class:h-16={show_nav} class="transition-all duration-1000 delay-300"/>
<slot/>
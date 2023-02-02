<script lang="ts">
	import "../app.css";
    import { page_name } from "$lib/stores/page.svelte"
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";

	let show_nav = false

	onMount(async ()=>{
		if ($page_name == "/") {
			document.addEventListener('scroll', scrollHandler, false)
			show_nav = false
		} else {
			show_nav = true
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
	<nav 
		in:fade={{duration: 500, delay:150}} class="fixed z-50 w-full h-16 mb-4 px-4 py-2 bg-eerie-900"
	>
		<div class="flex h-full gap-x-4 justify-center items-center text-snow">
			<div class="flex w-2/5 sm:w-1/3">
				<span class="flex gap-2 text-snow font-black text-lg select-none">
					<span class="text-folly ">&#60</span> 
						AYPM 
						{#key $page_name}
							<span in:fly={{y: -10}} class="opacity-50">page="{$page_name}"</span> 
						{/key}
					<span class="text-folly">/&#62</span>
				</span>
			</div>

			<div class="flex w-2/5 sm:w-1/3 gap-x-4 justify-center">
				<a href="#"> Home </a>
				<a href="#about"> About </a>
				<a href="#contact"> Contact </a>
			</div>

			<div class="flex w-1/5 sm:w-1/3 justify-end">
				ඞ
			</div>
		</div>
	</nav>
{/if}


<div class:h-16={show_nav} class="transition-all duration-1000 delay-300"/>
<slot/>
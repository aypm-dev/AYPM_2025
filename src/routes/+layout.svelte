<script lang="ts">
	import "../app.css";
    import { page_name } from "$lib/stores/page.svelte"
	import { fly } from 'svelte/transition';
	import { onMount } from "svelte";

	let nav_element: HTMLElement
	let slot_offset: HTMLDivElement

	onMount(()=>{
		if ($page_name == "/") {
			document.addEventListener('scroll', scrollHandler, false)
		}
	})

	function scrollHandler(){
		if (window.scrollY > 50) {
			nav_element.classList.replace("opacity-0", "opacity-100")
			slot_offset.classList.replace("h-0", "h-16")
			document.removeEventListener("scroll", scrollHandler, false)
		}
	}

</script> 

<nav 
	class:opacity-100={$page_name != "/"}
	bind:this={nav_element} class="fixed z-50 w-full h-16 mb-4 px-4 py-2 bg-eerie-900 opacity-0 transition duration-500 delay-150"
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
			test
		</div>
	</div>
</nav>

<div bind:this={slot_offset} class="h-0 transition duration-500 delay-300"/>
<slot/>
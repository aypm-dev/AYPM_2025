<script lang="ts">
	import Nav from './Nav.svelte';
	import { clickOutside } from '$lib/ioevents/click';
	import { link_menu } from '$lib/stores/page';
	import { fade, fly } from 'svelte/transition';
	import { navigating, page } from '$app/stores';

	$: if ($link_menu && window) {
		window.addEventListener('scroll', scrollCloseMenu);
	}

	function scrollCloseMenu() {
		if (window) {
			window.removeEventListener('scroll', scrollCloseMenu);
			setTimeout(() => {
				$link_menu = false;
			}, 100);
		}
	}
</script>

<nav class="fixed z-50 w-full">
	<div
		out:fly|global={{ duration: 100, y: -10 }}
		in:fade|global={{ duration: 500, delay: 150 }}
		use:clickOutside
		on:click-outside={() => {
			$link_menu = false;
		}}
		class:h-[calc(7.3rem+2px)]={$link_menu}
		class:h-[3.74rem]={!$link_menu}
		class="px-4 sm:px-4 py-4 bg-eerie-900 transition-height duration-100"
	>
		<div class="container flex h-fit mx-auto justify-center">
			<div class="flex flex-col w-full md:w-1/3 gap-x-4 gap-y-4 text-snow">
				<div class="flex w-full">
					<span class="flex gap-2 text-snow font-black text-lg select-none">
						<span class="text-folly">&#60</span>
						AYPM
						{#key $page.url.pathname}
							<span in:fly|global={{ y: -10 }} class="opacity-50">
								{#if $navigating}
									page="loading..."
								{:else}
									page="{$page.url.pathname}"
								{/if}
							</span>
						{/key}
						<span class="text-folly">/&#62</span>
					</span>
					<button
						on:click={() => {
							$link_menu = !$link_menu;
						}}
						aria-label={$link_menu ? 'Close Nav Menu' : 'Open Nav Menu'}
						class="group ml-auto"
					>
						{#key $link_menu}
							{#if $link_menu}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									width="20"
									height="16"
									x="0"
									y="0"
									viewBox="0 0 512 512"
									style="enable-background:new 0 0 512 512"
									xml:space="preserve"
									class="animate-jump-and-bounce mt-1 text-folly fill-folly"
									><g
										><path
											d="M257 0C116.39 0 0 114.39 0 255s116.39 257 257 257 255-116.39 255-257S397.61 0 257 0zm126.22 338.79c11.7 11.7 11.7 30.73 0 42.44-11.61 11.6-30.64 11.79-42.44 0L257 297.42l-85.79 83.82c-11.7 11.7-30.73 11.7-42.44 0-11.7-11.7-11.7-30.73 0-42.44l83.8-83.8-83.8-83.8c-11.7-11.71-11.7-30.74 0-42.44 11.71-11.7 30.74-11.7 42.44 0L257 212.58l83.78-83.82c11.68-11.68 30.71-11.72 42.44 0 11.7 11.7 11.7 30.73 0 42.44l-83.8 83.8 83.8 83.79z"
											opacity="1"
											data-original="#000000"
											class=""
										/></g
									></svg
								>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									width="20"
									height="16"
									x="0"
									y="0"
									viewBox="0 0 512 512"
									style="enable-background:new 0 0 512 512"
									xml:space="preserve"
									class="animate-jump-and-bounce"
								>
									<g
										><path
											d="M467 61H165c-24.82 0-45 20.19-45 45 0 24.82 20.18 45 45 45h302c24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45zM467 211H165c-24.82 0-45 20.19-45 45 0 24.82 20.18 45 45 45h302c24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45zM467 361H165c-24.82 0-45 20.19-45 45 0 24.82 20.18 45 45 45h302c24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45zM45 61C20.18 61 0 81.19 0 106c0 24.82 20.18 45 45 45 24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45zM45 211c-24.82 0-45 20.19-45 45 0 24.82 20.18 45 45 45 24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45zM45 361c-24.82 0-45 20.19-45 45 0 24.82 20.18 45 45 45 24.81 0 45-20.18 45-45 0-24.81-20.19-45-45-45z"
											fill="#FFFFFF"
											opacity="1"
											data-original="#FFFFFF"
											class=""
										/></g
									></svg
								>
							{/if}
						{/key}
					</button>
				</div>

				{#if $link_menu}
					<Nav />
				{/if}
			</div>
		</div>
	</div>
	<div class="bg-gradient-to-b from-eerie-900 to-transparent h-4 opacity-25" />
</nav>

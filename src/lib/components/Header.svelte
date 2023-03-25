<script lang="ts">
    import { page_name } from "$lib/stores/page.svelte"
	import { fade, fly } from 'svelte/transition';
</script>

<nav 
    out:fly={{duration:100, y:-10}} in:fade={{duration: 500, delay:150}} class="fixed z-50 w-full h-16 mb-4 px-4 py-2 bg-eerie-900"
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

        <div class="flex w-2/5 sm:w-1/3 gap-x-4 justify-center font-bold">
            <a href="#" class:opacity-75={$page_name==""} class="group flex"> <span class="group-hover:animate-jump-and-bounce">Home</span> </a>
            <a href="#about" class="group flex"> <span class="group-hover:animate-jump-and-bounce">About</span> </a>
            <a href="#contact" class="group flex"> <span class="group-hover:animate-jump-and-bounce">Contact</span> </a>
        </div>

        <div class="flex w-1/5 sm:w-1/3 gap-x-4 justify-end">
            <a target="_blank" rel="noreferrer" href="https://github.com/AngelCode-dev" class="group flex"> 
                <img src="github-logo.png" alt="Github" class="w-8 group-hover:animate-jump-and-bounce">
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paniaguaangel/" class="group flex"> 
                <img src="linkedin-logo.png" alt="Github" class="w-8 group-hover:animate-jump-and-bounce">
            </a>
        </div>
    </div>
</nav>


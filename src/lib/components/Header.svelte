<script lang="ts">
    import { page_name, page_changed } from "$lib/stores/page"
	import { onMount } from "svelte";
	import { fade, fly } from 'svelte/transition';

    let link_menu = false

    $: if (link_menu && window){
        window.addEventListener("scroll", closeLinkMenu)
    }


    function closeLinkMenu(){
        if ($page_changed){
            $page_changed = false
            return
        }

        if (window) {
            window.removeEventListener("scroll", closeLinkMenu)
            setTimeout(()=>{
                link_menu = false
            }, 100)
        }
    }

</script>

<nav class="fixed z-50 w-full">
    <div 
        out:fly={{duration:100, y:-10}} 
        in:fade={{duration: 500, delay:150}} 
        class:h-[calc(7.3rem+2px)]={link_menu}
        class:h-[3.74rem]={!link_menu}
        class="px-4 sm:px-4 py-4 bg-eerie-900 transition-height duration-100 ease-in-out"
    >
        <div class="container flex h-fit mx-auto justify-center">
            <div class="flex flex-col w-full md:w-1/3 gap-x-4 gap-y-4 text-snow">
                <div class="flex w-full">
                    <span class="flex gap-2 text-snow font-black text-lg select-none">
                        <span class="text-folly ">&#60</span> 
                            AYPM
                            {#key $page_name}
                                <span in:fly={{y: -10}} class="opacity-50">page="{$page_name}"</span> 
                            {/key}
                        <span class="text-folly">/&#62</span>
                    </span>
                    <button on:click={()=>{link_menu=!link_menu}} class="group ml-auto">
                        {#key link_menu}
                            <i class:text-folly={link_menu} class:fa-xmark={link_menu} class="fa-fw fa-solid fa-bars animate-jump-and-bounce"/> 
                        {/key}
                    </button>
                </div>
                
                
                {#if link_menu}
                    <div in:fly={{duration:100, delay:100, y:-10}} class="w-full h-[3px] bg-folly rounded-full"/>
    
                    <div in:fly={{duration:100, delay:200, y:-10}} class="flex gap-x-4">
                        <div class="flex 1/2 gap-x-4 justify-center font-bold">
                            <a href={"#"} class:text-folly={$page_name=="/"} class="group flex"> 
                                <span class="group-hover:animate-jump-and-bounce">Home</span>
                            </a>
                            <a href="#about" class:text-folly={$page_name=="/about"} class="group flex"> 
                                <span class="group-hover:animate-jump-and-bounce">About</span> 
                            </a>
                            <a href="#contact" class:text-folly={$page_name=="/contact"} class="group flex"> 
                                <span class="group-hover:animate-jump-and-bounce">Contact</span> 
                            </a>
                        </div>
                
                        <div class="flex ml-auto gap-x-4">
                            <a target="_blank" rel="noreferrer" href="https://github.com/AngelCode-dev" class="group flex"> 
                                <img src="github-logo.png" alt="Github" class="w-6 aspect-square group-hover:animate-jump-and-bounce">
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paniaguaangel/" class="group flex"> 
                                <img src="linkedin-logo.png" alt="Github" class="w-6 aspect-square group-hover:animate-jump-and-bounce">
                            </a>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
    <div class="bg-gradient-to-b from-eerie-900 to-transparent h-4 opacity-25"/>
</nav>



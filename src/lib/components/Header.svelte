<script lang="ts">
    import Nav from './Nav.svelte';
	import { clickOutside } from "$lib/ioevents/click";
    import { page_name, page_changed, link_menu } from "$lib/stores/page"
	import { fade, fly } from 'svelte/transition';

    $: if ($link_menu && window){
        window.addEventListener("scroll", scrollCloseMenu)
    }

    function scrollCloseMenu(){
        if ($page_changed) {
            $page_changed = false
            return
        }

        if (window) {
            window.removeEventListener("scroll", scrollCloseMenu)
            setTimeout(()=>{
                $link_menu = false
            }, 100)
        }
    }

</script>

<nav class="fixed z-50 w-full">
    <div 
        out:fly={{duration:100, y:-10}} 
        in:fade={{duration: 500, delay:150}}
        use:clickOutside 
        on:click-outside={()=>{
            $link_menu = false
        }}
        class:h-[calc(7.3rem+2px)]={$link_menu}
        class:h-[3.74rem]={!$link_menu}
        class="px-4 sm:px-4 py-4 bg-eerie-900 transition-height duration-100"
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
                    <button on:click={()=>{$link_menu=!$link_menu}} class="group ml-auto">
                        {#key $link_menu}
                            <i class:text-folly={$link_menu} class:fa-xmark={$link_menu} class="fa-fw fa-solid fa-bars animate-jump-and-bounce"/> 
                        {/key}
                    </button>
                </div>
                
                {#if $link_menu}
                    <Nav/>
                {/if}
            </div>
        </div>
    </div>
    <div class="bg-gradient-to-b from-eerie-900 to-transparent h-4 opacity-25"/>
</nav>



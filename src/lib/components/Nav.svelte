<script lang="ts">
    import { page_name, page_changed, highlight_nav_link } from "$lib/stores/page"
	import { fly } from 'svelte/transition';

    let link_menu = false

    $: if (link_menu && window){
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
                link_menu = false
            }, 100)
        }
    }

</script>

<div in:fly={{duration:100, delay:100, y:-10}} class="w-full h-[3px] bg-folly rounded-full"/>
    
<nav in:fly={{duration:100, delay:200, y:-10}} class="flex gap-x-4">
    <div class="flex 1/2 gap-x-4 justify-center font-bold">
        <a 
            href="/#"
            class:animate-bounce={$highlight_nav_link === "/"}
            class:underline={$highlight_nav_link === "/"}
            class="flex {$page_name === "/"? "animate-jump-and-bounce text-folly cursor-default": "hover:opacity-50"}"
        > 
            <span>Home</span>
            {#if $highlight_nav_link === "/"}
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex">
                    <i class="fa-solid fa-hand-point-down  fa-xl"/>
                </div>
            {/if}
        </a>
        <a 
            href="/#about"
            class:animate-bounce={$highlight_nav_link === "/about"}
            class:underline={$highlight_nav_link === "/about"}
            class="relative flex {$page_name === "/about"? "animate-jump-and-bounce text-folly cursor-default": "hover:opacity-50"}"
        > 
            <span>About</span>
            {#if $highlight_nav_link === "/about"}
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex">
                    <i class="fa-solid fa-hand-point-down  fa-xl"/>
                </div>
            {/if}
        </a>
        <a 
            href="/#contact"
            class:animate-bounce={$highlight_nav_link === "/contact"} 
            class:underline={$highlight_nav_link === "/contact"} 
            class="flex {$page_name === "/contact"? "animate-jump-and-bounce text-folly cursor-default": "hover:opacity-50"}"
        > 
            <span>Contact</span>
            {#if $highlight_nav_link === "/contact"}
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex">
                    <i class="fa-solid fa-hand-point-down  fa-xl"/>
                </div>
            {/if}
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
</nav>


<script lang="ts">
	import { onMount } from "svelte";
    import { page, page_name } from "$lib/stores/page.svelte"

    const pages = {
        "/": "./landing/+page.svelte",
        "/about": "./about/+page.svelte",
        "/contact": "./contact/+page.svelte",
    }

    async function changePage(new_page: string){
        if (pages.hasOwnProperty(new_page)){
            $page_name = new_page
            $page = (await import(pages[new_page as keyof typeof pages])).default
        } else {
            $page_name = "/"
            $page = (await import(pages["/"])).default
        }
    }

    onMount(()=>{
        let hash = "/" + window.location.hash.replace("#", "")
        changePage(hash)
        
        window.addEventListener('hashchange', () => {
            let hash = "/" + window.location.hash.replace("#", "")
            changePage(hash)
        }, false)
    })
</script>

<svelte:head>
  <title> | AYMP {$page_name? "| " + $page_name.replace("/", ""): ""}</title>
</svelte:head>

<svelte:component this={$page}/>

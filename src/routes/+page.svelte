<script lang="ts">
	import { onMount } from "svelte";
    import { page, page_name, page_changed } from "$lib/stores/page"

    const pages = {
        "/": "landing",
        "/about": "about",
        "/contact": "contact",
    }

    async function changePage(new_page: keyof typeof pages){
        if (pages.hasOwnProperty(new_page)){
            $page = (await import(`./${pages[new_page]}/+page.svelte`)).default
            $page_name = new_page
            $page_changed = true
            window.scrollTo(0, 0)
        } else {
            $page = (await import(`./${pages["/"]}/+page.svelte`)).default
            $page_name = "/"
            $page_changed = true
        }
    }

    onMount(()=>{
        let hash = "/" + window.location.hash.replace("#", "")
        $page_name = hash
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

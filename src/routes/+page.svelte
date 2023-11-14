<script lang="ts">
	import { onMount } from "svelte";
    import { page, page_changed, page_name } from "$lib/stores/page"

    const pages = {
        "/": "landing",
        "/about": "about",
        "/contact": "contact",
    }

    async function changePage(new_page: string){
        $page_changed = true
        if (pages.hasOwnProperty(new_page)){
            $page_name = new_page
            $page = (await import(`./${pages[new_page as keyof typeof pages]}/+page.svelte`)).default
            window.scrollTo(0, 0)
        } else {
            $page_name = "/"
            $page = (await import(`./${pages["/"]}/+page.svelte`)).default
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
  <title> | AYMP {$page_name? "| " + $page_name.replace("/", "").toLocaleUpperCase(): ""}</title>
</svelte:head>

<svelte:component this={$page}/>

<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

    export let scale = 8
    export let position: number[] = [12, 40]

    let cloud_element: HTMLElement

    onMount(()=>{
        setTimeout(()=>{
            let end_position = position[0] < 50? position[0] + 15: position[0] - 15
            cloud_element.style.left = end_position + "%"
        }, 100)
    })

    function load(node: HTMLElement) {
        node.style.left = position[0] + "%"
        node.style.top = position[1] + "rem"
        node.style.transform = `scale(${(scale)*100}%, ${(scale)*100}%)`
    }
</script>

<i
    use:load
    transition:fade|local={{duration:750}}
    bind:this={cloud_element}
    style= "transform: translateX(-50%);"
    class="cloud absolute fa-solid fa-cloud fa-2xl opacity-25 transition-all duration-[30000ms] ease-out"
/>


<script lang="ts">
	import { fade } from "svelte/transition";

    export let scale = 8
    export let position: number[] = [12, 40]

    function load(node: HTMLElement) {
        node.style.left = `${position[0]}%`
        node.style.top = `${position[1]}%`
        node.style.transform = `scale(${(scale)*100}%, ${(scale)*100}%) translate(-35%, 50%)`

        let end_position = position[0] < 50? position[0] + 10: position[0] - 10
        node.animate({
            "left": end_position + "%"
        }, { delay: 200, duration: 20000, fill: "forwards", easing: "cubic-bezier(0, 0, 0.2, 1)"})
    }
</script>


<i
    use:load
    transition:fade|local={{duration:750}}
    class="-translate-x-1/2 absolute -z-10 fa-solid fa-cloud fa-2xl opacity-10 sm:opacity-25"
/>


<script lang="ts">
	import { fade } from "svelte/transition";

    export let life_time: number = 3000

    function bubbleLoad(node: HTMLButtonElement){
        const top = 450 - (Math.random() * 100) // from 350 to 450
        const width = (Math.random() * 3) + 3 // from 3 to 6 rem
        const left = Math.floor(Math.random() * 35) // from 0 to 25

        node.animate(
            [
                { top: "0"},
                { top: `-${top}%`},
            ],
            {
                duration: life_time,
                fill: "forwards",
                easing: "ease-in"
            }
        )

        node.style.width = `${width}rem`
        node.style.left = `${left}%`
    }

    async function bubblePopped(event: MouseEvent){
        if (!(event.target instanceof HTMLButtonElement)) return
        event.target.style.scale = `1.25`

        setTimeout(()=>{
            if (!(event.target instanceof HTMLButtonElement)) return

            event.target.disabled = true
            event.target.style.scale = `0.10`
            event.target.style.borderWidth = `1px`
            event.target.style.borderBottomWidth = `2px`
        }, 20)
    }

</script>

<button 
    on:click
    on:click={bubblePopped}
    use:bubbleLoad
    out:fade={{duration: 100}}
    class="absolute -translate-y-1/2 -z-10 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly transition-all duration-[20ms]"
/>
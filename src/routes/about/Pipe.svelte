<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    import Bubble from './Bubble.svelte';
	import { fly } from 'svelte/transition';

    const bubble_life_time = 3000
    let bubble_spawner: NodeJS.Timer
    let bubbles: bubble[] = []
    let bubbles_popped = 0

    interface bubble {
        id: string, 
        timeout: NodeJS.Timeout
        life_time: number,
    }

    function addBubble(){
        const id = crypto.randomUUID()
        const life_time = bubble_life_time + (Math.random() * 1000)
        const timeout = setTimeout(() => {
            removeBubble({id, timeout, life_time})
        }, bubble_life_time)

        bubbles = [...bubbles, {id, timeout, life_time}]
    }

    function removeBubble(bubble_to_remove: bubble){
        clearTimeout(bubble_to_remove.timeout)

        bubbles = bubbles.filter(bubble=> bubble.id !== bubble_to_remove.id)
    }

    function bubblePopped() {
        bubbles_popped++
    }

    onMount(()=>{
        bubble_spawner = setInterval(()=>{
            addBubble()
        }, 1250)

    })
    
    onDestroy(()=>{
        clearTimeout(bubble_spawner)
    })

</script>

<div class="absolute flex flex-col top-full -translate-y-[calc(100%-2rem)] left-[66%] sm:left-[72.5%] z-10 w-fit gap-2">
    {#each bubbles as bubble (bubble.id)}
        <Bubble 
            on:click={bubblePopped} 
            on:click={()=>removeBubble(bubble)}
            life_time={bubble.life_time}
        />
    {/each}

    <div class="flex w-28 h-12 rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white text-black justify-end p-1">
        {#key bubbles_popped}
            <span in:fly={{duration: 100, y: -10}} class="text-xs text-center">
                {bubbles_popped !== 0? "Carbon dioxide errors:" + bubbles_popped: ""}
            </span>
        {/key}
    </div>

    <div class="w-20 h-32 mx-auto rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
        <div class="flex w-12 h-12 mx-auto mt-4 rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg overflow-clip">
            <svg class="translate-x-4 sm:w-8 sm:h-8 w-6 h-6 -scale-x-100" viewBox="0 0 512 512"><path d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"/></svg>
        </div>

        <div class="flex gap mt-5">
            <div class="flex w-4 h-4 mx-auto mt-4 rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
            <div class="flex w-4 h-4 mx-auto mt-4 rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
            <div class="flex w-4 h-4 mx-auto mt-4 rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
        </div>
    </div>
</div>
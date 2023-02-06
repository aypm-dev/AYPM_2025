<script lang="ts">
	import { onMount } from 'svelte';
    import Cloud from '$lib/components/Cloud.svelte';

    let cloud_container: HTMLDivElement
    let clouds: cloud[] = []

    interface cloud {
        id: string,
        position: number[],
        scale: number
    }

    onMount(()=>{
        setInterval(()=>{
            const id =  crypto.randomUUID()
            const scale = Math.random() * (6 - 2) + 1
            const random_x = Math.random() * (45 - 5) + 5
            const position  = [
                random_x > 30? random_x + 40: random_x,
                Math.random() * (50 - 5) + 5
            ]

            clouds = [...clouds, {
                id,
                position,
                scale
            }]

            setTimeout(() => {
                removeCloud(id)
            }, 30000);
        }, 3000)
    })

    function removeCloud(id: cloud["id"]){
        clouds = clouds.filter(cloud => cloud.id != id)
    }
</script>

<div bind:this={cloud_container} class="relative w-screen h-[60rem] overflow-x-hidden">
    {#each clouds as cloud (cloud.id)}
        <Cloud position={cloud.position} scale={cloud.scale}/>
    {/each}
</div>


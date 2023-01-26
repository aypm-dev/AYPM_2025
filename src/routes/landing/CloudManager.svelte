<script lang="ts">
	import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    import Cloud from './Cloud.svelte';

    let cloud_container: HTMLDivElement
    
    onMount(()=>{
        setInterval(()=>{
            let cloud_scale = Math.random() * (6 - 2) + 1

            let cloud_position_x = Math.random() * (50 - 10) + 10
            cloud_position_x = cloud_position_x > 30? cloud_position_x + 40: cloud_position_x
            let cloud_position  = [
                cloud_position_x,
                Math.random() * (50 - 5) + 5
            ]

            new Cloud({
                target: cloud_container,
                props: {
                    scale: cloud_scale,
                    position: cloud_position
                }
            })
        }, 2300)
    })
</script>

<div bind:this={cloud_container} class="relative w-screen h-[60rem] overflow-x-hidden">
    <Cloud/>
    <Cloud position={[90, 10]} scale={3}/>
</div>


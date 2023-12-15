<script lang="ts">
	import { onMount } from 'svelte';
    import Object from '$lib/components/Object.svelte';

    const life_time = 5500
    const spawning_rate = 900
    const initial_objects = 2
    let objects: object_item[] = []

    interface object_item {
        id: string,
        position: number[],
        scale: number
    }

    onMount(()=>{
        for (let i = 0; i < initial_objects; i++) {
            addObject()
        }

        setInterval(()=>{
            addObject()
        }, spawning_rate)
    })

    function getRandomNumberInRange(ranges: ([number, number])[]){
        let random_range_index = ranges.length * Math.random() | 0

        let min = ranges[random_range_index][0]
        var max = ranges[random_range_index][1]

        return Math.random() * (max - min + 1) + min
    }
    
    function addObject(){
        const id = crypto.randomUUID()
        const scale = Math.random() * (2.5 - 0.9) + 0.9
        const random_x = getRandomNumberInRange([[15, 40], [60, 85]])
        const random_y = getRandomNumberInRange([[0, 10]])

        const position  = [
            random_x,
            random_y
        ]

        objects = [...objects, {
            id,
            position,
            scale
        }]

        setTimeout(() => {
            objects = objects.filter(cloud => cloud.id != id)
        }, life_time);
    }

</script>

<div class="absolute flex w-screen h-[65rem] overflow-hidden">
    {#each objects as {position, scale, id} (id)}
        <Object {life_time} {position} {scale}/>
    {/each}
</div>
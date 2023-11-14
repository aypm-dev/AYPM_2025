<script lang="ts">
    import { circIn, sineInOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';

    export const circle_velocity = tweened(0.01, {
		duration: 1300,
		easing: sineInOut
	});

    export let conveyor_belt_w: number = 600
    export let conveyor_belt_h: number = 64
    export let conveyor_belt_rounding: number = 32
    export let amount_of_circles: number = 20

    const circle_interval_time = 100
    
    function circleLoad(node: HTMLDivElement, index: number){
        let percentage = index * (100 / amount_of_circles) / 100

        const {x, y} = getPointOnRectangle(percentage, conveyor_belt_w - 4, conveyor_belt_h - 4, conveyor_belt_rounding)
        node.style.left = x + "px"
        node.style.top = y + "px"

        const interval = setInterval(()=>{
            percentage += $circle_velocity / 2
            if (percentage > 1) percentage = 0

            const {x, y} = getPointOnRectangle(percentage, conveyor_belt_w - 6, conveyor_belt_h - 6, conveyor_belt_rounding)
            
            node.animate([{ 
                    left: x + "px",
                    top: y + "px"
                }],
                { 
                    duration: circle_interval_time, 
                    fill: "forwards",
                }
            )

        }, circle_interval_time)

        return {
            destroy(){
                clearInterval(interval)
            }
        }
    }

    function getPointOnRectangle(percent: number, width: number, height: number, rounding: number) {
        function calcCircIn(rounding_percentage: number, rounding: number) {
            return (circIn(rounding_percentage / rounding) * rounding) * 2
        }

        const perimeter = (width + height) * 2
        const distance = percent * perimeter

        let x, y;

        if (distance < width) { 
            const rounding_start = Math.max(0, rounding - (distance)) / 2
            const rounding_end = Math.max(0, rounding - (width - distance)) / 2

            const circ_start = calcCircIn(rounding_start, rounding)
            const circ_end = calcCircIn(rounding_end, rounding)

            x = distance + circ_start - circ_end
            y = circ_start + circ_end

        } else if (distance < width + height) {
            const pixel_percentage = distance - width
            const rounding_start = Math.max(0, rounding - (pixel_percentage)) / 2
            const rounding_end = Math.max(0, rounding - (height - pixel_percentage)) / 2

            const circ_start = calcCircIn(rounding_start, rounding)
            const circ_end = calcCircIn(rounding_end, rounding)

            x = width - circ_start - circ_end
            y = pixel_percentage + circ_start - circ_end

        } else if (distance < (width * 2) + height) {
            const pixel_percentage = distance - (width + height)
            const rounding_start = Math.max(0, rounding - (pixel_percentage)) / 2
            const rounding_end = Math.max(0, rounding - (width - pixel_percentage)) / 2

            const circ_start = calcCircIn(rounding_start, rounding)
            const circ_end = calcCircIn(rounding_end, rounding)

            x = (width - pixel_percentage) - circ_start + circ_end
            y = height - circ_start - circ_end

            
        } else {
            const pixel_percentage = distance - (width * 2) - height
            const rounding_start = Math.max(0, rounding - (pixel_percentage)) / 2
            const rounding_end = Math.max(0, rounding - (height - pixel_percentage)) / 2

            const circ_start = calcCircIn(rounding_start, rounding)
            const circ_end = calcCircIn(rounding_end, rounding)

            x = 0 + circ_start + circ_end
            y = (height - pixel_percentage) - circ_start + circ_end
        }

        return { x, y };
    }


    function conveyorBeltLoad(node: HTMLDivElement){
        node.style.minWidth = `${conveyor_belt_w}px`
        node.style.width = `${conveyor_belt_w}px`
        node.style.height = `${conveyor_belt_h}px`
        node.style.borderRadius = `${conveyor_belt_rounding}px`
    }

</script>

<svelte:options accessors/>

<div use:conveyorBeltLoad class="flex mx-auto relative shadow-lg border-[3px] border-b-[6px] border-black">
    {#each {length: amount_of_circles} as _, index}
        <div use:circleLoad={index} class="absolute w-4 aspect-square bg-white rounded-full -translate-x-1/2 -translate-y-1/2"/>
    {/each}
</div>
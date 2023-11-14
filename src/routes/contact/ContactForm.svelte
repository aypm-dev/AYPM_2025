<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';
    import { page } from '$app/stores'
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

    export let data: PageData = $page.data
    const dispatch = createEventDispatcher()
    const animation_duration = 7.5

    let form_box: HTMLDivElement
    let success = false
    let reset_timeout: NodeJS.Timeout

    const { form, enhance, errors, reset, submitting } = superForm(data?.form, {
        applyAction: false,
        onResult({result}){
            if (result.type !== 'success') return

            success = true
            dispatch("set_conveyor_belt", 0.01)
            form_box.classList.add("form_box_animation")
            form_box.addEventListener("animationend", ()=>{ form_box.classList.remove("form_box_animation") })

            reset_timeout = setTimeout(()=>{
                reset()
                success = false
                dispatch("set_conveyor_belt", 0)

            }, (animation_duration * 0.65) * 1000)
        }
            
    })

    onDestroy(()=>{
        clearTimeout(reset_timeout)
    })

</script>

<div in:fly={{y:-20, duration:500}} bind:this={form_box} class="absolute -translate-x-2/3 sm:-translate-x-1/2 w-80 sm:w-96 h-[32rem] sm:h-96 left-2/3 px-6 py-8 rounded-xl shadow-lg text-eerie-900 border-[3px] border-b-[6px] border-eerie-900 bg-white">
    <form method="POST" use:enhance>
        <Input 
            bind:value={$form.email}
            label="Your email" 
            name="email"
            disabled={success}
            error={$errors.email instanceof Array? $errors.email: undefined}
            required
        />

        <TextArea 
            bind:value={$form.body}
            label="Body" 
            name="body" 
            disabled={success}
            height="8rem"
            resizable={false}
            placeholder={`(Your message here. Example: Wow Angel, you're so cool and this website is awesome. Wanna grab some ice cream?)`}
            error={$errors.body instanceof Array? $errors.body: undefined}
            required
        />
        
        {#if success}
            <div in:fly={{duration: 100, y:-10}} class="mt-4 text-xl font-bold capitalize text-center">
                EMAIL PROCESSED!!
            </div>

        {:else}
            <Button 
                disabled={success || $submitting} 
                loading={$submitting} 
                type="primary"
            >
                <span class="text-black">&#60</span>Button <span class="opacity-75">on:click=&#123;sendEmail&#125;</span><span class="text-black">/&#62</span>
            </Button>
        {/if}

    </form>

</div>

<div class="form_box_animation"/>

<style>
    .form_box_animation {
        animation: form_box 7.5s;
        animation-delay: 250ms;
    }

    @keyframes form_box{
        0% {
            left: 66.66667%;
        }
        50% {
            opacity: 1;
        }
        65% {
            opacity: 0;
        }
        70% {
            left: 85%;
            top: -0%;
        }
        75% {
            opacity: 0;
            left: 66.66667%;
            top: -10%;
        }
        77.5% {
            opacity: 1;
            top: 0%;
        }
    }
    
</style>
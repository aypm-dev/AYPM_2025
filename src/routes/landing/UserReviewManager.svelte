<script lang="ts">
    import { fly } from 'svelte/transition'
    import UserReview from '$lib/components/UserReview.svelte';
    import Input from '$lib/components/Input.svelte'

    let user_review: string = "Man, I love this Website!"

</script>

<div class="container">
    <div class="relative hidden sm:grid grid-cols-3 xl:grid-cols-7 h-[27rem] mt-24 gap-8 object-center overflow-y-clip">
        <ul class="xl:col-span-2 flex flex-col h-[54rem] gap-4 items-start animate-infinite-scroll select-none">
            {#each {length: 6} as _, index}
                <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
            {/each}
        </ul>
    
        <div class="xl:col-span-3 flex flex-col h-[50%] justify-center">
            <div class="absolute top-0 left-0 w-full h-1/6 z-10 bg-gradient-to-b from-folly to-transparent"/>
            <div class="absolute top-[101%] -translate-y-full left-0 w-full h-1/6 z-10 bg-gradient-to-t from-folly to-transparent"/>
    
            <Input bind:value={user_review} maxlength={27} label="Your review" name="review_input" autocomplete={false}/>
            <p class="mt-1 text-xs text-right select-none opacity-75"> 
                For legal reasons, this may or may not be a real review. My mom doesn't like lies :(                
            </p>
            {#key user_review == "Man, I love this Website!"} <!-- reload element (play fly animation) only when user review changes from the default value, but not when user reviews get_slot_changes -->
                <p in:fly={{y:-5, duration:100}} class="mt-4 text-xl text-center"> 
                    {@html user_review.toLowerCase().replace(/[!.,]/g, "") == "man i love this website"? 'Oh, really? That\'s so nice of you!! <i class="fa-solid fa-face-kiss-wink-heart"/>': 'Hey! What are you writting? I hope it\'s good... <i class="fa-solid fa-face-rolling-eyes"/>'}
                </p>
            {/key}
        </div>
    
        <div class="xl:col-span-2 flex flex-col h-[54rem] gap-4 items-end animate-infinite-scroll select-none">
            {#each {length: 6} as _, index}
                <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
            {/each}
        </div>
    </div>
</div>

<div class="flex sm:hidden flex-col h-[50%] mt-16 justify-center">
    <Input bind:value={user_review} maxlength={27} label="Your review" name="review_input" autocomplete={false}/>
    <p class="mt-1 text-xs text-right select-none opacity-75"> 
        For legal reasons, this may or may not be a real review. My mom doesn't like lies :(                
    </p>
    
    {#key user_review == "Man, I love this Website!"} <!-- reload element (play fly animation) only when user review changes from the default value, but not when user reviews get_slot_changes -->
        <p in:fly={{y:-5, duration:100}} class="mt-4 text-xl text-center"> 
            {@html user_review.toLowerCase().replace(/[!.,]/g, "") == "man i love this website"? 'Oh, really? That\'s so nice of you!! <i class="fa-solid fa-face-kiss-wink-heart"/>': 'Hey! What are you writting? I hope it\'s good... <i class="fa-solid fa-face-rolling-eyes"/>'}
        </p>
    {/key}
</div>

<div class="flex sm:hidden relative h-32 mt-4 overflow-clip">
    <div class="absolute top-0 w-1/6 h-full z-10 bg-gradient-to-r from-folly to-transparent"/>
    <div class="absolute left-full -translate-x-[calc(100%-2px)] w-1/6 h-full z-10 bg-gradient-to-l from-folly to-transparent"/>
    
    <ul class="flex h-[54rem] w-[34rem] gap-4 items-start animate-infinite-scroll-horizontal select-none">
        {#each {length: 44} as _, index}
            <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
        {/each}
    </ul>
</div>


<script lang="ts">
    export let emote = "fa-heart"
    export let user_name: string = "You"
    export let text: string = ""
</script>

<div class="flex flex-nowrap flex-shrink-0 w-64 sm:w-full h-32 p-4 gap-4 items-center rounded-xl border-[3px] border-b-[6px] text-eerie-900 border-eerie-900 shadow-lg bg-white">
    <i class={`fa-solid fa-2xl fa-fw ${emote}`}/>
    <div class="flex flex-col items-start overflow-clip">
        <h1 class="text-3xl"> {user_name}: </h1>
        <p class="flex text-xl sm:whitespace-nowrap items-center"> 
            {text? text: "I hate empty strings"} <i class:hidden={text} class="fa-solid fa-face-sad-cry ml-2"/> 
        </p>
    </div>
</div>


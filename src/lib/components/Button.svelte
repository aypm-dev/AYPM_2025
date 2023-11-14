<script lang="ts">
    export let type: "primary" | "secondary"  | "ternary" = "primary"
    export let black_border = false
    export let disabled = false
    export let loading = false
</script>

<label for="mt-4 line">
    <div class="flex w-full h-14 items-end">
    <div class="relative">
        {#if black_border}
            <div
                style="clip-path: polygon(-40% -40%, 102.5% -40%, 102.5% 44%, 0% 42%);"
                class="absolute z-[-1] top-0 p-2 rounded-xl rounded-r-none border-[3px] font-bold first-letter:capitalize ring-[16px] ring-black border-black pointer-events-none"
            >
                <slot/>
            </div>
        {/if}
        <button
            on:click
            {disabled}
            class:animate-pulse={loading}
            class="
                {type === "primary"? "bg-folly text-white disabled:bg-opacity-50": ""}
                {type === "secondary"? "bg-white text-eerie-900": ""}
                {type === "ternary"? "bg-eerie-900 text-white": ""}
                p-2 rounded-xl border-[3px] border-b-[6px] enabled:active:border-b-[3px] font-bold first-letter:capitalize border-black ring-2 ring-white shadow-LG  select-none transition-all duration-100"
            >
            <slot/>
        </button>
    </div>
</label>
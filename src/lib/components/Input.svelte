<script lang="ts">
    export let label = "Default label"
    export let name = "input"
    export let value: string = ""
    export let disabled = false
    export let required = false
    export let autocomplete = true
    export let maxlength: number | undefined = undefined
    export let error: string[] | null | undefined = null
</script>

<label for="mt-4 line">
    <span class="flex gap-2 text-xl font-bold capitalize">
        {#if required}
            <span class="text-folly"> * </span>
        {/if}
        
        {label}:
        
        {#if error}
            <span class="text-folly ml-auto">
                {error[0]}
            </span>
        {/if}
    </span>
    <div class="flex w-full h-14 items-end">
        <input 
            type="text"
            {name}
            {disabled}
            autocomplete={autocomplete? "on": "off"}
            bind:value={value} 
            {maxlength}
            aria-invalid={error ? 'true' : undefined}
            class="w-full p-2 rounded-xl border-[3px] focus:border-b-[6px] text-eerie-900 border-eerie-900 ring-2 ring-white shadow-lg bg-white disabled:bg-eerie-100 transition-all duration-100"
        >
    </div>
</label>
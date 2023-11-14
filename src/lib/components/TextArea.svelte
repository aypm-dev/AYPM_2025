<script lang="ts">
    export let label = "Default label"
    export let name = "input"
    export let value: string = ""
    export let disabled = false
    export let autocomplete = true
    export let required = false
    export let placeholder = ""
    export let error: string[] | null | undefined = null
    export let height = ""
    export let max_height = ""
    export let resizable = true

    function get_height(node: HTMLTextAreaElement){
        node.style.height = height
        node.style.maxHeight = max_height
        if (!resizable) node.style.resize = "none"
    }
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
    <textarea
        use:get_height
        {name}
        {disabled}
        {placeholder}
        autocomplete={autocomplete? "on": "off"}
        aria-invalid={error ? 'true' : undefined}
        bind:value={value} 
        class="w-full p-2 rounded-xl border-[3px] focus:border-b-[6px] text-eerie-900 border-eerie-900 ring-2 ring-white shadow-lg bg-white disabled:bg-eerie-100 transition-all duration-100"
    />
</label>
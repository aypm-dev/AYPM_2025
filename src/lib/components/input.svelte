<script lang="ts">
    export let label = "Default label"
    export let name = "input"
    export let value: string
    export let autocomplete = true
</script>

<label for="mt-4 line">
    <span class="text-xl font-bold capitalize"> {label} </span>
    <div class="flex w-full h-14 items-end">
    <input 
        type="text"
        {name}
        autocomplete={autocomplete? "on": "off"}
        bind:value={value} 
        maxlength="25" 
        class="w-full p-2 rounded-xl border-[3px] focus:border-b-[6px] text-eerie-900 border-eerie-900 ring-2 ring-white shadow-lg bg-white">
    </div>
</label>
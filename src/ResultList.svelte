<script>
    import ResultChunk from "./ResultChunk.svelte";

    const resultChunks = ["Result 1", "Result 2", "Result 3", "Result n"];
</script>

<div class="p-4">
    <h4 class="text-blue-600">ResultList Component</h4>
    {#each resultChunks as result}
        <ResultChunk text={result} />
    {/each}
</div>

<style>
    /* Tailwind CSS for ResultList can be added here */
</style>

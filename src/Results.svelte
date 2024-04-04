<script>
    import Search from "./Search.svelte";
    import ResultList from "./ResultList.svelte";
</script>

<div class="bg-blue-400 p-4 flex flex-col">
    <h3 class="text-blue-700 font-semibold">Results Component</h3>
    <div class="mb-4">
        <Search />
    </div>
    <div class="flex-1">
        <ResultList />
    </div>
</div>

<style>
    /* Tailwind CSS for Results can be added here */
</style>

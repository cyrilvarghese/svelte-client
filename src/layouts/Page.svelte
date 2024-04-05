<script>
    import Query from "../components/Query.svelte";
    import Results from "../components/Results.svelte";

 
</script>

<div class="flex flex-col p-4">
    <h2 class="text-blue-800 font-semibold">Page Component</h2>
    <div class="flex-1">
        <Query />
    </div>
    <div class="flex-1 mt-4">
        <Results />
    </div>
</div>

<style>
    /* Tailwind CSS for Page can be added here */
</style>

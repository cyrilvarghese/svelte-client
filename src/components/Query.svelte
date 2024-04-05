<script>
    import UploadFile from "./UploadFile.svelte"
    import FileList from "./FileList.svelte"
</script>

<div class="bg-blue-300 p-4 flex">
    <div class="flex-1">
        <UploadFile />
    </div>
    <div class="flex-1 ml-4">
        <FileList />
    </div>
</div>

<style>
    /* Tailwind CSS for Query can be added here */
</style>

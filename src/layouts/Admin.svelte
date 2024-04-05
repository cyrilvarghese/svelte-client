<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Page from "./Page.svelte";
</script>

<div class="bg-blue-100 min-h-screen flex">
  <Sidebar />
  <div class="flex-1">
    <Page />
  </div>
</div>

<style>
  /* Tailwind CSS for Admin can be added here */
</style>

<script>
    const sidebarLinks = [
        { name: "Home", url: "#" },
        { name: "Profile", url: "#" },
        // More links can be added here
    ];
</script>

<div
    class="bg-indigo-100 p-4 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
    {#each sidebarLinks as link}
        <ul class="list-reset">
            <li class="my-2">
                <a href={link.url} class="text-white-100 hover:text-blue-800"
                    >{link.name}</a
                >
            </li>
        </ul>
    {/each}
</div>

<style>
    /* Tailwind CSS for Sidebar can be added here */
</style>

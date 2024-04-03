<script>
    const sidebarLinks = [
        { name: "Dashboard", url: "#" },
        { name: "Settings", url: "#" },
        { name: "Profile", url: "#" },
        { name: "Logout", url: "#" },
    ];
</script>

<aside class="bg-blue-200 p-4">
    <h2 class="text-blue-800 font-semibold">Sidebar Component</h2>
    {#each sidebarLinks as link}
        <ul class="list-reset">
            <li class="my-2">
                <a href={link.url} class="text-blue-700 hover:text-blue-800"
                    >{link.name}</a
                >
            </li>
        </ul>
    {/each}
</aside>

<style>
    /* Tailwind CSS for Sidebar can be added here */
</style>

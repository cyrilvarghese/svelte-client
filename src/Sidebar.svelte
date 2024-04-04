<script>
  import { link } from "svelte-routing";
  import MenuItem from "./components/MenuItem.svelte";
  import Icon, { getIcon } from "@iconify/svelte";
  import { slide } from "svelte/transition";

  const sidebarLinks = [
    {
      name: "Dashboard",
      url: "#",
      icon: "mdi-light:view-dashboard",
      state: "disabled",
    },
    { name: "Settings", url: "#", icon: "mdi-light:settings" },
    { name: "Profile", url: "#", icon: "mdi-light:account" },
    { name: "Logout", url: "#", icon: "mdi-light:logout" },
  ];
</script>

<aside class="p-4 w-64 flex-none">
  <nav class="flex flex-col gap-2 bg-white p-2">
    {#each sidebarLinks as link}
      <MenuItem
        route={link.url}
        state={link.state}
        icon={link.icon}
        leftIcon
        rightIcon
        type="default"
        label={link.name}
      />
    {/each}
  </nav>
</aside>

<style>
  /* Tailwind CSS for Sidebar can be added here */
</style>

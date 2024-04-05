<!-- File: MenuItem.svelte -->
<script>
    import Icon from "@iconify/svelte";

    export let route = "/";
    /**
     * Component state
     * @type {'default' | 'hover' | 'disabled'}
     */
    export let state = "default";

    /**
     * Type of the item
     * @type {'default' | 'section title'}
     */
    export let type = "default";

    /**
     * Determines if left icon should be shown
     * @type {boolean}
     */
    export let leftIcon = false;
    export let icon = "";

    /**
     * Determines if right icon should be shown
     * @type {boolean}
     */
    export let rightIcon = false;

    /**
     * Determines if right text should be shown
     * @type {boolean}
     */
    export let rightText = false;

    /**
     * Label text
     * @type {string}
     */
    export let label = "Menu Item";

    /**
     * Right label text
     * @type {string}
     */
    export let rightLabel = "⌘⇧ B︎";
</script>

<!-- Here you would add the HTML structure for your component using the props where necessary -->
<div
    class={`menu-item ${state} ${type} hover:bg-slate-100 px-2 flex flex-row justify-items-center justify-between items-center bg-white rounded-sm"`}
>
    <div class="flex flex-row p-2 justify-center justify-items-center">
        {#if leftIcon}<div class="icon mr-2">
                <Icon {icon}  width="1.2em" height="1.2em"  />
            </div>{/if}
        <span
            class="label text-slate-700
        text-sm
        font-medium
        font-['Inter']
        leading-tight"
        >
            <a href={route}>{label}</a></span
        >
    </div>
    <div class="flex flex-row justify-items-center">
        {#if rightText}
            <span
                class="label text-slate-500
        text-xs
        font-medium
        font-['Inter']
        leading-tight"
            >
                {rightLabel}
            </span>
        {/if}
        {#if rightIcon}<div class="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>{/if}
    </div>
</div>

<div>
    <div>
        <span
            class="label text-slate-700
            text-sm
            font-medium
            font-['Inter']
            leading-tight"
        >
        </span>
    </div>
    <div class="flex flex-row justify-items-center"></div>
</div>

<!-- Add styling -->
<style lang="postcss">
    .menu-item.disabled {
        color: var(--slate-700, #334155);
        /* subtle-medium */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
    }
    /* ... and so on for other classes and states */
</style>

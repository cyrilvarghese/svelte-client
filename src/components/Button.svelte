<script>
    // Define the prop with the possible variant types
    /**
     * @type {'default' | 'primary' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link' | 'icon-default' | 'icon-circle' | 'loading'}
     */
    export let type = "default";
    export let text = "Button Text";

    // Base classes that are common for all button variants
    const baseClasses =
        "px-4 py-2 rounded-md justify-center items-center gap-2.5 inline-flex";

    // A mapping of type to specific Tailwind CSS classes
    const typeToClasses = {
        default:
            'bg-slate-900 text-white font-["Inter"] hover:bg-slate-700 cursor-pointer',
        primary:
            'bg-slate-700 text-white font-["Inter"] hover:bg-slate-600 cursor-pointer',
        destructive:
            'bg-red-500 text-white font-["Inter"] hover:bg-red-600 cursor-pointer',
        outline:
            'bg-white border border-slate-200 text-slate-900 font-["Inter"] hover:bg-slate-100 cursor-pointer',
        subtle: 'bg-slate-100 text-slate-900 font-["Inter"] hover:bg-slate-200 cursor-pointer',
        ghost: 'bg-white bg-opacity-0 text-slate-900 font-["Inter"] hover:bg-slate-100 cursor-pointer',
        link: 'bg-transparent text-blue-600 font-["Inter"] hover:underline cursor-pointer',
        "icon-default":
            'bg-slate-900 text-white font-["Inter"] flex gap-2 cursor-pointer',
        "icon-circle":
            'p-3 bg-white rounded-full border border-slate-200 font-["Inter"] cursor-pointer',
        loading:
            'bg-slate-900 bg-opacity-50 text-white font-["Inter"] cursor-not-allowed',
    };

    // Compute the classes based on the type prop
    $: classString = `${baseClasses} ${typeToClasses[type] || ""}`;
</script>

<!-- The component's markup, applying the computed class string -->
<div class={classString}>
    <slot>{text}</slot>
</div>

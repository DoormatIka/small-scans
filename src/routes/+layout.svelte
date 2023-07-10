<script>
    import { base } from "$app/paths";
    import "../app.css";
</script>

<svelte:head>
    <link href="{base}/assets/icons/all.min.css" rel="stylesheet">
</svelte:head>

<div class="p-5 box-border">
    <slot />
    <p class="pt-5 text-gray-600">Might be made of &lt3 by <span class="text-blue-300">Alice</span>.</p>
    <p class="text-gray-800">Made from Small's basement.</p>
</div>
<script lang="ts">
    import type { PageData } from "../$types";

    export let data: PageData;

</script>


<div class="post">
    <img src="{data.img}" alt="{data.title}">
    <h1>{data.title}</h1>
    <p>{data.body}</p>
    
</div>
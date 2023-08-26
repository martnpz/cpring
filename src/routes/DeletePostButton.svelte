<script lang="ts">
    let postId;
    let isMod: boolean = true; // Workaround for moderation.

    async function deleteSelectedPost(id: any) {
        const response = await fetch('/api/delete-post', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        });

	    if (response.ok) {
		    const responseData = await response.json();
            console.log('Response from server:', responseData);
        } else {
            console.error('Error deleting post');
        }
    }

</script>

{#if isMod}
    <button on:click={deleteSelectedPost}>DELETE</button>
{/if}
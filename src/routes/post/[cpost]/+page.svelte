<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;

	let postId;
	let isMod: boolean = true; // Workaround for moderation.

	async function deleteSelectedPost(id: any) {
		console.log('ID from frontend: ' + id);

		const response = await fetch('/api/delete-post', {
			method: 'POST',
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

<div class="post">
	<img src={data.image} alt={data.title} />
	<h1>{data.title}</h1>
	<p>{data.body}</p>

	{#if isMod}
		<button on:click={() => deleteSelectedPost(data.id)}>DELETE</button>
	{/if}
</div>

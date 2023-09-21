<script lang="ts">
	import { onMount } from 'svelte';

	let cposts: any[] = [];

	// Temorarily:
	let password: string;
	async function createAnon() {
		const newAnon = await fetch('/api/auth/createanon', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ password })
		});

		if (newAnon.ok) {
			console.log('anon create.');
		} else {
			console.log('anon create failed');
		}
	}

	let anonId: string;
	let anonPassword: string;

	async function loginAnon() {
		const loginData = {
			anonId,
			anonPassword
		};

		const existingAnon = await fetch('/api/auth/loginanon', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ loginData })
		});

		console.log('At frontend: ' + existingAnon.status);

		if (existingAnon.ok) {
			console.log('anon logged in at frontend', existingAnon);
		} else {
			alert('Credentials are invalid.');
		}
	}

	onMount(async () => {
		const response = await fetch('/api/cposts');

		if (response.ok) {
			cposts = await response.json();
		} else {
			console.error('Failed to fetch data');
		}
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="categories-container">
	<div class="categories">
		<a href="/a" class="category">/a/</a>
		<a href="/b" class="category">/b/</a>
		<a href="/c" class="category">/c/</a>
		<a href="/nor" class="category">/nor/</a>
		<a href="/" class="category">/pol/</a>
		<a href="/" class="category">/uff/</a>
		<a href="/" class="category">/x/</a>
		<a href="/" class="category">/cp/</a>
		<a href="/" class="category">/mo/</a>
		<a href="/" class="category">/cul/</a>
		<a href="/" class="category">/u/</a>
	</div>
	<button class="more-categories">More</button>
</section>

<form on:submit|preventDefault={createAnon}>
	<input type="password" bind:value={password} />
</form>

<p>Anon login</p>

<form on:submit|preventDefault={loginAnon}>
	<input type="text" bind:value={anonId} />
	<input type="password" bind:value={anonPassword} />
	<button type="submit">login</button>
</form>

<section class="posts">
	{#each cposts as { _id, title, image }}
		<a class="cpost" href="/post/{_id}">
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<div class="hover-effect" />
		</a>
	{/each}
</section>

<style>
	.categories-container {
		display: flex;
		flex-direction: row;
		margin: 2% 0 2% 0;
		justify-content: space-around;
	}

	.more-categories {
		width: 50px;
		border-radius: 16px;
		margin-left: 2%;
		padding: 10px;
		color: var(--color-bg-0);
	}

	.categories {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	}

	.category {
		width: 80px;
		padding: 10px;
		border: 1px solid white;
		border-radius: 16px;
		background-color: var(--color-border-0);
		color: white;
		font-weight: bolder;
		font-size: 1.2em;
		text-decoration: none;
		text-align: center;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: 500px;
		grid-column-gap: 2em;
		grid-row-gap: 2em;
	}

	.cpost {
		color: var(--color-text-0);
		border: 1px solid var(--color-border-0);
		border-radius: 16px;
		width: 100%;
		height: 100%;
		padding: 2%;
		background: rgba(37, 34, 72, 0.5);
		cursor: pointer;
	}

	h1 {
		margin: 2%;
		font-weight: bold;
	}

	.cpost img {
		border-radius: 16px;
		object-fit: cover;
		width: 100%;
		height: 80%;
	}

	.hover-effect {
		height: 3%;
		width: 80%;
		margin: 0 10% 5% 10%;
		border-radius: 70px;
		background: none;
		filter: blur(40px);
	}

	.cpost:hover > .hover-effect {
		background: rgba(255, 255, 255, 0.875);
	}
</style>

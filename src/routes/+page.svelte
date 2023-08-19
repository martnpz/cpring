<svelte:head>
	<title>Home</title>
</svelte:head>

<script lang="ts">

  	import { onMount } from 'svelte';
  	import type { Collection } from 'mongodb';
  	import { connectToDatabase } from '$lib/db';

  	let data: Array<any> = [];

  	onMount(async () => {
    	const db = await connectToDatabase();
    	const collection: Collection = db.collection('your-collection-name'); // Update with your collection name
    	data = await collection.find().toArray();
  	});

	const posts = [
		{
            title: 'First post',
            slug: 'first-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
        },
        {
            title: 'Second post',
            slug:'second-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
        },
		{
            title: 'Third post',
            slug: 'third-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
        },
		{
            title: 'Fourth post',
            slug: 'fourth-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
        },
		{
			title: 'Fifth post',
            slug: 'fifth-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
		},
		{
			title: 'Sixth post',
            slug:'sixth-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
		},
		{
			title: 'Seventh post',
            slug:'seventh-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
		},
		{
			title: 'Eighth post',
            slug: 'eighth-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
		},
		{
			title: 'Ninth post',
            slug: 'ninth-post',
			img: 'https://devox.me/backgrounds/cb66ab0d-5b35.jpeg',
		}
	]

</script>

<section class="categories-container">
	<div class="categories">
		<a href="" class="category">/a/</a>
		<a href="" class="category">/b/</a>
		<a href="" class="category">/c/</a>
		<a href="" class="category">/nor/</a>
		<a href="" class="category">/pol/</a>
		<a href="" class="category">/uff/</a>
		<a href="" class="category">/x/</a>
		<a href="" class="category">/cp/</a>
		<a href="" class="category">/mo/</a>
		<a href="" class="category">/cul/</a>
		<a href="" class="category">/u/</a>

    </div>
	<button class="more-categories">More</button>
</section>

<section class="posts">
	{#each data as {title, img}}
		<a class="cpost" href="/post/post">
			<img src="{img}" alt="{title}">
			<h1>{title}</h1>
			<div class="hover-effect"></div>
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
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 2em;
		grid-row-gap: 2em;
	}

	.cpost {
        border: 1px solid var(--color-border-0);
		border-radius: 16px;
		min-height: 10vh;
		height: 50vh;
		padding: 2%;
		background: rgba(37, 34, 72, 0.50);
		backdrop-filter: blur(44px);
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

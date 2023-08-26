<svelte:head>
	<title>Home</title>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
  
  let cposts: any[] = [];

  onMount(async () => {
    const response = await fetch('/api/cposts');

    if (response.ok) {
      cposts = await response.json();
    } else {
      console.error('Failed to fetch data');
    }
  });

</script>

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

<section class="posts">
	{#each cposts as {_id, title, image,}}
		<a class="cpost" href="/post/{_id}">
			<img src="{image}" alt="{title}">
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

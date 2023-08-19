<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<div class="blur-object-1"></div>
		<div class="blur-object-2"></div>
		<div class="blur-object-3"></div>
		<slot />
	</main>

</div>

<style>
	.blur-object-1 {
		border-radius: 159.5px;
		background: rgba(242, 242, 242, 0.503);
		filter: blur(116.5px);
		position: fixed;
		top: 0;
		left: 0;
		width: 500px;
		height: 500px;
		z-index: -50;
	}

	.blur-object-2 {
		border-radius: 159.5px;
		background: rgba(188, 255, 160, 0.454);
		filter: blur(116.5px);
		position: fixed;
		top: 15%;
		left: 80%;
		width: 600px;
		height: 1500px;
		rotate: 25deg;
		z-index: -50;
	}

	.blur-object-3 {
		border-radius: 159.5px;
		background: rgba(195, 131, 251, 0.59);
		filter: blur(116.5px);
		position: fixed;
		top: 35%;
		left: 20%;
		width: 400px;
		height: 1000px;
		rotate: 25deg;
		z-index: -50;
	}


</style>

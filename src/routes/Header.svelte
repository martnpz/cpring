<script>
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="left-corner">
		<a href="/">
			<img src={logo} alt="cpring" width="50%"/>
		</a>
		<button class="account">A</button>
	</div>

	<div class="search-bar">
		<input type="text" placeholder="Search...">
	</div>
	
	<div class="right-corner">
		<button class="create">Create</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 10vh;
	}

	.left-corner {
        display: flex;
		flex-direction: row;
    }

</style>

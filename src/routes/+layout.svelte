<header>
	<a href="/" class="logo">SAD GILMORE</a>

	<nav>
		<div class="social">
			<a href="#">social 1</a>
			<a href="#">social 2</a>
		</div>
		<div class="links">
			<a href="/stuff">stuff</a>
			<a href="/things">things</a>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="logo">SAD GILMORE</div>
	<nav>
		<a href="/stuff">stuff</a>
		<a href="/things">things</a>
	</nav>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		overflow-y: hidden;
	}

	header,
	footer {
		width: 100%;
		height: 10rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgb(19, 19, 19);
		padding: 0 1rem;
		color: white;
	}

	footer {
		background: linear-gradient(69deg, cyan, yellow);
		color: black;
	}

	nav a,
	.logo {
		color: inherit;
	}
</style>

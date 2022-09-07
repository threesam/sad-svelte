<header>
	<div class="logo">
		<a href="/">SAD GILMORE</a>
	</div>

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
		position: relative;
	}

	header nav {
		width: inherit;
		display: inherit;
		justify-content: inherit;
		color: inherit;
	}

	header .logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	footer {
		background: linear-gradient(69deg, cyan, yellow);
		color: black;
	}

	nav a,
	.logo,
	.logo a {
		color: inherit;
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { createScene } from '$lib/scene.js';

	let el;

	onMount(() => {
		createScene(el);
	});
</script>

<svelte:head>
	<title>Three.js Sveltekit</title>
	<meta name="description" content="Three.js example app built with Svelte" />
</svelte:head>

<section>
	<h1>HIT ME WITH YOUR PUNCHLINE</h1>
</section>

<section class="canvas">
	<canvas bind:this={el} />
</section>

<style>
	section {
		min-height: calc(100vh - 20rem);
		width: 100%;
		background: linear-gradient(69deg, cyan, yellow);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.canvas {
		max-height: calc(100vh - 20rem);
		overflow-y: hidden;
	}

	canvas {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

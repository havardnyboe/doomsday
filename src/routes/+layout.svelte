<script lang="ts">
	let { children } = $props();
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">kviss</a></li>
			<li><a href="/info">info</a></li>
			<li><a href="/resultater">resultater</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	:root {
		font-family: 'Space Mono', monospace;
		line-height: 1.5;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(a) {
		text-decoration: underline;
		font-style: italic;
		color: #0070f3;
		transition: color 0.2s ease-in-out;

		&:hover {
			color: #005bb5;
		}
	}

	:global(li a) {
		text-decoration: dotted underline;
		color: #555;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;

		&:hover {
			color: #000;
			text-decoration: underline;
			background-color: #f0f0f0;
		}
	}

	:global(nav) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: auto;
		width: calc(100% - 10rem);
		/* border-bottom: 1px solid #666; */

		ul {
			display: flex;
			gap: 1rem;
			margin: 2rem 0;
			padding: 0;
			list-style: none;
		}
	}

	:global(main) {
		text-align: center;
		margin: auto;
	}
</style>

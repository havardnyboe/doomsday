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
	:global(:root) {
		font-family: 'Space Mono', monospace;
		line-height: 1.5;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

  :global(html) {
    scrollbar-gutter: stable both-edges;
  }

	:global(a) {
		text-decoration: underline;
		font-style: italic;
		color: #0070f3;
		transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;

		&:hover {
			background-color: #005bb5;
      color: #fff;
      box-shadow: -0.5rem 0 0 0 #005bb5, 0.5rem 0 0 0 #005bb5;
		}
	}

	li a {
		text-decoration: dotted underline;
		color: #555;

		&:hover {
			color: #fff;
			text-decoration: underline;
			background-color: #000;
      box-shadow: -0.5rem 0 0 0 #000, 0.5rem 0 0 0 #000;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: auto;
		width: calc(100% - 10rem);

		ul {
			display: flex;
			gap: 1rem;
			margin: 2rem 0;
			padding: 0;
			list-style: none;
		}
	}

	main {
		margin: auto;
	}
</style>

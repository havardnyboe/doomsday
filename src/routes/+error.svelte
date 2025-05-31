<script lang="ts">
	import { page } from "$app/state";
	console.log(page);
</script>

<section>
	<h1>{page.status}</h1>
	<p>{page.error?.message}</p>
  <img src="/cat.gif" alt="cat">
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	h1 {
    margin: 0;
		font-size: 2rem;
	}

	p {
		font-size: 1.25rem;
	}
</style>

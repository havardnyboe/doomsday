<script lang="ts">
	import { genererTilfeldigDato, iso8601TilDDMMYYYY, ukedager, ukedagerRegex } from "../utils/dager";

	let gjettetUkedag = "";
	let generertUkedag = "";
	let generertDato = genererTilfeldigDato();
	let ukedagInput: HTMLInputElement | null = null;

	function finnUkedagFraString(str: string): string | undefined {
		return Object.entries(ukedagerRegex).find(([key]) => str.toLowerCase().match(key))?.[1];
	}

	function håndterKnapp() {
		gjettetUkedag = "";
		generertUkedag = "";

		if (ukedagInput) {
			ukedagInput.value = "";
			ukedagInput.focus();
		}

		generertDato = genererTilfeldigDato();
	}

	function hånterInputDag() {
		const parsedDag = new Date(generertDato);
		gjettetUkedag = ukedagInput ? (finnUkedagFraString(ukedagInput.value.trim()) ?? "") : "";
		generertUkedag = ukedager[parsedDag.getDay()];
	}
</script>

<section>
	<p>Hvilken ukedag er:</p>
	<p style="font-size: 1.5rem;">{iso8601TilDDMMYYYY(generertDato)}</p>
</section>

<section>
	<input
		bind:this={ukedagInput}
		on:keyup={(e) => {
			if (e.key == "Enter") hånterInputDag();
		}}
		type="text"
		name="ukedag"
		id="ukedag"
		autofocus
	/>
	<button on:click={håndterKnapp}>Generer dato</button>
</section>

<section>
	{#if gjettetUkedag}
		<p>Du gjettet: {gjettetUkedag} <br /> Riktig dag: {generertUkedag}</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2rem auto;
		max-width: 600px;
		gap: 1rem;
	}

	p {
		margin: 0;
	}

	input {
		border-radius: 8px;
		border: 1px solid #ccc;
		padding: 0.5rem;
		font-family: "Space Mono", monospace;
		box-sizing: border-box;
		transition: border-color 10ms ease;
		background-color: #f9f9f9;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	button {
		border-radius: 8px;
		border: 1px solid #ccc;
		padding: 0.5rem 1rem;
		font-family: "Space Mono", monospace;
		background-color: #f9f9f9;
		cursor: pointer;
		margin-left: 0.5rem;
		color: #333;

		&:active {
			background-color: #e0e0e0;
			box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
			color: #000;
		}
	}
</style>

<script lang="ts">
	const dommedager = {
		0: ['3/1', '28/2', '14/3', '4/4', '9/5', '6/6', '11/7', '8/8', '5/9', '10/10', '7/11', '12/12'],
		1: ['4/1', '29/2', '14/3', '4/4', '9/5', '6/6', '11/7', '8/8', '5/9', '10/10', '7/11', '12/12']
	};
	const ukedager: Record<number, string> = {
		0: 'søndag',
		1: 'mandag',
		2: 'tirsdag',
		3: 'onsdag',
		4: 'torsdag',
		5: 'fredag',
		6: 'lørdag'
	};
	const ukedagerRegex: Record<string, string> = {
		m: 'mandag',
		i: 'tirsdag',
		on: 'onsdag',
		to: 'torsdag',
		f: 'fredag',
		l: 'lørdag',
		sø: 'søndag'
	};
	function erSkuddår(år: number): boolean {
		return (år % 4 === 0 && år % 100 !== 0) || år % 400 === 0;
	}

	let gjettetUkedag = '';
	let generertUkedag = '';
	let generertDato = '';

	function genererTilfeldigDato() {
		gjettetUkedag = '';
		generertUkedag = '';
		const år = Math.floor(Math.random() * 200) + 1900;
		// const måned = Math.floor(Math.random() * 12); // 0-11
		const måned = 11;
		// const dagerIMåned = [31, erSkuddår(år) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		// const dag = Math.floor(Math.random() * dagerIMåned[måned]);
		const dag = 11;
		return `${String(dag + 1).padStart(2, '0')}/${String(måned + 1).padStart(2, '0')}/${år}`;
	}

	function finnUkedagFraString(str: string): string {
		return Object.entries(ukedagerRegex).find(([key]) => str.toLowerCase().match(key))?.[1] ?? '';
	}

	function håndterKnapp() {
		generertDato = genererTilfeldigDato();
		const parsedDag = new Date(generertDato);
		console.log(parsedDag);
		console.log(parsedDag.getDay());
		console.log(ukedager[parsedDag.getDay()]);
	}

	function hånterInputDag(input: HTMLInputElement) {
		const parsedDag = new Date(generertDato);
		gjettetUkedag = finnUkedagFraString(input.value);
		generertUkedag = ukedager[parsedDag.getDay()];
	}
</script>

<h1>Dommedagsregelen Kviss</h1>
<p style="font-size: 1.5rem;">{generertDato}</p>
<input
	on:keyup={(e) => {
		if (e.key == 'Enter') hånterInputDag(e.target as HTMLInputElement);
	}}
	type="text"
	name="ukedag"
	id="ukedag"
	autofocus
/>
<button on:click={håndterKnapp}>Generer dato</button>
{#if gjettetUkedag}
	<p>Du gjettet: {gjettetUkedag} <br /> Riktig dag er: {generertUkedag}</p>
{/if}

<style>
	input {
		border-radius: 8px;
		border: 1px solid #ccc;
		padding: 0.5rem;
		font-size: 1rem;
		/* width: 100%; */
		box-sizing: border-box;
		transition: border-color 10ms ease;

		background-color: #f9f9f9;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
	}
</style>

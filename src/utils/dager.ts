function erSkuddår(år: number): boolean {
	return (år % 4 === 0 && år % 100 !== 0) || år % 400 === 0;
}

function dommedager(år: number, måned: number): number[] {
	const dommedager: Record<number, number[]> = {
		0: erSkuddår(år) ? [4, 11, 18, 25, 32] : [3, 10, 17, 24, 31], // januar
		1: erSkuddår(år) ? [8, 15, 22, 29] : [7, 14, 21, 28], // februar
		2: [7, 14, 21, 28], // mars
		3: [4, 11, 18, 25], // april
		4: [2, 9, 16, 23, 30], // mai
		5: [6, 13, 20, 27], // juni
		6: [4, 11, 18, 25], // juli
		7: [1, 8, 15, 22, 29], // august
		8: [5, 12, 19, 26], // september
		9: [3, 10, 17, 24], // oktober
		10: [1, 8, 15, 22, 29], // november
		11: [6, 13, 20, 27], // desember
	};

	if (måned < 0 || måned > 11) {
		throw new Error("Måned må være mellom 0 (januar) og 11 (desember)");
	}
	return dommedager[måned];
}

const ukedager: Record<number, string> = {
	0: "søndag",
	1: "mandag",
	2: "tirsdag",
	3: "onsdag",
	4: "torsdag",
	5: "fredag",
	6: "lørdag",
};
const ukedagerRegex: Record<string, string> = {
	ma: "mandag",
	ti: "tirsdag",
	on: "onsdag",
	to: "torsdag",
	fr: "fredag",
	lø: "lørdag",
	sø: "søndag",
};

function genererTilfeldigDato() {
	const år = Math.floor(Math.random() * 200) + 1900; // 1900-2099
	const måned = Math.floor(Math.random() * 12); // 0-11
	const dagerIMåned = [31, erSkuddår(år) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const dag = Math.floor(Math.random() * dagerIMåned[måned]);

	return `${år}-${String(måned + 1).padStart(2, "0")}-${String(dag + 1).padStart(2, "0")}`;
}

function iso8601TilDDMMYYYY(dato: string): string {
	const [år, måned, dag] = dato.split("-");
	return `${dag}/${måned}/${år}`;
}

export { erSkuddår, dommedager, genererTilfeldigDato, iso8601TilDDMMYYYY, ukedager, ukedagerRegex };

<article>
	<section>
		<h1>Dommedagsregelen</h1>
		<p>
			Fritt fra <a href="https://en.wikipedia.org/wiki/Doomsday_rule">Wikipedia</a>, den frie encyklopedi.
		</p>
		<figure>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/6/66/John_H_Conway_2005_%28cropped%29_%282%29.jpg"
				alt="John Conway"
			/>
			<figcaption>
				John Conway, matematiker og oppfinner av Dommedagsregelen.
				<span>
					Foto: Thane Plambeck
					<a href="https://creativecommons.org/licenses/by/2.0" title="Creative Commons Attribution 2.0">CC BY 2.0</a>
				</span>
			</figcaption>
		</figure>
		<p>
			Dommedagsregelen, Dommedagsalgoritmen eller Dommedagsmetoden er en <a
				href="https://no.wikipedia.org/wiki/Algoritme_for_%C3%A5_bestemme_ukedag">algoritme for å beregne ukedagen</a
			>
			for en gitt dato. Siden den
			<a href="https://no.wikipedia.org/wiki/Den_gregorianske_kalenderen">gregorianske kalenderen</a>
			beveger seg i sykluser på 400 år, gir den en
			<a href="https://en.wikipedia.org/wiki/Perpetual_calendar">evigvarende kalender</a>. Algoritmen ble laget av
			<a href="https://no.wikipedia.org/wiki/John_Horton_Conway">John Conway</a> i 1973, og er designet slik at den kan utføres
			med enkel hoderegning. Den utnytter at hvert år har en bestemt ukedag hvor visse datoer som en enkle og huske, kalt
			dommedager, faller; for eksempel faller siste dagen i februar, 4. april (4/4), 6. juni (6/6), 8. august (8/8), 10.
			oktober (10/10) og 12. desember (12/12) på samme ukedag i året.
		</p>
	</section>
	<section>
    <h2>Utførelse</h2>
		<p>Uførelsen av Dommedagsregelen innebærer tre steg:</p>
		<ol>
			<li>Finn ankerdagen for århundret (ankerdagen er ukedagen dommedagen faller på)</li>
			<li>Beregn ankerdagen for året ut fra ankerdagen for århundret</li>
			<li>
				Velg den nærmeste dommedagen, og tell antall dager (modulo 7) mellom den og datoen du skal finne ukedagen for
			</li>
		</ol>
    <p>
      Eksempelvis, for å finne ukedagen for 1. januar 1970 kan man gjøre følgende:
    </p>
    <ol>
      <li>Ankerdagen for 1900-tallet er onsdag (3)</li>
      <li>Differanset mellom 1970 og 1900 er 5 dusin og 10, 10 = 2 (mod 4); 3 + 5 + 10 + 2 = 20, 20 = 6 (mod 7), så ankerdagen for 1970 er lørdag (6)</li>
      <li>Den nærmeste dommedagen er 3. januar, siden 1970 ikke er et skuddår; trekk fra 2 dager, 6 - 2 = 4 (mod 7), så blir 1. januar 1970 en torsdag (4)</li>
	</section>
</article>

<style>
	* {
		text-align: left;
	}

	h1 {
		font-size: 2rem;
		border-bottom: 2px solid #ccc;
	}

	article {
		max-width: 85ch;
		margin: auto;
		padding: 1rem;
		text-align: justify;
	}

	figure {
		display: table;
		margin: 0rem 2rem;
		float: right;

		img {
			max-width: 256px;
			height: auto;
			border: 1px solid #ccc;
		}

		figcaption {
			display: table-caption;
			caption-side: bottom;
			font-size: 0.875rem;
			color: #666;
			span {
				font-style: italic;
				font-size: 0.75rem;
			}
		}
	}
</style>

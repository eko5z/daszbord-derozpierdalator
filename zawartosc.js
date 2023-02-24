const container = document.querySelector("#app > div > main > div > div.container.container--fluid");

if (container) {
	// Pierwej tworzymy zastępczy, mniejszy header zamiast tego bocznego gówna.
	const header = document.createElement ("div");
	header.id = "dd-header";
	container.insertBefore (header, container.firstChild);

	// O wiele lepsze niż trudzenie się z tworzeniem elementów programatycznie.
	header.innerHTML = `
	<div class="dd-dropdown">
		<button class="dd-dropdown-button">✉️ Blog muzyczny ▼</button>
		<div class="dd-dropdown-content">
			<a href="/dashboard/my-entries/blog">🗒 Moje wpisy</a>
			<a href="/dashboard/show/blog">📰 Wszystkie wpisy</a>
			<a href="/dashboard/create/blog">🖊 Utwórz wpis</a>
			<a href="/dashboard/posts/tags">🔖 Tagi</a>
		</div>
	</div>

	<div class="dd-dropdown">
		<button class="dd-dropdown-button">🎬 Biblioteka mediów ▼</button>
		<div class="dd-dropdown-content">
			<a href="/dashboard/audio-files">🎶 Pliki audio</a>
			<a href="/dashboard/images">🎨 Obrazy</a>
			<a href="/dashboard/galleries">🖼 Galerie</a>
		</div>
	</div>

	<div class="dd-dropdown">
		<button class="dd-dropdown-button">🔒 Moje konto ▼</button>
		<div class="dd-dropdown-content">
			<a href="/dashboard/account/password">🔑 Zmień hasło</a>
		</div>
	</div>
	`
}

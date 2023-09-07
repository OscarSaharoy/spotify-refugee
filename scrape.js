
const originalFetch = window.fetch;
let dataStore = [];

function getArtists( song ) {
	return song.track.data.artists.items.map( item => item.profile.name );
}

function getSongInfo( song ) {
	const name = song.track.data.name;
	const artists = getArtists( song );

	return { name, artists };
}

async function storeData( json ) {

	let songs;
	try {
		songs = json.data.me.library.tracks.items;
	} catch( error ) { return; }

	const result = songs.map( getSongInfo );
	dataStore = [ ...dataStore, ...result ];
}

async function newFetch(...args) {
	const response = await originalFetch(...args);
	const responseClone = response.clone();
	const json = await responseClone.json();

	storeData( json );
	
	return response;
}

window.fetch = newFetch;

function getData() {
	console.log( dataStore );
}


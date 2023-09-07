import dump1 from "./data/dump1.js";
import dump2 from "./data/dump2.js";


function getArtists( song ) {
	return song.artists.items.map( item => item.profile.name );
}

function getSongInfo( song ) {
	const name = song.name;
	const artists = getArtists( song );

	return { name, artists };
}

const result = [];
const songs1 = dump1.data.playlistV2.content.items;

for( let i = 0; i < songs1.length; ++i ) {
	const row = songs1[i];
	const song = row.itemV2.data
	result.push( getSongInfo(song) );
}

const songs2 = dump2.data.playlistV2.content.items;

for( let i = 0; i < songs2.length; ++i ) {
	const row = songs2[i];
	const song = row.itemV2.data
	result.push( getSongInfo(song) );
}

const json = JSON.stringify(result);
console.log( json.replaceAll( /},{/g, "},\n{" ) );


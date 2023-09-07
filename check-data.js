import data from "./data/liked.js";

function arraysEqual( A, B ) {
	return A.reduce( (result,a,i) => a == B[i] && result, true );
}

const result = [];
for( let i = 0; i < data.length; ++i ) {
	const row = data[i];

	if( !data.slice(i+1, data.length).filter( 
		orow => orow.name == row.name && arraysEqual(row.artists, orow.artists)
	).length )
		result.push(row);
}

const json = JSON.stringify(result);
console.log( json.replaceAll( /},{/g, "},\n{" ) );

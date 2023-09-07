working 7/9/23, will break soon probably

`scrape.js` is a js snippet you can paste in the console on the spotify site to intercept the api responses, it will build up a list of songs as you scroll through your playlist (I think it only works for liked songs without modification). Then call `getData()` from the console to print a list of songs - you can copy the json object and paste into a file. It will miss the first few if you don't paste it really soon after the page loads.

`parse-dumps.js` can be used to directly parse api responses copied from the network tab in devtools.

After I got a list of songs in json format I parsed them into `artist - song name` format and used `dl.sh` to download them using [`yt-dlp`](https://github.com/yt-dlp/yt-dlp).


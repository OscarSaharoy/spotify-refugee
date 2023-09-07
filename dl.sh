#!/usr/bin/env bash

inputFile="liked.corrected.txt"
skipTo=0
songNumber=0
while read line; do
	if (( songNumber+1 > skipTo )); then
		echo -e "\e[1m\e[32m[dl.sh $(date "+%H:%M:%S")] Downloading $inputFile #$songNumber: $line\e[1m\e[0m"
		yt-dlp -x --audio-format mp3 "ytsearch:$line"
	fi
	((songNumber++))
done <$inputFile


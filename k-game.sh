#!/bin/sh
printf '\033c\033]0;%s\a' k-game
base_path="$(dirname "$(realpath "$0")")"
"$base_path/k-game.x86_64" "$@"

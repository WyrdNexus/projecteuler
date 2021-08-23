#!/usr/bin/env bash

function msg {
  echo "  ${1}"
}

function fixown {
  if [[ $EUID -ne 0 ]]; then
   echo "Changing ownsership requires root privileges. Run with sudo."
   exit 1
  fi

  chown -R wyrdn:www-data *
}

FILE="${1}.js"

if ! test -f "./$FILE"; then
  msg "File not found: ./${FILE}"
  exit 1
fi

rm ./sandbox/script.js
ln -s ../$FILE ./sandbox/script.js

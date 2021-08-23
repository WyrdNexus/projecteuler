#!/usr/bin/env bash

function msg {
    echo "  ${1}"
}

FILE="../${1}.js"

pwd
ll ../

if ! test -f $FILE; then
    msg "File not found: ../${FILE}"
    exit 1
fi

pwd
rm ../sandbox/script.js
ln -s ../$FILE

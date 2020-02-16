#!/bin/bash

#
# erase
#
if [ -e ./dist ]; then
	rm -fr dist/*
fi

#
# build
#
yarn tsc

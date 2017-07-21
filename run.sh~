#!/bin/sh

$val=$(cat "${BASE_URL}")

/bin/sed -i "s|http://localhost:9090|$val|" /usr/share/nginx/html/bundle.js

nginx -g 'daemon off;'

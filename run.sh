#!/bin/sh

/bin/sed -i "s|http://localhost:9090|${BASE_URL}|" /usr/share/nginx/html/bundle.js

nginx -g 'daemon off;'

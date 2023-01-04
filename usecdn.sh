#!/bin/bash
FILENAME="dev.index.html"
FILENAMECDN="min.index.html"

cp $FILENAME $FILENAMECDN



echo "CONVERT CDN URL TO PUBLIC"
SEARCH1="https://d29539q498fyfe.cloudfront.net/public"
REPLACE1="public" 
sed -i '' "s,$SEARCH1,$REPLACE1,g" $FILENAMECDN
echo "ENDING 1ST CONVERTION"

sleep 1

echo "CONVERT public img"
SEARCH2="public/img" 
REPLACE2="https://d29539q498fyfe.cloudfront.net/public/img"
sed -i '' "s,$SEARCH2,$REPLACE2,g" $FILENAMECDN

echo "CONVERT public scriptjs"
SEARCH3="public/script.js" 
REPLACE3="https://d29539q498fyfe.cloudfront.net/public/script.js"
sed -i '' "s,$SEARCH3,$REPLACE3,g" $FILENAMECDN

echo "CONVERT public icons"
SEARCH4="public/icons" 
REPLACE4="https://d29539q498fyfe.cloudfront.net/public/icons"
sed -i '' "s,$SEARCH4,$REPLACE4,g" $FILENAMECDN

echo "CONVERT public css"
SEARCH5="public/input" 
REPLACE5="https://d29539q498fyfe.cloudfront.net/public/input"
sed -i '' "s,$SEARCH5,$REPLACE5,g" $FILENAMECDN
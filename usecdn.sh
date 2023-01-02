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

echo "CONVERT PUBLIC TO CDN URL"
# FILENAME2="dev.index.html"
# NEWFILENAME2="dev.index.3.html"
SEARCH2="public" 
REPLACE2="https://d29539q498fyfe.cloudfront.net/public"
sed -i '' "s,$SEARCH2,$REPLACE2,g" $FILENAMECDN
echo "ENDING 2ND CONVERTION"
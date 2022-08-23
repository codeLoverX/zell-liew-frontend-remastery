# Steps:

# 1. create a new file named purgecss.sh inside your project folder
# 2. insert the code below into purgecss.sh file
# 3. run ./purgecss.sh from CLI

#!/bin/bash

# run production build
ng build --prod --output-hashing none

# go to the dist/yourProjectName folder
cd ./dist/yourProjectName

# make a new directory named 'css' (you can name it anything)
mkdir css

# run PurgeCSS & make a new '.css' file inside the 'css' directory
purgecss --css ./styles.css --content ./index.html ./*.js --out ./css

# replace the 'dist/yourProjectName/styles.css' file with the 'dist/yourProjectName/css/styles.css' file
mv ./css/styles.css ./styles.css

# delete the previously created 'css' directory
rm -r css
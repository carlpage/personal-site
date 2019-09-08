#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.carlwpage.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://carlpage.github.io
# git push -f git@github.com:carlpage/carlpage.github.io.git master

# if you are deploying to https://carlpage.github.io/personal-site/
git push -f git@github.com:carlpage/personal-site.git master:gh-pages

cd -
# The-Dog-App

Activities:

1. Sign up to get the API Key
2. Make the first request.



Importand Commands

-npm init -y
-npm i dotdev

git status
git add .
git commit -m ""
git push -u origin main


https://thedogapi.com/

https://sebhastian.com/javascript-require-is-not-defined/
Browserify tutorial https://www.youtube.com/watch?v=_dtnD_8Att0
https://github.com/browserify/browserify#usage
Require is not meant to work on the browser, is a Node JS function and it is supposed to be loading dependencies in a Node environment only
Command: npm install browserify

./node_modules/browserify/bin/cmd.js ./index.js > ./dist/bundle.js

https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/

https://medium.com/@zak786khan/env-variables-undefined-78cf218dae87

https://requirejs.org/docs/download.html

https://www.markdownguide.org/basic-syntax/

https://stackoverflow.com/questions/5765645/should-you-commit-gitignore-into-the-git-repos#:~:text=Normally%20yes%2C%20.,often%20create%20LOG%20or%20something.

https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/git-best-practices-and-adding-a-gitignore-file#:~:text=gitignore%20file%20lists%20all%20of,the%20project%20files%20and%20subfolders.

https://medium.com/pareture/show-git-and-other-default-hidden-folders-and-files-in-vs-code-57df151588ea

https://www.youtube.com/watch?v=FmxrC2NGnLI

https://www.codeproject.com/Questions/5306356/How-can-I-use-a-function-in-a-bundle-js-file-using

HTML : Accessing function in bundled javascript (using webpack) from HTML file
https://www.youtube.com/watch?v=gckan8bXKqg

https://www.npmjs.com/package/envify?activeTab=readme

./node_modules/browserify/bin/cmd.js ./index.js -t [ envify --THE_DOG_API_KEY live_yVTubJs7G68ykhj29D72STR46FChzTJMYjbLkSK8PMg6699F8MVgX7Mfe0WdixYo ] > ./dist/bundle.js
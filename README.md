# npm module template

- 👩‍💻Focus on the logic. Don't waste your time setting up environment!
- ✍️Write code like it's 2020 using ES6 syntax. The code will be transpiled and minified before deployment.
- 🛠Test: use Jest to cover your module with unit tests.

Сomplies with GitHub best practices:

- 🔑`LICENSE` describes the license agreement. This template uses MIT license
- 📁`.editorconfig` sets up code style rules across all popular code redactors
- ⚖️`.gitignore` and `.npmignore`: splits up the code into 2 chunks: sources will be uploaded to github, transpiled and minified files - to `npm`
- 🔬`.eslintrc` lists eslint settings
- 🏭`.babelrc` describes ES6->ES5 rules

# Usage

Create your own module in 3 simple steps:

1. Press "Use this template" button and type a name of your new module

<img width="701" alt="Screenshot 2019-11-19 at 17 58 17" src="https://user-images.githubusercontent.com/3485490/69136644-3378aa80-0af6-11ea-8164-ed99a303bfab.png">

2. Add some fancy logic to `src` folder

3. Run `yarn build` to build the module and publish it using `npm publish`

Optional:

- describe you module's API in the README.md file
- add unit tests

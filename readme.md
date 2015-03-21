What is Reactify?
---

If you are not familiar with `Browserify`, please read the [browserify-handbook](https://github.com/substack/browserify-handbook) and take a look at my
[browserify-tests](https://github.com/andrerpena/browserify-tests) for an explained sample project.

The problem with using `Browserify` directly in ReactJS projects is that `JSX` files should be transformed to JS first, before actually generating the `Browserify`
bundle. `Reactify` does this transformation.

Installing Reactify and the sample project
---

In order to install Reactify, run this CLI:

> $ npm install reactify

Now clone Browserify-tests

> $ git clone https://github.com/andrerpena/browserify-reactify-tests.git

Sample project
---

The sample project contains a module, in the `src/lib` directory, a ReactJS component, in the `src/react/components` directory, and a `main.js` file, in
`src` directory. The React component depends on the `messageProvider` module.

The reason why there's a `index.js` is that we need an entry point to generate the `Browserify` bundle. `index.js` requires every component and then assign
 them to a `Tests` global namespace. If your project was called `ReactUI`, you would probably create a global namespace called `ReactUI` and then use `index.js` to
 assign the components to this namespace.

In order to generate the bundle:

Make sure `Browserify` is installed globally:

> $ npm install -g browserify

Make sure all packages referenced in the `package.json` files are installed locally:

> $ npm install

And now, finally, let's generate the bundle:

> $ browserify -t reactify ./src/index.js > ./dist/bundle.js


This should do it. The `> ./dist/bundle.js` instruction tells Broserify to output the bundle to the given file. If this parameter is not provider,
 Browserify will just output the bundle to `stdout`.

Now, run `index.html` in your browser to see that the component and it's dependencies are all correctly resolved.
Browserify tests

What is Browserify?
---

When I first came across Browserify, I thought it would be a client-side script to add support for CommonJS modules. I thought it would add some sort of global `module` variable
and define a `require` function and work the exact same as `RequireJS`, except for not being asynchronous.

I was wrong. Browserify works on the server-side. It's an NPM package. Here's a quick description taken from [handbook](https://github.com/substack/browserify-handbook):

> Browserify starts at the entry point files that you give it and searches for any require() calls it finds using static analysis of the source code's abstract syntax tree.

Browserify is a compiling tool. Every `require()` and `module.exports` call will be removed and Browserify will generate a bundle file that will automatically contain every
 dependencies in the correct order.

Installing Browserify and the sample project
---

In order to install Browserify, run this CLI:

> $ npm install -g browserify

Now clone Browserify-tests

> $ git clone https://github.com/andrerpena/browserify-tests.git

Sample project
---

The sample project contains 3 modules, in the `lib` directory. Every module should create some sort of object and then assigning `module.exports` to that object. Whatever is
 passed to `module.exports` represents the module itself. In the sample project, there are 2 modules, `logger.js` and `emailSender.js`, and `logger.js` depends on `emailSender.js`.

When compiling a Browserify bundle, you can choose one ore more entry points. In our case, the entry point is `main.js`. Browserify is supposed to detect that `main.js` depends on `logger.js`
and that the later, in turn, depends on `emailSender.js`. Browser should, then, generate the output bundle.

In order to generate the bundle:

> $ browserify ./lib/main.js > bundle.js

This should do it. The `> bundle.js` instruction tells Broserify to output the bundle to the given file. If this parameter is not provider, Browserify will just output the bundle to `stdout`.

To verify that the bundle works correctly:

> $ node bundle.js

And that should output:

> this is working fine
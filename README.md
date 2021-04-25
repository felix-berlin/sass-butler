# SCSS Collection

> A collection of useful SCSS mixins and functions

## Installation

```
npm install https://github.com/felix-berlin/scss-collection (#commit, #branch or #(release)tag)
```

I recommend to use release tags.

## Requirements

This project uses the "new" [Sass Module system](https://sass-lang.com/blog/the-module-system-is-launched). Therefore your build tool or taskrunner have to support Dart Sass 1.23.0 or above.

### Sass support

| Sass Compiler | Support |
| ------------- | ------- |
| Dart Sass     | ✅      |
| Lib Sass      | ❌      |
| Ruby Sass     | ⚰️      |

## Usage

### Import all at once or all individually

Single import of the used functionalities.

_Recommended for more precise namespaces_.

```scss
@use './node_modules/@felix-berlin/scss-collection/functions/first-of-list' as fol;
```

import all functions at once:

```scss
@use './node_modules/@felix-berlin/scss-collection/functions' as mixins;
```

### How to import

```scss
@use './node_modules/@felix-berlin/scss-collection/mixis/breakpoint' as breakpoint;
```

With `sass-loader`:

```scss
@use '~@felix-berlin/scss-collection/mixis/breakpoint' as breakpoint;
```

With `webpack mix`:

```js
  .sass('resources/assets/styles/app.scss', 'styles', {
    sassOptions: {
      includePaths: ['./node_modules'],
    },
  })
```

```scss
@use '@felix-berlin/scss-collection/mixis/breakpoint' as breakpoint;
```

### Override module config

Some of the module comes with "global" config vars and maps (breakpoint mixin). This may be a problem since you can only overwrite once with `with()`.
Here is an example how you can deal with it:

Create a new file and load the breakpoint mixin from the `node_modules` with the `@forward` function. Similar to the `@use` function you can overwrite predefined vars with `with()`.

```scss
// _external.scss

// Add your own breakpoints
@forward '@felix-berlin/scss-collection/mixins/breakpoint' with ($lg: 1200px);
```

In the rest of your project you don't add the module via `node_modules` anymore but load the customized module `_external.scss` with `@use`.

```scss
// _my-module.scss

@use external as break;

.my-selector {
  // lg === 1200px not 1260px
  @include break.breakpoint(lg) {
    padding: 12px 0 1rem 0;
  }
}
```

## Documentation

You can find the documention at: [https://scss-collection.kasimir.dev](https://scss-collection.kasimir.dev)

> The documentation is updated automatically with each commit on the master branch.

### Build the docu locally

Run following command:
`npm run sassDoc`

### Online tools for testing

[Sassmeister](https://www.sassmeister.com) is a great online tool for compiling and testing your Scss/Sass code.

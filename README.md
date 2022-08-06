# Sassy 😜 SCSS

![npm](https://img.shields.io/npm/dm/@felix_berlin/sassy-scss?logo=npm&style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@felix_berlin/sassy-scss?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/sassy-scss?label=github&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/felix-berlin/scss-collection/CI/master?label=build%20docs&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/felix-berlin/sassy-scss/Unit%20tests?label=unit-tests&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/felix-berlin/sassy-scss/Release?label=release&style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/felix-berlin/scss-collection?style=flat-square)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@felix_berlin/sassy-scss?style=flat-square)
![npms.io (quality)](https://img.shields.io/npms-io/maintenance-score/@felix_berlin/sassy-scss?style=flat-square)

> A collection of useful SCSS mixins and functions

## Installation

```bash
npm i @felix_berlin/sassy-scss
```

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
@use './node_modules/sassy-scss/functions/first-of-list' as fol;
```

import all functions at once:

```scss
@use './node_modules/sassy-scss/functions' as functions;
```

### How to import

```scss
@use './node_modules/sassy-scss/mixis/breakpoint' as breakpoint;
```

With `sass-loader`:

```scss
@use '~sassy-scss/mixis/breakpoint' as breakpoint;
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
@use 'sassy-scss/mixis/breakpoint' as breakpoint;
```

### Override module config

Some of the module comes with "global" config vars and maps (breakpoint mixin). This may be a problem since you can only overwrite once with `with()`.
Here is an example how you can deal with it:

Create a new file and load the breakpoint mixin from the `node_modules` with the `@forward` function. Similar to the `@use` function you can overwrite predefined vars with `with()`.

```scss
// _custom-breakpoints.scss

// Add your own breakpoints
@forward 'sassy-scss/mixins/breakpoint' with (
  $lg: 1200px
);
```

In the rest of your project you don't add the module via `node_modules` anymore but load the customized module `_external.scss` with `@use`.

```scss
// _my-module.scss

@use 'custom-breakpoints' as break;

.my-selector {
  // lg === 1200px not 1260px
  @include break.breakpoint(lg) {
    padding: 12px 0 1rem 0;
  }
}
```

## Documentation

You can find the documention at: [https://sassy-scss.kasimir.dev](https://sassy-scssn.kasimir.dev)

> The documentation is updated automatically with each commit on the master branch.

### Build the docu locally

Run following command:
`npm run sassDoc`

### Online tools for testing

[Sassmeister](https://www.sassmeister.com) is a great online tool for compiling and testing your Scss/Sass code.

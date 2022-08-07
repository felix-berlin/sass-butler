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

> Sassy SCSS is a big collection of SASS mixins and functions.

## Whats inside?

Visit <https://sassy-scss.kasimir.dev> for full documentation.

### Functions

- [colors](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_colors.scss)
  - [hex-to-rgb-values()](https://sassy-scss.kasimir.dev/#color-function-hex-to-rgb-values)
  - [hex-to-rgb()](https://sassy-scss.kasimir.dev/#function-hex-to-rgb)
- [converters](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_converters.scss)
  - [px-to-rem()](https://sassy-scss.kasimir.dev/#converter-function-px-to-rem)
- [lists](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_lists.scss)
  - [first-of-list()](https://sassy-scss.kasimir.dev/#list-function-first-of-list)
  - [last-of-list()](https://sassy-scss.kasimir.dev/#list-function-last-of-list)
- [maps](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_maps.scss)
  - [map-collect()](https://sassy-scss.kasimir.dev/#map-function-map-collect)
- [numbers](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_numbers.scss)
  - [strip-unit()](https://sassy-scss.kasimir.dev/#number-function-strip-unit)
  - [number-invert()](https://sassy-scss.kasimir.dev/#number-function-number-invert)
  - [random-num()](https://sassy-scss.kasimir.dev/#number-function-random-num)
- [strings](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_strings.scss)
  - [str-starts-with()](https://sassy-scss.kasimir.dev/#string-function-str-starts-with)
  - [str-ends-with()](https://sassy-scss.kasimir.dev/#string-function-str-ends-with)
  - [str-contains()](https://sassy-scss.kasimir.dev/#string-function-str-contains)
  - [str-replace()](https://sassy-scss.kasimir.dev/#string-function-str-replace)
  - [escape-svg()](https://sassy-scss.kasimir.dev/#string-function-escape-svg)
- [typechecking](https://github.com/felix-berlin/sassy-scss/blob/master/functions/_type-checking.scss)
  - [is-number()](https://sassy-scss.kasimir.dev/#type-checking-function-is-number)
  - [is-time()](https://sassy-scss.kasimir.dev/#type-checking-function-is-time)
  - [is-duration()](https://sassy-scss.kasimir.dev/#type-checking-function-is-duration)
  - [is-angle()](https://sassy-scss.kasimir.dev/#type-checking-function-is-angle)
  - [is-frequency()](https://sassy-scss.kasimir.dev/#type-checking-function-is-frequency)
  - [is-integer()](https://sassy-scss.kasimir.dev/#type-checking-function-is-integer)
  - [relative-length()](https://sassy-scss.kasimir.dev/#type-checking-function-is-relative-length)
  - [absolute-length()](https://sassy-scss.kasimir.dev/#type-checking-function-is-absolute-length)
  - [is-percentage()](https://sassy-scss.kasimir.dev/#type-checking-function-is-percentage)
  - [is-length()](https://sassy-scss.kasimir.dev/#type-checking-function-is-length)
  - [is-resolution()](https://sassy-scss.kasimir.dev/#type-checking-function-is-resolution)
  - [is-position()](https://sassy-scss.kasimir.dev/#type-checking-function-is-position)

### Mixins

- [basic](https://github.com/felix-berlin/sassy-scss/blob/master/mixins/_basic.scss)
  - [select-style()](https://sassy-scss.kasimir.dev/#basic-mixin-select-style)
  - [target-anchor-offset()](https://sassy-scss.kasimir.dev/#basic-mixin-target-anchor-offset)
- [breakpoint](https://github.com/felix-berlin/sassy-scss/blob/master/mixins/_breakpoint.scss)
  - [breakpoint()](https://sassy-scss.kasimir.dev/#breakpoint-mixin-breakpoint)
  - [feature()](https://sassy-scss.kasimir.dev/#breakpoint-mixin-feature)
- [element](https://github.com/felix-berlin/sassy-scss/blob/master/mixins/_element.scss)
  - [line-on-sides()](https://sassy-scss.kasimir.dev/#element-mixin-line-on-sides)
  - [overlay()](https://sassy-scss.kasimir.dev/#element-mixin-overlay)
  - [list-style-image()](https://sassy-scss.kasimir.dev/#element-mixin-list-style-image)
- [typo](https://github.com/felix-berlin/sassy-scss/blob/master/mixins/_font.scss)
  - [font-smoothing()](https://sassy-scss.kasimir.dev/#typo-mixin-font-smoothing)
  - [fluid-typo()](https://sassy-scss.kasimir.dev/#typo-mixin-fluid-typo)
  - [icon-font()](https://sassy-scss.kasimir.dev/#typo-mixin-icon-font)
  - [font-face()](https://sassy-scss.kasimir.dev/#typo-mixin-font-face)

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

You can find the documentation at: [https://sassy-scss.kasimir.dev](https://sassy-scssn.kasimir.dev)

> The documentation is updated automatically with each commit on the master branch.

### Build the docs locally

Run following command:
`npm run sassDoc`

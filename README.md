# SASS Butler

> Stands by your side with plenty of features and mixins.

![npm](https://img.shields.io/npm/dm/@felix_berlin/sass-butler?logo=npm&style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@felix_berlin/sass-butler?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/sass-butler?label=github&logo=github&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/felix-berlin/scss-collection/build-docs.yml?label=build%20docs&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/sass-butler/unit-tests.yml?label=unit-tests&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/sass-butler/release.yml?label=release&logo=github&style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/felix-berlin/scss-collection?style=flat-square&logo=github)

> SASS Butler is a big collection of SASS mixins and functions.

Mixins and functions are unit tested via [Jest](https://jestjs.io/) and [True](https://www.oddbird.net/true/).
*Unfortunately, it is [not yet possible](https://github.com/oddbird/true/issues/88) to create a coverage report.*

## Whats inside?

Visit <https://sass-butler.kasimir.dev> for full documentation.

### Functions

- [colors](https://github.com/felix-berlin/sass-butler/blob/master/functions/_colors.scss)
  - [hex-to-rgb-values()](https://sass-butler.kasimir.dev/#color-function-hex-to-rgb-values)
  - [hex-to-rgb()](https://sass-butler.kasimir.dev/#function-hex-to-rgb)
- [converters](https://github.com/felix-berlin/sass-butler/blob/master/functions/_converters.scss)
  - [px-to-rem()](https://sass-butler.kasimir.dev/#converter-function-px-to-rem)
- [lists](https://github.com/felix-berlin/sass-butler/blob/master/functions/_lists.scss)
  - [first-of-list()](https://sass-butler.kasimir.dev/#list-function-first-of-list)
  - [last-of-list()](https://sass-butler.kasimir.dev/#list-function-last-of-list)
- [maps](https://github.com/felix-berlin/sass-butler/blob/master/functions/_maps.scss)
  - [map-collect()](https://sass-butler.kasimir.dev/#map-function-map-collect)
- [numbers](https://github.com/felix-berlin/sass-butler/blob/master/functions/_numbers.scss)
  - [strip-unit()](https://sass-butler.kasimir.dev/#number-function-strip-unit)
  - [number-invert()](https://sass-butler.kasimir.dev/#number-function-number-invert)
  - [random-num()](https://sass-butler.kasimir.dev/#number-function-random-num)
- [strings](https://github.com/felix-berlin/sass-butler/blob/master/functions/_strings.scss)
  - [str-starts-with()](https://sass-butler.kasimir.dev/#string-function-str-starts-with)
  - [str-ends-with()](https://sass-butler.kasimir.dev/#string-function-str-ends-with)
  - [str-contains()](https://sass-butler.kasimir.dev/#string-function-str-contains)
  - [str-replace()](https://sass-butler.kasimir.dev/#string-function-str-replace)
  - [escape-svg()](https://sass-butler.kasimir.dev/#string-function-escape-svg)
- [typechecking](https://github.com/felix-berlin/sass-butler/blob/master/functions/_type-checking.scss)
  - [is-number()](https://sass-butler.kasimir.dev/#type-checking-function-is-number)
  - [is-time()](https://sass-butler.kasimir.dev/#type-checking-function-is-time)
  - [is-duration()](https://sass-butler.kasimir.dev/#type-checking-function-is-duration)
  - [is-angle()](https://sass-butler.kasimir.dev/#type-checking-function-is-angle)
  - [is-frequency()](https://sass-butler.kasimir.dev/#type-checking-function-is-frequency)
  - [is-integer()](https://sass-butler.kasimir.dev/#type-checking-function-is-integer)
  - [relative-length()](https://sass-butler.kasimir.dev/#type-checking-function-is-relative-length)
  - [absolute-length()](https://sass-butler.kasimir.dev/#type-checking-function-is-absolute-length)
  - [is-percentage()](https://sass-butler.kasimir.dev/#type-checking-function-is-percentage)
  - [is-length()](https://sass-butler.kasimir.dev/#type-checking-function-is-length)
  - [is-resolution()](https://sass-butler.kasimir.dev/#type-checking-function-is-resolution)
  - [is-position()](https://sass-butler.kasimir.dev/#type-checking-function-is-position)

### Mixins

- [basic](https://github.com/felix-berlin/sass-butler/blob/master/mixins/_basic.scss)
  - [select-style()](https://sass-butler.kasimir.dev/#basic-mixin-select-style)
  - [target-anchor-offset()](https://sass-butler.kasimir.dev/#basic-mixin-target-anchor-offset)
- [@media](https://github.com/felix-berlin/sass-butler/blob/master/mixins/_breakpoint.scss)
  - [breakpoint()](https://sass-butler.kasimir.dev/#@media-mixin-breakpoint)
  - [dark-mode-class()](https://sass-butler.kasimir.dev/#@media-mixin-dark-mode-class)
  - [feature()](https://sass-butler.kasimir.dev/#@media-mixin-feature)
  - [hover](https://sass-butler.kasimir.dev/#@media-mixin-hover)
- [element](https://github.com/felix-berlin/sass-butler/blob/master/mixins/_element.scss)
  - [line-on-sides()](https://sass-butler.kasimir.dev/#element-mixin-line-on-sides)
  - [overlay()](https://sass-butler.kasimir.dev/#element-mixin-overlay)
  - [list-style-image()](https://sass-butler.kasimir.dev/#element-mixin-list-style-image)
- [typo](https://github.com/felix-berlin/sass-butler/blob/master/mixins/_font.scss)
  - [font-smoothing()](https://sass-butler.kasimir.dev/#typo-mixin-font-smoothing)
  - [fluid-typo()](https://sass-butler.kasimir.dev/#typo-mixin-fluid-typo)
  - [icon-font()](https://sass-butler.kasimir.dev/#typo-mixin-icon-font)
  - [font-face()](https://sass-butler.kasimir.dev/#typo-mixin-font-face)

## Installation

```bash
pnpm add @felix_berlin/sass-butler

npm i @felix_berlin/sass-butler

yarn add @felix_berlin/sass-butler
```

If you haven't already, install Sass.

```bash
pnpm add -D sass

npm i -D sass

yarn add -D sass
```

## Requirements

This project uses the "new" [Sass Module system](https://sass-lang.com/blog/the-module-system-is-launched). Therefore your build tool or taskrunner have to support **Dart Sass 1.33.0** or above.

### <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="50"> Sass support

| Sass Compiler | Support |
| ------------- | ------- |
| Dart Sass     | ✅       |
| Lib Sass      | ❌       |
| Ruby Sass     | ⚰️       |

### Version support

Your Dart Sass Version must be: >= 1.33.0

## Usage

### Import all at once or all individually

Single import of the used functionalities.

```scss
@use './node_modules/sass-butler/functions/first-of-list' as fol;
```

import all functions at once:

```scss
@use './node_modules/sass-butler/functions' as fn;
```

### How to import

```scss
@use './node_modules/sass-butler/mixis/breakpoint' as breakpoint;
```

With `sass-loader`:

```scss
@use '~sass-butler/mixis/breakpoint' as breakpoint;
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
@use 'sass-butler/mixis/breakpoint' as breakpoint;
```

### Override module config

Some of the module comes with "global" config vars and maps (breakpoint mixin). This may be a problem since you can only overwrite once with `with()`.
Here is an example how you can deal with it.

#### Redefine mixin or function default configs

**Example how to use the breakpoint mixin with own default config:**

Create a new file and load the breakpoint mixin from the `node_modules` with the `@forward` function. Similar to the `@use` function you can overwrite predefined vars with `with()`.

```scss
// _custom-breakpoints.scss

@forward 'sass-butler/mixins/breakpoint' with (
  // Add your own breakpoints map
  $breakpoints: (
    'xxs': 375px,
    'xs': 568px,
    'sm': 768px,
    'md': 1024px,
    'lg': 1260px,
    'xlg': 1440px,
    'fhd': 1920px,
    'uhd': 2560px
  )
);
```

In the rest of your project you don't add the module via `node_modules` anymore but load the customized module `_external.scss` with `@use`.

```scss
// _my-module.scss

@use 'custom-breakpoints' as break;

.my-selector {
  @include break.breakpoint(lg) {
    padding: 12px 0 1rem 0;
  }
}
```

> :warning: **Pay attention to the loading order** when using redefined and package function/mixins!

:x: **Can't be compiled** because the (package) breakpoint mixin is already loaded in ``mixins.scss``.

```scss
@use 'sass-butler/mixins' as mx;
@use 'custom-breakpoints' as break;
```

:white_check_mark: **This will work.** Make sure to load the redefined module first.

```scss
@use 'custom-breakpoints' as break;
@use 'sass-butler/mixins' as mx;
```

## Documentation

You can find the documentation at: [https://sass-butler.kasimir.dev](https://sass-butler.kasimir.dev)

> The documentation is updated automatically with each commit on the master branch.

### Build the docs locally

Run following command:
`npm run sassDoc`

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# SCSS Collection

> A collection of useful SCSS mixins and functions

## Installation

```
npm install https://github.com/felix-berlin/scss-collection (#commit, #branch or #(release)tag)
```

I recommend to use release tags.

## Requirements

This project uses the "new" [Sass Module system](https://sass-lang.com/blog/the-module-system-is-launched). Therefore your build tool or taskrunner have to support Dart Sass 1.23.0 or above.

## Usage

### Override Module Config

Some of the module comes with "global" config vars and maps (breakpoint mixin). This may be a problem since you can only overwrite once with `with()`.
Here is an example how you can deal with it:

Create a new file and load the breakpoint mixin from the `node_modules` with the `@forward` function. Similar to the `@use` function you can overwrite predefined vars with `with()`.

```
  _external.scss

  // Add your own breakpoints
  @forward '@felix-berlin/scss-collection/mixins/breakpoint' with ($lg: 1200px);
```

In the rest of your project you don't add the module via `node_modules` anymore but load the customized module `_external.scss` with `@use`.

```
  _my-module.scss

  @use external as breakpoint;

  .my-selector {

    // lg === 1200px not 1260px
    @include breakpoint(lg) {
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

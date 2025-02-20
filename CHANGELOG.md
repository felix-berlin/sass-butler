# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0](https://github.com/felix-berlin/sass-butler/compare/v3.0.1...v3.1.0) (2024-12-13)


### Features

* upgrade to new sass colors functions ([b624ef8](https://github.com/felix-berlin/sass-butler/commit/b624ef817852482b58fde8eed9312eb5229f7774))

## [3.0.1](https://github.com/felix-berlin/sass-butler/compare/v3.0.0...v3.0.1) (2024-01-15)


### Bug Fixes

* json syntax error ([b8411d0](https://github.com/felix-berlin/sass-butler/commit/b8411d04f0624772b7f24925a1bded12ca2ed579))
* remove only allow pnpm ([59356d2](https://github.com/felix-berlin/sass-butler/commit/59356d2d1efd3d2a7e97a06f21d882ea44865d27))

# [3.0.0](https://github.com/felix-berlin/sass-butler/compare/v2.6.3...v3.0.0) (2024-01-07)


### Code Refactoring

* **dark-mode-class:** rewrite of the mixin ([49f2a29](https://github.com/felix-berlin/sass-butler/commit/49f2a292abe1cb724e8c10a311fa1659708ea643))


### BREAKING CHANGES

* **dark-mode-class:** the complete dark-mode-class mixin api has changes (see docs)

## [2.6.3](https://github.com/felix-berlin/sass-butler/compare/v2.6.2...v2.6.3) (2023-11-25)


### Bug Fixes

* **generate-color-shades:** color order ([6baa27d](https://github.com/felix-berlin/sass-butler/commit/6baa27d94475430c619630ad7fdc3ae223f7efd8))

## [2.6.2](https://github.com/felix-berlin/sass-butler/compare/v2.6.1...v2.6.2) (2023-11-25)


### Bug Fixes

* **generate-color-shades:** no more duplicated colors ([561b527](https://github.com/felix-berlin/sass-butler/commit/561b5270a17fc6cea3add51b37b0a8640c0354e4))

## [2.6.1](https://github.com/felix-berlin/sass-butler/compare/v2.6.0...v2.6.1) (2023-11-25)


### Bug Fixes

* **generate-color-shades:** bright colors now start with the smaller numbers ([76f09d2](https://github.com/felix-berlin/sass-butler/commit/76f09d25aefa39a26b87e72931c9fc7137bb3d02))

# [2.6.0](https://github.com/felix-berlin/sass-butler/compare/v2.5.3...v2.6.0) (2023-08-27)


### Bug Fixes

* updated lock file ([c1ef6de](https://github.com/felix-berlin/sass-butler/commit/c1ef6de3c6711060878acd15308b731a802ac5a1))


### Features

* replaced the throw.error function by an own to not have to use sass-true as prod-dependency ([8a0b9fd](https://github.com/felix-berlin/sass-butler/commit/8a0b9fd3bc683e1095abfa16c46b1e91939af540))

## [2.5.3](https://github.com/felix-berlin/sass-butler/compare/v2.5.2...v2.5.3) (2023-08-26)


### Bug Fixes

* add sass-true as dependency (cant import throw) ([f93fb6e](https://github.com/felix-berlin/sass-butler/commit/f93fb6e548ec704efdba663e088bdc6276ac37f2))

## [2.5.2](https://github.com/felix-berlin/sass-butler/compare/v2.5.1...v2.5.2) (2023-08-26)


### Bug Fixes

* broken import of throw ([9886e40](https://github.com/felix-berlin/sass-butler/commit/9886e4072f1d5f1c78a133ad9c1e945a1a99bbf0))

## [2.5.1](https://github.com/felix-berlin/sass-butler/compare/v2.5.0...v2.5.1) (2023-08-26)


### Bug Fixes

* **generate-mixed-colors:** doc block throws sassdoc error ([5a7bb7c](https://github.com/felix-berlin/sass-butler/commit/5a7bb7cfcbc738bec6633d752ff18dc24e4696c7))

# [2.5.0](https://github.com/felix-berlin/sass-butler/compare/v2.4.0...v2.5.0) (2023-08-26)


### Bug Fixes

* **generate-mixed-colors:** lint errors, write code in sass module style ([9d7f298](https://github.com/felix-berlin/sass-butler/commit/9d7f298983966524f84db93c8da257fe68badf12))


### Features

* add generate-mixed-colors function ([71c0492](https://github.com/felix-berlin/sass-butler/commit/71c04926e02c017b68d2665abd42f2492732e564))

# [2.4.0](https://github.com/felix-berlin/sass-butler/compare/v2.3.0...v2.4.0) (2023-08-22)


### Features

* add generate-color-shades function ([b746e82](https://github.com/felix-berlin/sass-butler/commit/b746e821c11641ff42772ff469a69d50ffe429fb))

# [2.3.0](https://github.com/felix-berlin/sass-butler/compare/v2.2.0...v2.3.0) (2023-05-20)


### Features

* add round and fluid (typo) function ([4ab15ee](https://github.com/felix-berlin/sass-butler/commit/4ab15ee06e77df059b2c68e653030739d749f3c1))

# [2.2.0](https://github.com/felix-berlin/sass-butler/compare/v2.1.0...v2.2.0) (2023-04-01)


### Features

* **media queries:** with new range syntax ([a0a8a41](https://github.com/felix-berlin/sass-butler/commit/a0a8a41298aa659d7c4e740ec2f54135a4d8d526))

# [2.1.0](https://github.com/felix-berlin/sass-butler/compare/v2.0.2...v2.1.0) (2023-03-31)


### Features

* **breakpoint:** max-overlap now decides independently what the default value is ([3ba6314](https://github.com/felix-berlin/sass-butler/commit/3ba631492a2297a1ba4615666acf0a1eaaeaa960))

## [2.0.2](https://github.com/felix-berlin/sass-butler/compare/v2.0.1...v2.0.2) (2023-03-31)


### Bug Fixes

* missing comma ([0c00751](https://github.com/felix-berlin/sass-butler/commit/0c0075192da6c32a4e9fce7bc550e374f9f5aad2))

## [2.0.1](https://github.com/felix-berlin/sass-butler/compare/v2.0.0...v2.0.1) (2023-03-31)


### Bug Fixes

* **deps:** upgrade to stylelint 15 and fix lint errors ([7de1a7f](https://github.com/felix-berlin/sass-butler/commit/7de1a7feb94f572cc45c791cc4f459c7266b4938))

# [2.0.0](https://github.com/felix-berlin/sass-butler/compare/v1.10.5...v2.0.0) (2022-11-05)


### Features

* **font-smooting:** detect retina display via breakpoint ([c7b6c4e](https://github.com/felix-berlin/sass-butler/commit/c7b6c4e72f1fa3dbce326f688a8fc7fb05bd0d7f))


### BREAKING CHANGES

* **font-smooting:** the $antialiased param is removed; @media query now makes the condition

## [1.10.5](https://github.com/felix-berlin/sass-butler/compare/v1.10.4...v1.10.5) (2022-09-23)


### Bug Fixes

* **deps:** update dependency sass to v1.55.0 ([b3f91b0](https://github.com/felix-berlin/sass-butler/commit/b3f91b00fa02f00a0e21c13eded16eee89ac5ed3))

## [1.10.4](https://github.com/felix-berlin/sass-butler/compare/v1.10.3...v1.10.4) (2022-09-19)


### Bug Fixes

* **dark-mode-class:** Top-level selectors may not contain the parent selector "&" ([07f234d](https://github.com/felix-berlin/sass-butler/commit/07f234d1fef72137398d83320311d7627b1155c2))

## [1.10.3](https://github.com/felix-berlin/sass-butler/compare/v1.10.2...v1.10.3) (2022-09-08)


### Bug Fixes

* **deps:** update dependency sass to v1.54.9 ([15cfd9b](https://github.com/felix-berlin/sass-butler/commit/15cfd9b40d1dd3e0ac8ae21f3280fc3a6026d1e0))

## [1.10.2](https://github.com/felix-berlin/sass-butler/compare/v1.10.1...v1.10.2) (2022-09-02)


### Bug Fixes

* **deps:** update dependency sass to v1.54.8 ([dd524c0](https://github.com/felix-berlin/sass-butler/commit/dd524c0074e96dc17b93077bf20f2d7843ba2e49))

## [1.10.1](https://github.com/felix-berlin/sass-butler/compare/v1.10.0...v1.10.1) (2022-08-20)


### Bug Fixes

* dark-mode-class class selector ([e29bb23](https://github.com/felix-berlin/sass-butler/commit/e29bb239055a927e7dd9fce25487af8f779c9ae8))

# [1.10.0](https://github.com/felix-berlin/sass-butler/compare/v1.9.2...v1.10.0) (2022-08-20)


### Bug Fixes

* add hover to mixin main file ([1fd839e](https://github.com/felix-berlin/sass-butler/commit/1fd839efb1ca6045d126a82ff36afaae67f56eac))


### Features

* add dark-mode-class mixin ([b3609f0](https://github.com/felix-berlin/sass-butler/commit/b3609f08236a15cb60b00117dc10e912b2264fe1))

## [1.9.2](https://github.com/felix-berlin/sass-butler/compare/v1.9.1...v1.9.2) (2022-08-20)


### Bug Fixes

* **deps:** update dependency sass to v1.54.5 ([e9addbc](https://github.com/felix-berlin/sass-butler/commit/e9addbc342a869abe45f3b9612ff149e13bfcfbd))

## [1.9.1](https://github.com/felix-berlin/sass-butler/compare/v1.9.0...v1.9.1) (2022-08-08)


### Bug Fixes

* doc block ([6ed1163](https://github.com/felix-berlin/sass-butler/commit/6ed11631e6eb52dc6eddb8c6e31adc1a05541771))

# [1.9.0](https://github.com/felix-berlin/sass-butler/compare/v1.8.1...v1.9.0) (2022-08-08)


### Features

* basic implementation of hover mixin ([62ec3c1](https://github.com/felix-berlin/sass-butler/commit/62ec3c124e64ac6059db9d5fa2ec24ae3e598ab4))

## [1.8.1](https://github.com/felix-berlin/sass-butler/compare/v1.8.0...v1.8.1) (2022-08-08)

### Bug Fixes

* devidate with math.div ([27c236c](https://github.com/felix-berlin/sass-butler/commit/27c236cf72306c1ff393afa84e8de4fdebd675cd))

# [1.8.0](https://github.com/felix-berlin/sass-butler/compare/v1.7.5...v1.8.0) (2022-08-07)

### Bug Fixes

* target-anchor-offset no namespace for invert func ([c9c3086](https://github.com/felix-berlin/sass-butler/commit/c9c30868e93cf70efd260103ab32db7819f1ad28))

### Features

* select-style & target-anchor-offset able to set own content ([9a7c6d2](https://github.com/felix-berlin/sass-butler/commit/9a7c6d2cf60744ae71f8114302b72c38c1e9465b))

## [1.7.5](https://github.com/felix-berlin/sass-butler/compare/v1.7.4...v1.7.5) (2022-08-06)

### Bug Fixes

* author for invert number ([2780144](https://github.com/felix-berlin/sass-butler/commit/2780144950bfa3f9f5ec25ad121b805c3e312931))

## [1.7.4](https://github.com/felix-berlin/sass-butler/compare/v1.7.3...v1.7.4) (2022-06-26)

### Bug Fixes

* double h1 in CHANGELOG ([2476134](https://github.com/felix-berlin/sass-butler/commit/2476134c1860bb6c246325ef889642fcd809f659))

## [1.7.3](https://github.com/felix-berlin/sass-butler/compare/v1.7.2...v1.7.3) (2022-06-26)

### Bug Fixes

* typo ([45090b1](https://github.com/felix-berlin/sass-butler/commit/45090b1acd634effd62b088efe74e6215412d2ff))

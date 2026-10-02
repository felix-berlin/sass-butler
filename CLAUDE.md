# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@felix_berlin/sass-butler`: a library of SCSS functions, mixins and helpers, consumed by other projects via `@use`. There is no build step and no runtime JS; Node tooling exists only for tests, lint, docs and releases. Requires Node >= 22 and pnpm (version pinned in `packageManager`).

## Commands

```bash
pnpm test                                        # vitest run (all *.spec.scss via sass-true)
pnpm test:watch
pnpm exec vitest run -t "breakpoint()"           # filter by describe/it name (there is only one JS spec file)
pnpm lint                                        # stylelint "**/*.{sass,scss}"
pnpm lint:fix
pnpm test:output                                 # compile tests/tests.scss -> tests/dist/tests.css (manual visual check, gitignored)
pnpm sassDoc                                     # regenerates docs/ (see gotcha below)
```

Commits must follow Conventional Commits (husky `commit-msg` runs commitlint; `pre-commit` runs lint). Releases are fully automated by semantic-release on `master` (`.releaserc`), which also writes `CHANGELOG.md` and bumps `package.json`; do not edit either by hand.

## Architecture

- `functions/`, `mixins/`, `helpers/` each have an `_index.scss` that `@forward`s every partial. **A new partial is only public once added to its `_index.scss`.** `variables/` is separate and has a single partial.
- Consumers `@use` a whole folder (`@use '../functions' as fn`), so partials are namespaced by the consumer, not by this library.
- `helpers/_error.scss` `error()` is the shared error path. It returns an `'ERROR: …'` string instead of calling `@error` when `$catch` is true. `$catch` defaults to the `$is-test` module variable (`!default`, declared in `helpers/_error.scss` and again in `functions/_colors.scss`). Tests configure it with `@use '../functions' as fn with ($is-test: true)` so that error cases can be asserted with `true.assert-equal` instead of aborting compilation. New functions that validate input should call `helpers.error(..., $catch: $is-test)` the same way.
- Docs are SassDoc comments (`///`) in `functions/` and `mixins/` only. `docs/` is generated from them and deployed to the `docs` branch by `.github/workflows/build-docs.yml`. The README function/mixin lists are maintained by hand.

## Tests

`tests/scss.spec.js` globs `tests/**/*.spec.scss` and feeds each file to `sass-true`'s `runSass` with vitest's `describe`/`it`. To add a test, create `tests/<name>.spec.scss` with `@use 'true'` (`true.describe` / `true.it` / `true.assert-equal`); no JS changes are needed. `tests/tests.scss` is a separate scratch file for eyeballing compiled output, not part of the suite.

## Gotchas

- `pnpm sassDoc` rewrites the tracked `docs/` folder (including deleting `docs/CNAME` and rewriting `index.html`, `main.css`). Revert with `git checkout -- docs` unless doc output is the point of the change.
- `.stylelintrc.json` uses `postcss-scss` syntax; the exact-float expectations in `tests/colors-generate-mixed-colors.spec.scss` need the `number-max-precision` disable at the top of that file.
- `peerDependencies.sass` is `>=1.95.0` because the code uses the newer CSS-style `if(sass(...): …; else: …)` syntax; `devDependencies.sass` is pinned exactly.
- pnpm 11+ blocks dependency build scripts unless listed in `pnpm-workspace.yaml` (`allowBuilds`), and refuses packages younger than 24h (`minimumReleaseAge`); a fresh install can fail on either.
- `.github/workflows/test-coveralls.yml` calls a nonexistent `make test-coverage` and is already broken. Coverage is not available for SCSS tests (see README).

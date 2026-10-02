import path from 'node:path';
import { globSync } from 'glob';
import { describe, it } from 'vitest';
import sassTrue from 'sass-true';

describe('Sass', () => {
  // Find all of the Sass files that end in `*.spec.scss` in any directory of this project.
  // True requires absolute paths to compile test files.
  const sassTestFiles = globSync('tests/**/*.spec.scss').map(file => path.resolve(file));

  // Run True on every file found with the describe and it methods provided
  sassTestFiles.forEach(file => sassTrue.runSass({ describe, it }, file));
});

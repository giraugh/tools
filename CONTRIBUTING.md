# Contributing Guide

If you find an issue or want to request a feature, please [create an issue](https://github.com/giraugh/tools/issues/new/choose).

## Project Structure

The code for all tools is located under `./lib`. They are sorted into relevant folders and each tool lives in it's own file with detailed TSDocs and inline tests.

Each subfolder in `./lib` contains a barrel file that re-exports the tools, which are then all re-exported through `./lib/main.ts`.

## Development

After cloning the repo, run `yarn` to install dependencies, then you can use `yarn build` to bundle the code and types to `./dist`.

Add new tools under a relevant subfolder in `./lib`, each tool should be in it's own file. Don't forget to re-export tools from `./lib/main.ts`.

## Testing

You can add tests for a tool using [in-source testing](https://vitest.dev/guide/in-source.html) with vitest. Run `yarn test` to check that they all pass.

## Git Conventions

### Branches

🏠 `main`
Production branch. Do not commit directly to this branch.

✨ `feat/branch`
Prefix new feature branches with feat. When complete, submit a PR into main.

🔧 `fix/branch`
When fixing a bug, prefix branches with bug. When complete, submit a PR into main.

🔮 `refactor/branch`
For refactoring code. When complete, submit a PR into main.

🧹 `chore/branch`
For chores like adding type checking, adding README text, fixing typos etc. When finished, submit a PR into main.

### Pull Requests

If your PR will close or fix an existing issue, be sure to mention the issue you are closing at the top of your PR like so:

```
Closes #6

[describe your PR...]
```

Make sure the title and body of the PR are descriptive.

## Releases

This library uses [changesets](https://github.com/changesets/changesets), if the changes you've made would constitute a version bump, run `yarn changeset` and follow the prompts to document the changes you've made. Changesets are consumed on releases, and used to generate a changelog and bump version number.

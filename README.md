# iFixit React Components

A set of reusable React components built on top of [Chakra](https://chakra-ui.com).

## Getting Started

Visit [LINK TO STORYBOOK](#getting-started)

## Documentation

Visit [LINK TO STORYBOOK](#)

## Contributing

### Development setup

```sh
# Install dependencies
npm install

# Start storybook
npm run storybook
```

### Commit message format

This repo adheres to the [Conventional Commits Specification](https://www.conventionalcommits.org/) for commit messages.

The commits are structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

For example, a simple commit for adding a feature looks like this:

```
feat(Pagination): Add pagination components
```

#### Type

-  **feat**: A new feature
-  **fix**: A bug fix
-  **refactor**: A code change that neither fixes a bug nor adds a feature
-  **docs**: Documentation only changes
-  **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-  **perf**: A code change that improves performance
-  **test**: Adding missing or correcting existing tests
-  **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
-  **build**: Changes that affect the build system or external dependencies
-  **ci**: Change to our CI configuration file and scripts

#### Scope

The scope could be anything specifying place of the commit change. For example Icon, Tab, SearchInput, etc...

Remember that scope is entirely optional. Only include a scope if the commit message doesn't stand on it's own outside the context of a pull request.

#### Description

The description contains succinct explanation of the change:

Use the imperative, present tense: "Change" not "Changed" nor "Changes".

Use sentence case: "Some message" not "some message" nor "Some Message".

Do not include a dot (.) at the end.

| Commit message                                                       | Release type     |
| -------------------------------------------------------------------- | ---------------- |
| `fix(Pencil): Stop graphite breaking when too much pressure applied` | Patch Release    |
| `feat(Pencil): Add 'graphiteWidth' option`                           | Feature Release  |
| `BREAKING CHANGE: The graphiteWidth option has been removed`         | Breaking Release |

### Continuous Integration

Package release is automated via Github Actions.

#### Bump version

The `ci` workflow will perform the following tasks:

-  Lint and build the package to see if it compiles
-  Based on the commit messages, increment the version from the latest release.
   -  If the string `BREAKING CHANGE`, `major` or the Attention pattern `refactor!: drop support for Node 6` is found anywhere in any of the commit messages or descriptions the major version will be incremented.
   -  If a commit message begins with the string `feat` or includes `minor` then the minor version will be increased. This works for most common commit metadata for feature additions: `feat: new API` and `feature: new API`.
   -  If a commit message contains the word "pre-alpha" or "pre-beta" or "pre-rc" then the pre-release version will be increased (for example specifying pre-alpha: 1.6.0-alpha.1 -> 1.6.0-alpha.2 or, specifying pre-beta: 1.6.0-alpha.1 -> 1.6.0-beta.0)
   -  All other changes will increment the patch version.
-  Push the bumped npm version in package.json back into the repo.
-  Push a tag for the new version back into the repo.

#### Publish on NPM

The `npm-publish` workflow will publish the package to NPM when a Github Release is created.

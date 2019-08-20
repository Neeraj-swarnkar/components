<h1 align='center' style='border-bottom: none;'>Webex Components</h1>
<h3 align='center'>Library of React components to easily embed into your web applications!</h3>
<p align='center'>
<a href='https://circleci.com/gh/webex/components'>
    <img alt='CircleCI' src='https://circleci.com/gh/webex/components.svg?style=shield'>
  </a>
  <a href='https://www.npmjs.com/package/@webex/components'>
    <img alt='npm latest version' src='https://img.shields.io/npm/v/@webex/components?label=npm%40latest'>
  </a>
  <a href='#badge'>
    <img alt='semantic-release' src='https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg'>
  </a>
  <a href='https://github.com/webex/components/blob/master/package.json#L28'>
    <img src='https://img.shields.io/npm/l/webex.svg' alt='license'>
  </a>
</p>

**Webex Components** is a set of [React](https://reactjs.org) components following Webex standard styling, aimed at react developers that want to embed the components into their applications.


## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Team](#team)

## Install

```bash
npm install --save @webex/components @momentum-ui/react
```

## Usage
**Webex Components** are built with [Momentum UI](https://github.com/momentum-design/momentum-ui) React components. We need to externally import all the fonts, icons, images and core *CSS* manually. There are two ways to do this:

### 1. CSS
1. Copy the `@momentum-ui/core/fonts` directory to the 'fonts' directory for your site.
2. Copy the `@momentum-ui/core/images` directory to the 'images' directory for your site.
3. Copy the `@momentum-ui/core/css/momentum-ui.min.css` to your styles/css directory.
4. In the `<head>`, of your HTML reference the location of your momentum-ui.min.css:

    `<link rel='stylesheet' href='path/to/momentum-ui/css/momentum-ui.min.css'>`

***
### 2. SCSS
1. Add `$brand-font-folder` and `$icon-font-path` variables to the top of your app's Sass file.


    ```scss
    $brand-font-folder: "~@momentum-ui/core/fonts";
    $icon-font-path: "~@momentum-ui/icons/fonts";
    ```

2. Import `@momentum-ui/core/scss/momentum-ui-components` into your main entry Sass file AFTER the variables.

    ```scss
    @import "~@momentum-ui/core/scss/momentum-ui-components";
    ```

3. Compile Sass files using your static compiler or bundler (Webpack, Grunt, Gulp, etc.)
***

Once Momentum styles have been imported into your project, you can start using the components. For example:

  ```js
  import {WebexAvatar} from '@webex/components';

  function App() {
    return (
      <div className='App'>
        <WebexAvatar title='Webex Avatar' />
      </div>
    );
  }

  export default App;
  ```

*Happy Coding!*

## Contributing
We'd love for you to contribute to our source code and to make **Webex Components** even better than it is today! Here are some [guidelines](https://github.com/webex/components/blob/master/CONTRIBUTING.md) that we'd like you to follow.

### Issues
Please open an [issue](https://github.com/webex/components/issues) and we will get to it in an orderly manner.
Please leave as much as information as possible for a better understanding.
### Contributing Code
We are using [Webex Style Guide eslint rule](https://github.com/webex/web-styleguide/tree/master/packages/node_modules/%40webex/eslint-config-react) and [prettier](https://github.com/prettier/prettier) to lint the code style.
You can "prettify" your code before committing via:

  ```bash
  npm run prettier:write
  ```

### Release Process
There is a list of commit types provided [here](https://github.com/webex/components/blob/master/CONTRIBUTING.md#type). However, not all commits trigger our release process.
We are using [semantic-release](https://github.com/semantic-release/semantic-release) to fully automate the version management and package publishing.
By default `semantic-release` uses the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) and triggers release and publishing based on the following rules:

|Commit|Release type|
|------|------------|
|Commit with type `BREAKING CHANGE` | Major release|
|Commit with type `feat`| Minor release|
|Commit with type `fix` | Patch release|
|Commit with type `perf`| Patch release|

#### Commit linter
We are using [commitlint](https://github.com/conventional-changelog/commitlint) to lintify the commit messages.
Please make sure to choose the appropriate commit [type](https://github.com/webex/components/blob/master/CONTRIBUTING.md#type), [scope](https://github.com/webex/components/blob/master/CONTRIBUTING.md#scope) and [subject](https://github.com/webex/components/blob/master/CONTRIBUTING.md#scope).

## License

[MIT License](https://opensource.org/licenses/MIT)

## Support
For more developer resources, tutorials and support, visit the Webex developer portal, https://developer.webex.com.

## Team
| [![Adam Weeks](https://github.com/adamweeks.png?size=100)](https://github.com/adamweeks)| [![Arash Koushkebaghi](https://github.com/akoushke.png?size=100)](https://github.com/akoushke)| [![Lalli Flores](https://github.com/lalli-flores.png?size=100)](https://github.com/lalli-flores)| [![Timothy Scheuering](https://github.com/InteractiveTimmy.png?size=100)](https://github.com/InteractiveTimmy)|[![David Hoff](https://github.com/harborhoffer.png?size=100)](https://github.com/harborhoffer)
|-----|-----|-----|-----|----|
|[Adam Weeks](https://github.com/adamweeks)|[Arash Koushkebaghi](https://github.com/akoushke)|[Lalli Flores](https://github.com/lalli-flores) | [Timothy Scheuering](https://github.com/InteractiveTimmy) | [David Hoff](https://github.com/harborhoffer)
- [ESLint](https://eslint.org/) is an open-source JavaScript linting utility.
- [Prettier](https://prettier.io/) is an opinionated code formatter.

[toc]

## Installation

Create a Vue project and install the packages.

```zsh
pnpm create vite vue-3-demo -- --template vue
cd vue-3-demo
pnpm i -D eslint eslint-config-prettier eslint-plugin-vue prettier
```

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
- [prettier](https://www.npmjs.com/package/prettier)

## Configuration

1. Create `.eslintrc.js` in the root. Here I will extend the [officially recommended rules](https://v3.vuejs.org/style-guide/#priority-c-recommended) and prettier. You can also configure the rules from [ESLint](https://eslint.org/docs/user-guide/configuring/rules#using-configuration-files) or [Vue](https://eslint.vuejs.org/rules/) if you want.

<<< @/../.eslintrc.js

2. Create `.prettierrc.js` in the root. Override the default [options](https://prettier.io/docs/en/options.html) here.

<<< @/../.prettierrc.js

## Tips

This is for [VSCode](https://code.visualstudio.com/) users:

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Files](https://marketplace.visualstudio.com/items?itemName=jbockle.jbockle-format-files) extensions. <kbd>Ctrl</kbd>+<kbd>P</kbd> and paste these:

```
ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode
ext install jbockle.jbockle-format-files
```

2. Turn on the `formatOnSave` setting.

```json
"editor.formatOnSave": true
```

3. Run `Start Format Files: Workspace` and enjoy pretty code.

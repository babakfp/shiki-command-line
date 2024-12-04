[![NPM version](https://img.shields.io/npm/v/shiki-command-line?style=for-the-badge&label=NPM&color=%23cb0000)](https://www.npmjs.com/package/shiki-command-line "View on NPM")

# Shiki Command Line

A highlighter built with Shiki for the command line.

-   📦 [NPM](https://www.npmjs.com/package/shiki-command-line)
-   😺 [GitHub](https://github.com/babakfp/shiki-command-line)
-   🪵 [CHANGELOG](/CHANGELOG.md)

## Install

```bash
pnpm add shiki-command-line
```

## Usage

```js
import { highlightCode } from "shiki-command-line"
```

---

```js
console.log(
    await highlightCode("<div>Hello, World!</div>", {
        lang: "html",
        theme: "github-dark-default",
    }),
)
```

![](/assets/html.png)

---

```js
console.log(
    await highlightCode(
        `body {
    content: "Hello, World!";
}`,
        {
            lang: "css",
            theme: "github-dark-default",
        },
    ),
)
```

![](/assets/css.png)

---

```js
console.log(
    await highlightCode('console.log("Hello, World!")', {
        lang: "js",
        theme: "github-dark-default",
    }),
)
```

![](/assets/js.png)

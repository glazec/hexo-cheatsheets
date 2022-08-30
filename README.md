# Hexo Cheatsheets Theme
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/glaze/cheatsheets)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e1cb0c0d-0fb7-47d5-a80a-7a991c5ee8b5/deploy-status)](https://cheatsheetspreview.netlify.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/03fde2aadd09496690780e70470e4fa1)](https://www.codacy.com/manual/luyiping1011/hexo-cheatsheets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=glazec/hexo-cheatsheets&amp;utm_campaign=Badge_Grade)
[![CodeFactor](https://www.codefactor.io/repository/github/glazec/hexo-cheatsheets/badge)](https://www.codefactor.io/repository/github/glazec/hexo-cheatsheets)

A new **cheatsheets** theme for Hexo.
The design is from [devhints](http://devhints.io)

- [Preview](http://cheatsheets.inevitable.tech)
- [A post about it](https://www.inevitable.tech/posts/59f1905d/)

## Installation

### Install

```bash
$ git clone https://github.com/glazec/hexo-cheatsheets.git
```

### Enable

Modify `theme` setting in `_config.yml` to `hexo-cheatsheets`.

Disable default code highlight plugin in `_config.yml`.

```yml
highlight:
  enable: false
```

### Update

```bash
cd themes/hexo-cheatsheets
git pull
```

## Configuration

```yml
favicon: "favicon url"
github: "the link the github button point to"
githubToolTip: "Text displayed when hovering on the github button"
recommend:
  enable: true # whether to open the top
```

## Writing

### Code

when using tht code block in the markdown, please write the language. Otherwise the highlight will not work.
The following example is correct.(Please **omit** the last dot, thant is a render issue)

```markdown
```yml
favicon: "favicon url"
github: "the link the github button point to"
githubToolTip: "Text displayed when hovering on the github button"
```·
```

### Three Columns

````markdown
### Three Columns

```bash
cd themes/hexo-cheatsheets
git pull
```
````

### Two Columns

````markdown
#### Two Columns

```bash
cd themes/hexo-cheatsheets
git pull
```
````

### Single Column

````markdown
##### Single Columns

```bash
cd themes/hexo-cheatsheets
git pull
```
````

### Secondary Title

````markdown
### Three Columns

```bash
cd themes/hexo-cheatsheets
git pull
```

###### Secondary Title

```bash
cd themes/hexo-cheatsheets
git pull
```
````

### Captions & URL

````markdown
### Three Columns

```bash
cd themes/hexo-cheatsheets
git pull
```
Hexo [Cheatsheets](https://github.com/glazec/hexo-cheatsheets) Theme 

```bash
cd themes/hexo-cheatsheets
git pull
```
> [Cheatsheets](https://github.com/glazec/hexo-cheatsheets)
````

### Introduction List

```markdown
###  References

1. [Hexo](https://hexo.io/) _(hexo.io)_

2. [Hexo Cheatsheets](https://github.com/glazec/hexo-cheatsheets) _(hexo-cheatsheets)_
```

> Must be an ordered list !

### Table & Headless Table 

```markdown
### Table

| Shortcut | Description         |
| -------- | ------------------- |
| `⌘\`     | Toggle tree         |
| `⌘⇧\`    | Reveal current file |

### Headless Table

|          |                     |
| -------- | ------------------- |
| `⌘\`     | Toggle tree         |
| `⌘⇧\`    | Reveal current file |
```

## Roadmap

[![IMAGE ALT TEXT HERE](https://www.inevitable.tech/roadmap.png)](https://coda.io/d/User-Feedback_ddjgAWpgIbG)

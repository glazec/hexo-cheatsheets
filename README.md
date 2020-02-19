# Hexo Cheatsheets Theme

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

### Update

```bash
cd themes/landscape
git pull
```

## Configuration

```yml
favicon: "favicon url"
github: "the link the github button point to"
githubToolTip: "Text displayed when hovering on the github button"
```

## Writing

when using tht code block in the markdown, please write the language. Otherwise the highlight will not work.
The following example is correct.(Please **omit** the last dot, thant is a render issue)

```
```yml
favicon: "favicon url"
github: "the link the github button point to"
githubToolTip: "Text displayed when hovering on the github button"
```·


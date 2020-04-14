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

## Roadmap
<iframe src="https://coda.io/embed/djgAWpgIbG/_suZXE?viewMode=embedplay&hideSections=true" width=900 height=500 style="max-width: 100%;" allow="fullscreen"></iframe>

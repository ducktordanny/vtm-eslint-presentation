# Presentation

> Boilerplate for creating presentations with reveal-md

## Install

Clone this repository, and that's it. Change it to your needs.

Install dependencies: `yarn` or `yarn install`

## Usage

The slides should be written inside the slides.md file, then run `yarn dev` to check it out (it will start it up in watch mode).

To build your changes use `yarn build` it will create a dist folder that you use later.

`yarn deploy` will take your dist folder and send it to GitHub Pages, so others can view it. Though if you create a repo from this template, there is a husky pre-push hook set up to deploy before every push, so you won't need to worry about doing this manually.

For more details on how some other configurations work, like custom styling etc. you can check the reveal-md lib, as this repo is based on that. A few information though:

- Edit `styles.css` for custom styles
- Edit `reveal-md.json` and `reveal.json` for reveal.js configurations
- Create your slides intside the `slides.md` file

## Note

This is just a template for future myself, but feel free to use it if you want.

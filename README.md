# rn4android-slides

An introduction to React Native for Android Developers. Presented via Twitch at the GDG Cosenza on July 22nd 2020.

## View the slides

Head over to [this page](https://micheleb.github.io/rn4android-slides/) and use left/right (or page up / page down) arrow keys to navigate.

I made the slides targeting my monitor, which is 2560px wide (weird flex, but ok). I added a couple of media queries to make them readable on 1920px-wide monitors, or so was my intent. Media queries are cool! Writing many of them is not ☹️

## The source

The slides are written in MDX, using the awesome [`mdx-deck`](https://github.com/jxnblk/mdx-deck) (v4). Feel free to reuse and modify any component you want (you're mostly likely interested in [`ProgressBar.js`](https://github.com/micheleb/rn4android-slides/blob/master/ProgressBar.js), which shows a little progress bar at the bottom of every slide, included in the `<Footer>` component declared near the top of [`deck.mdx`](https://github.com/micheleb/rn4android-slides/blob/master/deck.mdx)).

If you're wondering how the `micheleb.github.io` version of the slides works, well... See [this issue](https://github.com/jxnblk/mdx-deck/issues/535) to understand why it's not straightforward. I mixed and mashed [this PR](https://github.com/jxnblk/mdx-deck/pull/717) with some of the advice about `pathPrefix` from the issue. I applied all of the changes from the PR, and then

- added `pathPrefix: '/rn4android-slides'` to the `gatsby-config.js` file inside `node_modules/mdx-deck`
- added a second argument to the `gatsby('build')` call inside `node_modules/mdx-deck/cli.js` so that line 88 of that file now contains `gatsby('build', '--prefix-paths')`
- after running `yarn build`, I manually moved the `index.html` file from `public/rn4android-slides` to the `public` folder
- moved all of the `public` folder to the `docs` folder, which is served as a GitHub page

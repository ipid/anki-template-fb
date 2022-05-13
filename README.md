# Anki template: FB

A plain and simple template, in imitation of Facebook's FB5 design.

![Template snapshot](https://user-images.githubusercontent.com/5251264/137313872-61b02de4-65fe-4dd8-9dcd-75f3d9123b80.png)

<br>

## Features

- No third-party dependencies. No font or images required.
- Support all Anki versions on all platforms, including Anki for PC, AnkiDroid, and AnkiMobile for iOS.
- **Animation**: This template has an appealing answer revealing animation.

- Night mode/Dark mode is supported.

![Dark mode snapshot](https://user-images.githubusercontent.com/5251264/137314169-3a51d046-4e09-4be6-af50-75e214e05fcc.png)

<br>

## How to Use

1. Go to the [Release page](https://github.com/ipid/anki-template-fb/releases);
2. Download the latest `.apkg` file;
3. Import the `.apkg` file into Anki. For example, you can use `File` -> `Import` on Anki for PC to import the cards;
4. The template will be available for new cards.

<br>

## Developers guide

If you want to make changes to the code or build a deck on your own, please follow this guide:

- Run `npm run watch-scss` and `npm run watch-css` for compiling `.scss` to `.css` in real time.
- Make changes to everything inside `/src/`.
- Use a HTML server (e.g. `python -m http.server`) for developing.
- After coding:
  - Copy the HTML code of question card and unrevealed answer card into the `front template` in Anki;
  - Copy the HTML code of question card and revealed answer card into the `back template` in Anki;
  - Copy the code in `build/out.css` into the `style` in Anki.

<br>

## License

Released under the MIT license.


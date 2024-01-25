# Open Editions 📖✨

An aesthetically pleasing audiobook player designed to mimic the feeling of reading a physical book.

<a href="https://rebeccashoptaw.dev/open-editions/" target="_blank"><button onClick="https://rebeccashoptaw.dev/open-editions/" target="_blank">Live Site</button></a>

<img width="1440px" alt="Open Editions Homepage" src="https://github.com/rebecca-shoptaw/open-editions/blob/master/src/assets/OpenEditions_Homepage.png">
<img width="1440px" alt="Listen Page - The Red and The Black" src="https://github.com/rebecca-shoptaw/open-editions/blob/master/src/assets/OpenEditions_RedBlack.png">
<img width="1440px" alt="Listen Page - Middlemarch" src="https://github.com/rebecca-shoptaw/open-editions/blob/master/src/assets/OpenEditions_Middlemarch.png">

## Background & Mission

As an avid reader with a visual memory, I often struggle with the generic and sometimes cluttered web interfaces of audiobook sites. I built the initial version of this site in a moment of desperation, when I was trying to listen to an audiobook of _The Count of Monte Cristo_ and found myself wishing there was a way to listen that would look and feel less like a generic website and more like a physical edition of the book.

Once the first version was built, I realized that this could be a great site to expand and make public for three reasons:

1. To make the audiobook experience more pleasant
2. To highlight the amazing [Librivox catalog](https://librivox.org/) of public domain audiobooks
3. To promote and make more accessible the reading of classic literature

## Features

- **Customized cover images:** Classical paintings selected to represent book content; if no cover image selected, will implement randomized selection from a set of paintings
- **Minimal mode**: Option to hide all unnecessary buttons and info and focus on the reading experience

All audiobooks sourced from the [Librivox](https://librivox.org/) library of free public domain audiobooks, hosted via [Archive.org](https://archive.org/)

## Built With

[![React][React-icon]][React-url] [![Vite][Vite-icon]][Vite-url] [![Typescript][TS-icon]][TS-url] [![HTML][HTML-icon]][HTML-url] [![CSS][CSS-icon]][CSS-url]

## Next Steps

- [x] Build starter homepage to navigate between current titles
- [ ] Switch to [Art Institute of Chicago API](https://api.artic.edu/) to retrieve cover images
- [ ] Build new cover image data structure & associated functions
- [ ] Search functionality using the [Librivox API](https://librivox.org/api/info)
- [ ] Migrate styling from CSS -> SASS
- [ ] Begin building animations with GSAP

## Long-term Goals

- [ ] Use Librivox RSS feed to rebuild player from scratch
- [ ] Create bookmark functionality using `localStorage` to save user's place
- [ ] Create "back of book" view to display more detailed book info (and cover credits) without interrupting audio play
- [ ] Enable user-submitted cover suggestions
- [ ] Transfer site from GitHub pages to Vercel or AWS, with a separate custom domain
- [ ] Work with a team to create a backend to allow for account login and features like saving progress, creating TBR and favorites lists, and accessing reading history

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Rebecca Shoptaw - [rebecca@rebeccashoptaw.dev](mailto:rebecca@rebeccashoptaw.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Links and Icons -->

[React-icon]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite-icon]: https://img.shields.io/badge/-Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/
[TS-icon]: https://img.shields.io/badge/-Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[TS-url]: https://www.typescriptlang.org/
[HTML-icon]: https://img.shields.io/badge/-HTML5-20232A?style=for-the-badge&logo=html5&logoColor=E34F26
[HTML-url]: https://www.w3schools.com/html/
[CSS-icon]: https://img.shields.io/badge/-CSS3-20232A?style=for-the-badge&logo=css3&logoColor=1572B6
[CSS-url]: https://www.w3schools.com/css/

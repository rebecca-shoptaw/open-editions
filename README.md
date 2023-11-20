# Open Editions 📖✨
An aesthetically pleasing audiobook player designed to mimic the feeling of reading a physical book. [Live Site](https://rebeccashoptaw.dev/open-editions/).

<img width="350px" alt="OpenEditions_Interface" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/4379aed8-72a1-47e8-a4fd-545f31896125">
<img width="350px" alt="OpenEditions_Middlemarch" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/7e81d5f9-a511-4554-8323-ef3628007fea">
<img width="350px" alt="OpenEditions_MonteCristo" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/563459f9-3985-4d53-a5f3-9b5c76630f47">

## Background & Mission
As an avid reader with a visual memory, I often struggle with the generic and sometimes cluttered web interfaces of audiobook sites. I built the initial version of this site in a moment of desperation, when I was trying to listen to an audiobook of *The Count of Monte Cristo* and found myself wishing there was a way to listen that would look and feel less like a generic website and more like a physical edition of the book. 

Once the first version was built, I realized that this could be a great site to expand and make public for three reasons:
1. To make the audiobook experience more pleasant
2. To highlight the amazing [Librivox catalog](https://librivox.org/) of public domain audiobooks
3. To promote and make more accessible the reading of classic literature

## Features
- **Customized cover images:** Classical paintings selected to represent book content; if no cover image selected, will implement randomized selection from a set of paintings
- **Minimal mode**: Option to hide all unnecessary buttons and info and focus on the reading experience

All audiobooks sourced from the [Librivox](https://librivox.org/) library of free public domain audiobooks, hosted via [Archive.org](https://archive.org/)


## Built With
- [![React][React-icon]][React-url]
- [![Vite][Vite-icon]][Vite-url]
- [![Typescript][TS-icon]][TS-url]
- [![HTML][HTML-icon]][HTML-url]
- [![CSS][CSS-icon]][CSS-url]

## Next Steps
- [ ] Build homepage and search functionality using the [Librivox API](https://librivox.org/api/info)
- [ ] Create simple data storage system to link API data to cover image link and sizing info
- [ ] Create "back of book" view to display more detailed book info without interrupting audio play

## Long-term Goals
- [ ] Transfer site from GitHub pages to Vercel or AWS, with a separate custom domain
- [ ] Use [Archive.org API](https://archive.org/developers/index.html) to rebuild player from scratch and implement further visual customization
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





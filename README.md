# Open Editions 📖
An aesthetically pleasing audiobook player designed to mimic the feeling of reading a physical book. 

<img width="30%" alt="OpenEditions_Interface" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/4379aed8-72a1-47e8-a4fd-545f31896125">
<img width="30%" alt="OpenEditions_Middlemarch" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/7e81d5f9-a511-4554-8323-ef3628007fea">
<img width="30%" alt="OpenEditions_MonteCristo" src="https://github.com/rebecca-shoptaw/open-editions/assets/140550988/563459f9-3985-4d53-a5f3-9b5c76630f47">

[Live Site](https://rebeccashoptaw.dev/open-editions/).

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


## Technologies Used
- [React](https://react.dev/) built with [Vite](https://vitejs.dev/)
- Typescript
- HTML/CSS

## Next Steps
- Build homepage and search functionality using the [Librivox API](https://librivox.org/api/info)
- Create simple data storage system to link API data to cover image link and sizing info
- Create "back of book" view to display more detailed book info without interrupting audio play

## Long-term Goals
- Transfer site from GitHub pages to Vercel or AWS, with a separate custom domain
- Use [Archive.org API](https://archive.org/developers/index.html) to rebuild player from scratch and implement further visual customization
- Work with a team to create a backend to allow for account login and features like saving progress, creating TBR and favorites lists, and accessing reading history

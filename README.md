#Cogent Elliott page build

This is a redesign of Cogent Elliott's <a href="http://cogent.co.uk" target="_blank">current homepage</a>. It is designed for modern browsers only: older browsers would need an additional stylesheet or polyfills. The site is uploaded <a href="http://gimaju.net/cogent/" target="_blank">here</a>: note that I have been able to test this only on a limited number of devices. 

The code is handwritten with no use of libraries or frameworks. I have used SASS as a CSS preprocessor: I haven't previously used it so this was a good learning exercise. I tried to use SASS to calculate where the blog/news links ended up in a partial row (by calculating the height of the full rows, setting the container to this height and hiding the overflow) but this didn't work, so I just set the number of links to be 12 and the links per row to either 6, 4, 3 or 2, so there is no remainder. In production, these links would be pulled through from a database and the calculation could be done with JavaScript.

The site is designed mobile-first; I started it desktop-first but sass made it easy to reverse this. The breakpoints are not aimed at specific devices, rather based on how the layout works best.

The Twitter feed and sharing icons have been pasted in rather than brought in using the API.

**Naming:** I have tried to use a BEM-style naming convention. Following a workshop on ITCSS that I attended I thought about following that naming convention, which uses BEM along with object oriented CSS, but I decided it was too complicated to redo everything in this style for this task.

**Fonts:** I have loaded the sans-serif font from the Google Fonts API (which I wouldn't use in production).

**Images:** I have not used a responsive image technique (srcset or picture) in this case but given the image-heavy nature of the page this would be best practice. In some cases I would load the images in a single background sprite, but in this case the images were all semantic content and so shouldn't be inserted as background images (although I am wondering if the images in the article links aren't really meaningful so should actually be background images).

**To do:**

There are quite a few bits of design and functionality which aren't yet complete:

* 
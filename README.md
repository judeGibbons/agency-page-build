#Cogent Elliott page build

This is a redesign of Cogent Elliott's <a href="http://cogent.co.uk" target="_blank">current homepage</a>. The site is uploaded <a href="http://gimaju.net/cogent/" target="_blank">here</a>

I have been able to test this only on a limited number of devices. The site is designed for modern browsers only: it works on Mac browsers, iPad and a modern Android phone but not on old (v2.3) Android. I haven't been able to test on IE. I have used HTML5 semantic elements which would need a fallback on older browsers.

The code is handwritten with no use of libraries or frameworks. I have used SASS as a CSS preprocessor: I haven't previously used it so this was a good learning exercise. 

The site is designed mobile-first; I started it desktop-first but sass made it reasonably easy to reverse this. The breakpoints are not aimed at specific devices, rather based on how the layout works best.

If JavaScript doesn't load the carousel is one static image, and at the narrowest breakpoint the menu dropdown shows permanently so it is still accessible.

I tried to use SASS to calculate where the blog/news links ended up in a partial row (by calculating the height of the full rows, setting the container to this height and hiding the overflow) but this didn't work, so I just set the number of links to be 12 and the links per row to either 6, 4, 3 or 2, so there is no remainder. In production, these links would be pulled through from a database and the calculation could be done with JavaScript.

**Naming:** I have tried to use a BEM-style naming convention. Following a workshop on ITCSS that I attended I thought about following that naming convention, which uses BEM along with object oriented CSS, but I decided it was too complicated to redo everything in this style for this task.

**Fonts:** I have loaded the sans-serif font from the Google Fonts API (which I wouldn't use in production).

**Images:** I have not used a responsive image technique (srcset or picture) in this case but given the image-heavy nature of the page this would be best practice. In some cases I would load the images in a single background sprite, but in this case the images were all semantic content and so shouldn't be inserted as background images (although I am wondering if the images in the article links aren't really meaningful content so should actually be background images).


##Compromises due to time

There are quite a few bits of design and functionality which aren't yet complete or need refining.

* The following needs fixing: 
  * z-indexes in header and article links; 
  * improvement is needed in colours and typography - for instance, the rollover colours - they are currently based on colours picked from the Cogent Elliott logo - and link design (including focus, hover etc) particularly in the twitter box and footer needs to be  more consistent;
  * the rollover highlight in the secondary menu covers the whole ul, and that in the carousel covers the whole caption, not just the clickable link;
  * the background that appears on hovered links in the carousel and the article links doesn't cover the arrow at the right hand side (which is inserted as an ::after pseudo element);
  * article link blocks: the text is unreadable on some of the pictures: I would possibly put a semi-transparent overlay behind the text which would make it more readable.

* The Twitter feed and sharing icons have been pasted in rather than brought in using the API.

* The signup form in the footer needs creating, as does the search bar in the header (although I'm not sure the site needs this).

* The dropdown menu on mobile needs to display at a wider viewport than currently: the menu overlaps the logo at about 760px. I would reorder the menu to put the most important items (Our Work, Services, Contact) first, and then when the mobile menu kicks in I would leave those three items visible and put the rest of the menu in the dropdown. The hamburger icon would ideally be drawn in canvas (or with borders on spans). I would also add a slight delay on the menus so that it's easier to select the submenu item. On mobile, the secondary menu is too wide because of the long link names - this needs fixing (probably by removing nowrap but I'd have to check this didn't break anything else).

* I would add forward and back buttons and a pause button to the carousel.

* I would bring in constant elements (header, footer, menu) using php include files rather than static html.

* The clearfix functionality could be put into a css mixin.

* I would add a print stylesheet which removes the menu, prints link urls after the link text and generally makes the page work on paper.
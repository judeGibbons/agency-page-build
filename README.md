#Cogent Elliott page build

This is a redesign of Cogent Elliott's <a href="http://cogent.co.uk" target="_blank">current homepage</a>.

The code is handwritten with no use of libraries or frameworks. I have used SASS as a CSS preprocessor: I haven't previously used it so this was a good learning exercise. I have tried to use a BEM-style naming convention.

**Fonts:** I have loaded the fonts from the Google Fonts API (which I wouldn't use in production).

**Images:** I have not used a responsive image technique (srcset or picture) in this case but given the image-heavy nature of the page this would be best practice. In some cases I would load the images in a single sprite, but in this case the images were all semantic content and so shouldn't be inserted as background images.

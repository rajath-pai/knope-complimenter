# knope-complimenter

Welcome to the Leslie Knope Complimenter! This machine will help you pump your friend up with the perfect praise!

This random compliment generator embodies the spirit of Leslie and Ann's friendship from the show Parks and Recreation. Further details are elaborated in the References section.

# References

https://www.youtube.com/watch?v=_Ary8arWND8  
https://www.youtube.com/watch?v=l6wRR35LGVA  
https://www.youtube.com/watch?v=Su9bxtBh3ug  

And general (bordering on manic) viewing of Parks & Recreation.

# Aim of the game
Generate a compliment meant for a friend. Compliments must praise behavioral traits through metaphors related to strength, intelligence, work ethic, beauty, etc. 

Users can enter their own friend's names and professions to generate a personalized compliment. If none are provided, the beautiful land-mermaid that is Ann Perkins receives more accolades. But beware! like life, sometimes, instead of a compliment, you may be handed a lemon in the form of April Ludgate (scary) or Jerry Gergich (useless).

# How to use
On launching the webpage, click on the "Click to get compliment!" button to generate a compliment. Compliments falls into seven different categories/formats outlined in the next section.

Use the text boxes provided to personalize compliments for your friend. But, there's also a chance to generate something nasty so keep trying. In addition, on some compliments, you may hover (move your mouse back and forth) over a box shown to replace adjectives in your compliments with their synonyms. But, this too can quickly go awry because remember the complimenter only aids you, you know your friend the best!

# Compliment formats

By now, you may be aware that these compliments are an assortment of adjectives, nouns, natural phenomena, etc strung together seemingly randomly. I have chosen to employ the following formats to delve into the art of the metaphor and generate compliments:

(all properties in <> are to be randomly assigned)
1. `<cute adjective>, <strong adjective>, <behavior> <cute/strong animal>`
2. `<adjective> <ecosystem>-<mythical being>`
3. `<adjective>, <behavior> <inanimate object> come to life`
4. `<adjective>, <adjective> <profession>`
5. `<adjective>, <adjective>, <flower>`
6. `<infuser>-infused <infusee/dessert>`
7. `Analagous comparisons:
    Lord of the Rings is the <person> of novels. 
    Waffles are the <person> of breakfast foods.`

Where appropriate, `<person>` is prefixed/suffixed/inserted.

Note: As the aim is to generate compliments randomly, the format is also chosen randomly.

# API usage
The Merriam Webster Thesaurus API is employed to fetch synonyms for the adjectives mentioned above. 
Other compliment properties are randomly selected from hardcoded lists.

Compliment category/format is also selected randomly.

# Image usage
Images are stored in the repo and pulled randomly. All images and GIFs were pulled from a Google Search. As they all are screengrabs from the show, I assume the owner is whoever produces the show (NBC?)

# Process followed
- scoured compilation videos from the show for inspiration
- built different formats for compliments (the more random and bizarre, the better)
- started with a basic React app
- modified the idea to include images such that some images elicit compliments while others create insults. Mapped these to the personalities of the characters in the show.
- selected images by browsing the internet
- created basic app layout with a background and some basic text.
- played around with how randomness can be introduced.
- built out the different categories in the code and set up the infrastructure to trigger the creation of these.
- Tested the creation of different combinations first without the Merriam-Webster API.
- Introduced the input boxes for compliment personalization.
- Tested this code and then thought to change the background of the center box based on the tone of the text displayed.
- Adapted a color scheme for the randomly selected portions of the displayed text.
- Worked on calling the Merriam-Webster API to fetch synonyms for a word.
- Gave up.
- Tried again after a break and introduced hacks to call the API.
- Tested with the API.
- Deployed!

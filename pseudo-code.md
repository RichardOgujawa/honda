# Pseudo-Code

## Scroll Down Menu:
Initial Idea:
For scrolldown menu in mobile view:
- make a new variable called on
- set on to true
- In jQuery, add a click event to the hamburger icon
- When clicked on will turn to not on (!on);
- Do if else statements using on as the parameter, i.e. if on is true then have the menu scroll down, if on is false then move the menu up 
- you don't need to add in a transition property, the animate function will handle that for you, if it's going to fast, or slow, maybe you can add some kind of parameter to speed it up or slow it down

Final Solution: 
- jQuery not working, so use vanilla JavaScript instead, and just toggle a  class on and off with a transition property and clip-path adjusted to show the menu. 
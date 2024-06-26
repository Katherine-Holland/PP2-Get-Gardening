# Code Institute PP2

# Get Gardening
![mock-up]( assets/images/gardening.png)

A Code Institute Project (PP2). Visit the live site [here](https://katherine-holland.github.io/PP2-Get-Gardening/).

Contents
1. [Introduction](#introduction)
2. [Design](#design)
3. [Features](#features)
4. [Manual Testing](#testing)
6. [Deployment](#deployment)
6. [Future Features](#future)
7. [Credits](#credits) 

## Introduction

**Audience:**

Get Gardening is a site aimed at a younger audience who want to learn about garden snails by playing themed games.

**Client side:**

The site is designed to feel fun and informative with simple activities and a link to more information on garden snails for those taking the quiz. This page would sit well within a larger educational website.

## Design
The wireframe was created using Balsamiq. I created a basic structure as I wasn't sure if I was going to be able to code both the quiz and the animated game in the timeframe.

![Wireframe for Mobile](assets/images/wireframe.png)

### Colours
I used green and blue to represent the sky and the grass and kept the scheme simple. 

![Colour palette](assets/images/gardencolors.png)

### Fonts
I used Google fonts and choose Noto Sans. I chose this font as it had a fun, rounded feel to it but was also still accessible and easy to read.

![Fonts](assets/images/font.png)

## Features
Below are the core functions and elements I incorporated into the site.

### Simple Game
I created a simple game inspired by the dinosaur game (which appears on desktop when the internet is not working). The aim of the game is to jump as many obstacles as possible without hitting them. The dinosaur game used a timer but I decided to implement a jump counter and high score generator.
![Image](assets/images/dino.png)

I found an online tutorial which re-created a similar functionality using blocks and I then modified this code with event listeners and graphics and more functionality to achieve the final snail game. As the coding progressed, I realised that this simple game was actually pretty difficult to code for a beginner and I was generating numerous errors as I went along (see 'Issues' below). However, I learnt a lot in the process!

### Snail Quiz
I created a simple quiz for children who wanted to learn more about snails. This game is followed by a link to the Natural History Museum's guide to snails, allowing the audience to find out more from an established authority on Natural History. 
This quiz was created around a similar code structure to the Code Institute tutorial 'Rock , Paper, Scissors', using an array and a scoring system based on the correct answer being chosen.

### Images
I chose images that related to a fun gaming theme.
![Image](assets/images/snail.png) 

### Footer
I added a GIF to add interest to the footer and used a green horizontal rule to denote grass and to add some style to the page.

## Deployment
I deployed the site via GitHub. I did this on the 'pages' section via the repository 'settings' tab. Under the 'source' drop down menu, I deployed from branch, ensuring the 'root' folder was selected before saving it. 
I gave detailed commits as the project progressed via GitHub. These changes were committed using these steps: Giving a summary of the commit, a description of the commit, then staging and committing all changes before pushing to GitHub.

I tested it using two popular browsers, Chrome and Firefox, both of which worked as expected.

I tested the site using Google Dev Tools both for desktop and for mobile responsiveness on all devices. The site worked well, as I had used a container to add mobile responsiveness. However, I did need to change the chart dimensions in the script.js file to allow it to fit on smaller mobile screens and I also used media queries to ensure the site was viewable on mobile devices.

## Manual Testing
1. I was testing the functionality of the site as I went along. For example, to check if the event listeners were responding correctly I logged events to the console.
![Console](assets/images/debug.png)

I also used various methods to test the accessibility of my site and the quality of my code. The testing resulted in a number of error messages and suggestions which I took note of and implemented the necessary changes.

**W3Schools HTML Validator**

The site passed through validation successfully.
![HTMLValidator](assets/images/htmlcheck.png)

**Lighthouse**

1. I added alt text to my images as Lighthouse flagged up that they were not accessible to screen readers.
![Lighthouse](assets/images/lighthouse.png)

**W3 CSS Validator**

1. I discovered an error in my CSS as I had used a float. I amended this error and the CSS passed through the validator.
![CSS Validator](assets/images/errorcss.png)
![Image](assets/images/cssvalidator.png)

**JSHint**

I passed all three of my .js files through JSHint successfully. The only issues flagged related to 'two unused variables' these were checkAnswer and endGameOption in the quiz.js file. However, these were not unused as they feature in the HTML file.

**Other JS Issues**

As this language was new to me, I had a steep learning curve and there were many issues during the build.

1. During testing I realised that the js script wasn't correctly loading from the assets folder.
![Script Errror Message](assets/images/scripterror.png)

2. Upon testing the game feature, my Mentor pointed out that the spacebar (used as the jump key) was causing the screen to scroll downwards, which is a default action. I rectified this by adding in a simple line of code to the "Keydown" event listener: event.preventDefault();
This solved the issue and resulted in a better user experience.

3. The Google chart that I imported was hard to make mobile responsive and I had issues with sizing the width. I modified the width in the chartscript.js file to allow the chart to look good on smaller screens, such as the Galaxy Fold.

## Future Features
1. I would create more characters that have different rules for speed and size.
2. I would add in harder levels as the game progresses. 
3. I'd create a share button to allow users to share the game with their friends.
4. I'd add more questions to the quiz.
5. I'd like to add a progress indicator to the quiz for a better user experience.

## Credits
**Fonts:**
https://fonts.google.com/

## Images:
**Wireframe:**
https://balsamiq.com/

**Mock Up:**
https://ui.dev/amiresponsive?url=https://katherine-holland.github.io/PP2-Get-Gardening/

**Gnome png:**
<a href="https://www.freepik.com/icon/christmas_10713384#fromView=search&page=2&position=91&uuid=f299468d-611a-472c-b1b4-3052a8f5781e">Icon by Paul J.</a>

**Snail png:**
<a href="https://www.freepik.com/icon/snail_1998793#fromView=search&page=1&position=94&uuid=ac283b6e-e3a3-4246-b66f-a6583c5d678e">Icon by Flat Icons</a>

**Plant GIF:**
<a href="https://lottiefiles.com/animations/plants-cGXbczhsoL?from=search">Plant GIF</a>

**Dino game visual for README:** 
Anand Krish, CC BY-SA 4.0 <a href="https://creativecommons.org/licenses/by-sa/4.0">, via Wikimedia Commons

## Website Validators:
https://validator.w3.org/

https://jigsaw.w3.org/css-validator/

https://jshint.com/

Google Dev Tools - Lighthouse

## Tutorials & Advice:
https://www.w3schools.com/

Code Institute - Rock, Paper, Scissors, Stone Tutorial plus the Java Script Essentials module.

YouTube tutorial: https://www.youtube.com/watch?v=bG2BmmYr9NQ

**Google Charts:**
<a href="https://developers.google.com/chart/interactive/docs/quick_start">Piechart Tutorial</a> 

Special thanks to my Mentor Spencer Barriball for his support and guidance.
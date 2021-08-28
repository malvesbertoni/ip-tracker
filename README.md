# IP Address Tracker

This project consists of an IP Address Tracker, where the user inputs an IP Address and a request is made to [IpWhoIs API](https://ipwhois.io/).
Once this process is done, key information and a map, using [React-Leaflet](https://react-leaflet.js.org/), of the IP Address location will be displayed.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Demo](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses and see the key information and location

### Demo

![Overview](https://github.com/malvesbertoni/ip-tracker/blob/master/public/ip-tracker-demo.gif)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [IpWhoIs API](https://ipwhois.io/) - API
- [React-Leaflet](https://react-leaflet.js.org/) - API
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This project was really challenging for me because I faced some design pattern issues that I wasn't aware of.
At some point, during development, I realized that simply "stacking files" and components on top of each other wouldn't get me far.
That's when Lucas helped me figure out that I needed to implement a design pattern to solve the problems I was facing.
Through research, I found out about the ["Lifting State Up" pattern](https://reactjs.org/docs/lifting-state-up.html), which was an amazing discovery.
Also, I had the opportunity of working with Promises and async/await in this project, which taught me a lot about the problems that can appear when you're dealing with asynchronicity.
Even though I chose to stick with only one approach (async/await), having to deal with this situation was very productive.

## Author

- [M. Bertoni](https://www.linkedin.com/in/m-bertoni/)

## Acknowledgments

- I'd like to thank [Lucas](https://github.com/lucasrz/) for helping me figure out some design patterns issues I was facing.

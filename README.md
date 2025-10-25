# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

The Age Calculator App is a sleek, interactive tool that allows users to input their date of birth and instantly see their exact age broken down into years, months, and days.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Age Calculator](https://age-calculator-f.netlify.app/)

## My process

### 1. Understanding the Challenge

- Carefully reviewed the [Frontend Mentor brief](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q) and design files.
- Identified key requirements: form validation, accurate age calculation, responsive layout, and accessibility.

### 2. Project Setup

- Initialized the project using HTML, CSS, and vanilla JavaScript, keeping dependencies minimal and focusing on core web fundamentals.
- Structured the project with separate folders for assets, styles, and scripts to maintain clarity and modularity.
- Linked external CSS and JS files to the HTML for clean separation of concerns.
- Used semantic HTML elements to enhance accessibility and maintainability.

### 3. Building the UI

- Translated the provided design into a responsive layout using **CSS Flexbox/Grid**.
- Ensured pixel-perfect alignment and spacing across breakpoints (mobile and desktop).

### 4. Implementing Logic

- Instead of relying on JavaScript's built-in Date object, I manually implemented the age calculation logic from scratch.
- Parsed and validated day, month, and year inputs individually.
- Calculated the difference between the current date and the input date using custom arithmetic, accounting for:
- Leap years
- Month boundaries
- Day rollovers
- Ensured the final output accurately reflects the user's age in years, months, and days, even for edge cases like birthdays on February 29 or dates near month/year transitions.

### 5. Form Validation

- Used controlled inputs and custom validation logic to ensure users enter valid day, month, and year values.
- Displayed contextual error messages for each field to guide user correction.

### 6. Testing & Debugging

- Manually tested various date inputs to verify accuracy and UX.
- Used console logs and step-by-step tracing to debug calculation logic and validation flow.

### 7. Responsive & Accessible Design

- Verified layout responsiveness across screen sizes.
- Added semantic HTML and ARIA labels for better accessibility.

### 8. Final Touches

- Polished UI interactions and transitions.
- Reviewed code for readability, modularity, and DRY principles.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript for form validation and logic

### What I learned

Building the Age Calculator App with vanilla JavaScript taught me several valuable lessons:

- Manual date logic deepens understanding: Implementing age calculation without relying on the Date object pushed me to think critically about how calendars work—especially leap years, month lengths, and rollover scenarios.
- Validation is more than just checking inputs: Designing robust form validation meant anticipating user behavior, handling edge cases, and delivering clear, helpful error messages.
- Modularity improves maintainability: Separating logic into reusable functions made the code easier to debug, test, and extend.
- Responsive design requires planning: Ensuring the layout worked across devices taught me the importance of flexible units, media queries, and mobile-first styling.
- Small projects can sharpen fundamentals: Even a simple app like this reinforces core skills—DOM manipulation, event handling, and clean UI/UX design.
  This challenge reminded me that mastering the basics is key to building scalable, user-friendly applications.

## Author

- Frontend Mentor - [4rch1tT](https://www.frontendmentor.io/profile/4rch1tT)
- Github - [4rch1tT](https://www.github.com/4rch1tT)

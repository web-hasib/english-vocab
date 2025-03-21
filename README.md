### WELCOME TO ASSIGNMENT-006


------

live link: https://b11-a6-by-hasibul.netlify.app/


Username can be anything. 
But the code must be 123456.

------



# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA


---
⚡ API Endpoints
---
1. Get ⚡ All Levels
```bash
https://openapi.programming-hero.com/api/levels/all
```
2. Get ⚡ Words by Levels <br/>
https:// openapi.programming-hero.com/api/level/{id}
```bash
https://openapi.programming-hero.com/api/level/5
```
3. Get ⚡ Words Detail <br/>
https:// openapi.programming-hero.com/api/word/{id}
```bash
https://openapi.programming-hero.com/api/word/5
```
4. Get ⚡ All  Words <br/>

```bash
https://openapi.programming-hero.com/api/words/all
```

# Requirements 

### Navbar
- [ ] Create a navbar with a logo and brand name on the left
- [ ] Create three buttons with icons: FAQ, Learn, and Logout
- [ ] when clicking the FAQ button user will jump to the FAQ section 
- [ ] when clicking the Learn button user will jump to the Vocabulary section 
- [ ] Navbar will be fixed at the top with a bottom border

### Banner
- [ ] Create a banner with a title and paragraph along with a login form on the left as Figma
- [ ] image on the right as Figma
- [ ] Align elements as per the Figma design

### FAQ Section
- [ ] Create an FAQ section containing Following  questions and answers as Figma
  - [ ] the difference between `var`, `let`, and `const`
  - [ ] the difference between `map()`, `forEach()`, and `filter()`
  - [ ] explain arrow functions and how they are different from regular functions
  - [ ] how JavaScript Promises work
  - [ ] how closures work in JavaScript

### Footer
- [ ] Create a footer that includes the logo and social icons as per Figma
- [ ] redirect users to his social profiles in a new Tab when clicking on social icons

### Vocabulary Section
- [ ] Show a center-aligned heading as Figma
---
- [ ] Create dynamically generated buttons from **API-01** for each lesson
- [ ] Lesson Buttons will be displayed on page load
---
- [ ] Show a default text that will be displayed in the Vocabulary section initially
- [ ] on Clicking a Specific Lesson Button  Load All the words from  **API-02** 
- [ ] Display all words for a selected lesson in a card format, showing:
  - [ ] Word
  - [ ] Word meaning & pronunciation
  - [ ] Two buttons with relevant icons as per Figma
---
- [ ] Show ***No Word Found** message  if no words exist for a lesson
---
- [ ] Create functionality to highlight the active lesson button
---


### Vocabulary Details
- [ ] Create functionality to open a modal when clicking the details icon
- [ ] Data will be load from **API-03**
- [ ] modal will  displays:
  - [ ] Word with pronunciation
  - [ ] Example sentence
  - [ ] Synonyms
  - [ ] A "Complete Learning" button to close the modal


## Challenge Requirements

### Custom Navigation & Smooth scrolling 
- [ ] hide everything on landing except the Banner and Footer
- [ ] Create a functional login form:
  - [ ] Show an alert if the user does not enter a name
  - [ ] Show an alert if the password is not "123456"
- [ ]  when the user enters a valid name and password
  - [ ] Show a success alert,
  - [ ] hide the Banner
  - [ ] display the Navbar, Vocabulary Section, and FAQ Section 
---
- [ ] when clicking "Logout"
  - [ ] hide the Navbar, Vocabulary Section, and FAQ Section
  - [ ]  show only the Banner and Footer
- [ ] Apply smooth scrolling for FAQ & Learn buttons

### Handling Invalid Data
- [ ] avoid displaying falsy values like `undefined` or `null`
- [ ] display relevant words if no data is found

### Loading Spinner
- [ ] Create a loading spinner that will be display when vocabulary is loading from API 

## Optional: Be a Perfectionist

⚠️ Their is No Mark for Optional Requirement.  You won't get any support for any of  the optional Part. But we strongly recommend you to give a try after completing all the requirement.

---
### Sweet Alert - https://sweetalert2.github.io/#download 
- [ ] Explore Sweet ALert Documentation  <br/>
integrate it with your app. replace all the basic alert with a normal alert <br/>
Follow this [Documentation](https://sweetalert2.github.io/) 
---
### Speak your Vocabularies
- [ ] Create functionality for voice pronunciation of vocabulary words
- [ ] Use below function and implement on clicking sound icon
```js
 function pronounceWord(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-EN'; // English
      window.speechSynthesis.speak(utterance);
    }
```
For More >>  you can explore this implementation 👉  [https://codepen.io/Ferdous-Zihad/pen/PwoJMmJ](https://codepen.io/Ferdous-Zihad/pen/PwoJMmJ)

---
### Custom Font integration 
- [ ] integrate a local Bengali font for Bangla words given in assets
- [ ] use this font on every Bengali words
- [ ] Search , Research , Explore  If you dont know how to do it. 

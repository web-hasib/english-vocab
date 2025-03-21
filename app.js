// alert();
// document.getElementById("spinner").style.display = "none";

//? faq Animation
const header = document.getElementById('header');
// console.log(header);

const hero = document.getElementById('hero');
console.log(hero);
const main = document.getElementById('main');
// console.log(main);
const footer = document.getElementById('footer');
// console.log(footer);
 
const userName = document.getElementById('userName');
// console.log(userName);
const userPin = document.getElementById('userPin');
// console.log(userPin);
const logInBtn = document.getElementById('logInBtn');
// console.log(logInBtn);

//? initialy 
header.style.display = 'none';
main.style.display='none';




//? login event 
document.getElementById('logInBtn').addEventListener('click', function(){
  const name = userName.value;
  const pin = userPin.value;
  if(name){

    if(pin === '123456'){
      hero.style.display = 'none';
      header.style.display = 'block';
      main.style.display = 'block';
      footer.style.display = 'block';    
    }
    else{
      alert('please inter the currect Pin');
    }
  }
  else{
    alert('Please Enter User');
  }

})

//? logOut event (onclick event) 

function goLogIn(){
  hero.style.display = 'block';
  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'block';
}
 


//? FAQ Animation
function scrollToFAQ() {
  document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
}
//? learn vocab Animation
function scrollToVocab(){
  document.getElementById("learn-vocab").scrollIntoView({ behavior: "smooth" });
}

// get spinner 
const spinner = document.getElementById("spinner");


//? remove Active class
function removeActive() {
  const activeBtn = document.getElementsByClassName("active-btn");

  // console.log(activeBtn);
  while (activeBtn.length > 0) {
    activeBtn[0].classList.remove("active-btn");
  }
}
//? fetching lesson button 
const loadLessons = async () => {
  spinner.style.display = "block";
  const res = await fetch(
    "https://openapi.programming-hero.com/api/levels/all"
  );
  const data = await res.json();
  displayLessons(data.data);
  spinner.style.display = "none";
};

//? display lesson button 
displayLessons = (lessons) => {
  //* id:101
  //* lessonName:"Basic Vocabulary"
  //* level_no:1

  // console.log(lessons);
  const lessonsBtnContainer = document.getElementById("lessonsBtnContainer");
  lessons.forEach((lesson) => {
    // const activeBtn = document.getElementsByClassName("active-btn");
    // activeBtn.classList.remove("active-btn");
    // console.log(lesson);
    const div = document.createElement("div");
    div.classList.add("lesson");
    div.innerHTML = `
        <button id="btn-${lesson.level_no}" type="button" onclick="loadVocabulary(${lesson.level_no})"
                            class=" lesson-btn flex gap-2 cursor-pointer text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800  font-medium rounded-lg text- px-4 py-1 items-center"><img class="w-3 h-3"
                                src="assets/fa-book-open.png" alt="">lesson ${lesson.level_no}</button>
        `;
    // loadVocabulary(lesson.level_no);
    lessonsBtnContainer.appendChild(div);
  });
};

//? fetching vocabularys
loadVocabulary = async (id) => {
  //   console.log(id);
  spinner.style.display = "block";
 
 

  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickedBtn = document.getElementById(`btn-${id}`);
      clickedBtn.classList.add("active-btn");
      // console.log(clickedBtn);
      if(data.data){
        
        displayVocabulary(data.data);
        spinner.style.display = "none";
        
      }
    });
};
//? display vocabulary
displayVocabulary = (vocabulary) => {
 
  const vocabularyContainer = document.getElementById("vocabularyContainer");

  vocabularyContainer.innerHTML = "";
  if (vocabulary.length === 0) {
    vocabularyContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center col-span-full py-9">
            <img src="assets/alert-error.png" alt="">
            <p class="text-sm py-3 font-serif text-gray-800">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="text-xl font-semibold">নেক্সট Lesson এ যান</h1>
          </div>
        `;
    return;
  }

  for (const word of vocabulary) {
    //* id: 5;
    //* level: 1;
    //* meaning: "আগ্রহী";
    //* pronunciation: "ইগার";
    //* word: "Eager";

    // console.log(word);
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="card bg-base-100 ">
            <div class="card-body text-center ">
              <h2 class="text-xl font-bold">${word.word}</h2>
              <p class="">Meaning / Pronuncistion</p>
              <h2 class="text-xl font-semibold">${word.meaning ? word.meaning :' অর্থ নেই'}/ ${word.pronunciation}</h2>
              <div class="flex justify-between w-10/12 mx-auto py-4">
                <button onclick="loadDetails('${word.id}')" class="info-btn btn rounded-md bg-slate-200 py-5 cursor-pointer hover:bg-purple-100 border-none"><img class="w-4" src="assets/information-button.png" alt=""></button>
                <button onclick="pronounceWord('${word.word}')" class="mike-btn btn rounded-md bg-slate-200 py-5 cursor-pointer hover:bg-purple-100 border-none"><img class="w-4" src="assets/icons8-speaker-48.png" alt=""></button>
                
                
              </div>
            </div>
          </div>
        `;
    vocabularyContainer.appendChild(div);
  }
  // console.log(vocabulary);
};

//? load details
function loadDetails(id) {
  // console.log(id);
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayDetails(data.data);
      // console.log(data.data);
    });
}

//? display details
// start from Here
displayDetails = (details) => {
  // console.log(details);
  document.getElementById("word_details").showModal();
  const modalBox = document.getElementById("modal-data");

  //* id: 1;
  //* level: 3;
  //* meaning: null;
  //* points: 3;
  //* pronunciation: "অবানডান্ট";
  //* sentence: "Water is abundant in rainy seasons.";
  //* synonyms: [];
  //* word: "Abundant";

  

  

  modalBox.innerHTML = `
  
    <div>
        <h1 class="flex items-center mr-3">${details.word} (<img class="w-4 h-4" src="assets/fi-ss-microphone.png" alt=""> : ${details.pronunciation})</h1>
        <div class="py-2">
          <h3 class="font-bold py-1">meaning</h3>
          <h4 class="text-sm font-semibold">${details.meaning ? details.meaning : "অর্থ খুজে পাওয়া যায় নি"} </h4>
        </div>
        <div class="pb-2">
          <h3 class="font-bold py-1">Example</h3>
          <h4 class="text-sm font-semibold">${details.sentence} </h4>
        </div>


        <h3 class="font-bold py-2">সমার্থক শব্দ গুলো </h3>
        <div class="synonyms flex gap-2">
        ${
          details.synonyms.length === 0
            ? ""
            : details.synonyms.map(
                (word) =>
                  `<p class="bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 hover:text-purple-700">${word}</p>`
              ).join("")
        }
        </div>
      </div>

  `;
}

//? display none and block
displayNone = (id) => {
  const lessonsBtnContainer = document.getElementById("id");
  lessonsBtnContainer.style.display = "none";
};
displayBlock = (id) => {
  const lessonsBtnContainer = document.getElementById("id");
  lessonsBtnContainer.style.display = "block";
};

loadLessons();

//? pronounce word (onclick)
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN'; // English
  window.speechSynthesis.speak(utterance);
}

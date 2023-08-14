// main.js

//count letters
function countLetters() {
    let text = document.querySelector('textarea').value;
    let letterCount = text.replace(/\s/g, '').length;
    Swal.fire({
        title: 'Letter Count',
        text: `The text contains ${letterCount} letters.`,
        confirmButtonColor: "#077ff9",
    });
}

//count words
function countWords() {
    let text = document.querySelector('textarea').value;
    let wordCount = text.trim().split(/\s+/).length;
    Swal.fire({
        title: 'Word Count',
        text: `The text contains ${wordCount} words.`,
        confirmButtonColor: "#077ff9",
    });
}

//speak function
function speak() {
    let lang = document.getElementById("language").value;
    let text = document.querySelector("textarea").value;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.lang = lang;
        if (text !== "") {
            speechSynthesis.speak(utterance);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: `Speech synthesis not supported.`,
            confirmButtonColor: "#077ff9",
        });
    }
}
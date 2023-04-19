const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }

    else if(hr == 12) {
        speak("Good noon sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }

    else {
        speak("Good Evening sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating struct");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello hemant boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('who i am')) {
        const finalText = "you are my boss and i am your assistent tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('what are you doing')) {
        const finalText = "Nothig just try to helping you";
        speech.text = finalText;
    }
    else if(message.includes('what do you think about me')) {
        const finalText = "i think you're smart funny and kind i'm lucky to be your assistant";
        speech.text = finalText;
    }
    else if(message.includes('thank you')||message.includes('thanks')||message.includes('shukriya')) {
        const finalText = "its my duty boss ";
        speech.text = finalText;
    }
    else if(message.includes('who are you')||message.includes('name')) {
        const finalText = "My name is struct";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('play song on youtube')) {
        window.open("https://www.youtube.com/watch?v=uHz2ng84hFE&list=RDuHz2ng84hFE&start_radio=1&ab_channel=T-SeriesBhaktiSagar", "_blank");
        const finalText = "play song for you boss on youtube";
        speech.text = finalText;
    }

    else if(message.includes('play song')) {
        window.open("https://open.spotify.com/album/7lbGZDmLRgpME63jHzKhrL?highlight=spotify:track:5D5WfnGTGbWUwcLzLVTv6Z", "_blank");
        const finalText = "play song for you boss on spotify";
        speech.text = finalText;
    }


    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
   

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google sir";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

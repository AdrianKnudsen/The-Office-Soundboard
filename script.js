const soundBoard = {
    folder: "sound/",
    sounds: [
        {
            file: "understand.mp3",
            name: "Understand",
            image: "images/understand.png",
            key: "1",
        },
        {
            file: "idiot-quote.mp3",
            name: "Idiot",
            image: "images/idiot.png",
            key: "2",
        },
        {
            file: "parkour.mp3",
            name: "Parkour",
            image: "images/parkour.png",
            key: "3",
        },
        {
            file: "she-said.mp3",
            name: "She-said",
            image: "images/she-said.png",
            key: "4",
        },
        {
            file: "identity.mp3",
            name: "Identity",
            image: "images/identity.png",
            key: "5",
        },
        {
            file: "why-diary.mp3",
            name: "Diary",
            image: "images/diary.png",
            key: "6",
        },
    ],
};



// Function to create audio elements
function createSoundBoard() {
    const soundGrid = document.querySelector(".soundGrid");

    soundBoard.sounds.forEach((sound) => {
        const soundBox = document.createElement("div");
        soundBox.classList.add("soundBox");

        // Create an image element and set its source
        const imageElement = document.createElement("img");
        imageElement.src = sound.image;
        imageElement.classList.add("soundImage");
        imageElement.setAttribute("data-key", sound.key);
        soundBox.appendChild(imageElement);

        const audioElement = new Audio(`${soundBoard.folder}${sound.file}`);
        audioElement.classList.add("audio");
        audioElement.setAttribute("data-key", sound.key);

        // Event listener to reset image rotation when audio ends
        audioElement.addEventListener("ended", () => {
            audioElement.currentTime = 0;
            imageElement.style.transform = "rotate(0deg)";
        });

        soundBox.appendChild(audioElement);
        soundGrid.appendChild(soundBox);

        // Event listener for clicking the sound box
        soundBox.addEventListener("click", () => {
            const audioDuration = audioElement.duration;
            playAudioByKey(sound, audioDuration);
            
        });
    });
}

// Function to play audio by key press
function playAudioByKey(sound, duration) {
    const audioElement = document.querySelector(`.audio[data-key="${sound.key}"]`);
    const imageElement = document.querySelector(`.soundImage[data-key="${sound.key}"]`);

    if (audioElement) {
        audioElement.play();

        const audioDuration = duration || audioElement.duration;

        // Rotate the image by 360 degrees over the duration of the audio
        imageElement.style.transition = `transform ${audioDuration}s linear`;
        imageElement.style.transform = "rotate(360deg)";

        // Reset the rotation after the audio finishes
        setTimeout(() => {
            imageElement.style.transition = "none";
            imageElement.style.transform = "rotate(0deg)";
        }, audioDuration * 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createSoundBoard();

    document.addEventListener("keydown", (event) => {
        if (event.key >= "1" && event.key <= "6") {
            playAudioByKey(event);
        }
    });
});
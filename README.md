# The-Office-Soundboard
 A simpel soundboard with sounds from the Office (US)

# The Office SoundBoard

The Office SoundBoard is a web application that allows you to play sound clips from the TV show "The Office (US)" by clicking on sound boxes or using keyboard shortcuts. Each sound clip is associated with an image, and the image rotates while the sound is playing.

## Features

- Dynamic creation of sound boxes and images.
- Play sound clips by clicking on sound boxes or pressing keyboard shortcuts (1-6).
- Image rotation synchronized with sound clip duration.


## Usage

- Click on a sound box to play the associated sound clip. The image will rotate while the sound is playing.
- Press keys 1 to 6 on your keyboard to play the corresponding sound clips.

## Sound Clips and Images

The sound clips and images are defined in the `soundBoard` object in the `script.js` file. You can add, remove, or modify sound clips and images by editing this object.

```javascript
const soundBoard = {
    folder: "sound/",
    sounds: [
        {
            file: "identity.mp3",
            name: "Identity",
            key: "1",
            image: "identity.jpg"
        },
        // Add more sound objects here
    ]
};

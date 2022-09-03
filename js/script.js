const myMusicList = [
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/4HOsVv1uK6DS0gYKBCWMGv?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/6CES1554HcWMIVroJfmmBm?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/1KO4aiGkvF1eMTBrzL4vAd?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/5O918Wom2bZeRPScMG5Jtd?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/2IOFZdYYkFxEHVz1w34PoL?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/5czZkLGepjburbkbEaCfm4?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/2DFi8rwHcVkTTgu7PULhtI?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/7uhINGViZPygI2AljxO8KN?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/2iUmqdfGZcHIhS3b9E9EWq?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
  "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/1UqhkbzB1kuFwt2iy4h29Q?utm_source=generator' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

//create the remove/hide functionality when clicking the button
button.addEventListener("click", function () {
    mySongs(myMusicList);
    mixList.classList.remove("hide");
    button.classList.add("hide");
})

total.innerText = `My current top ${myMusicList.length} songs ✨`;

// function that turns array into html list elements
const mySongs = function(songs) {
    // this is how we are able to access each string in the list we made
    songs.forEach(function (song, index) {
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;

        mixList.append(li);
    })
}
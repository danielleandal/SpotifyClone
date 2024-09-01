
var audio = document.getElementById("audio");
var source = document.getElementById("audioSource");
var playIcon = document.getElementById('play-button-icon');
var playToggle = false;
var activeMusic = 1;


const music = [{
    id : 1,
    singer:"BINI",
    title: "Karera",
    song : "musics/BINI - Karera (Lyrics).mp3",
    art: "albumart/artbini.webp"
},
{
    id : 2,
    singer:"BINI",
    title: "Pantropiko",
    song : "musics/BINI - Pantropiko (Lyrics).mp3",
    art: "albumart/artbini.webp"
},
{
    id : 3,
    singer:"BINI",
    title: "Salamin",
    song : "musics/BINI - Salamin, Salamin (Lyrics).mp3",
    art: "albumart/artbini.webp"
},
{
    id : 4,
    singer:"BINI",
    title: "Cherry On Top",
    song : "musics/BINI _ 'Cherry On Top' Official Lyric Video.mp3",
    art: "albumart/artbini.webp"
},
{
    id : 5,
    singer:"Hey Avi",
    title: "Billie Jean",
    song : "musics/Hev Abi - Unreleased (billie jean) (Lyrics).mp3",
    art: "albumart/heyAvi.jpg"
},
{
    id : 6,
    singer:"Zac Brown",
    title: "Chicker Fried",
    song : "musics/Chicken Fried - Zac Brown Band (Lyrics).mp3",
    art: "albumart/zacbrown.jpeg"
},
{
    id : 7,
    singer:"Kali Uchis",
    title: "Never Be Yours",
    song : "musics/KALI UCHIS - NEVER BE YOURS.mp3",
    art: "albumart/KaliUchis.jpg"
},
{
    id : 8,
    singer:"Mac DeMarco",
    title: "Heart to Heart",
    song : "musics/Mac DeMarco - Heart To Heart (Lyrics).mp3",
    art: "albumart/Mac.jpeg"
},
{
    id : 9,
    singer:"TJ Monterde",
    title: "Palagi",
    song : "musics/Palagi (Live at The Cozy Cove) - TJ Monterde.mp3",
    art: "albumart/TJ.jpg"
},
{
    id : 10,
    singer:"Sarah Geronimo",
    title: "Maybe This Time",
    song : "musics/Sarah Geronimo - Maybe This Time (Lyrics).mp3",
    art: "albumart/sarah.jpg"
},
{
    id : 11,
    singer:"Hey Avi",
    title: "Billie Jean",
    song : "musics/Hev Abi - Unreleased (billie jean) (Lyrics).mp3",
    art: "albumart/heyAvi.jpg"
},
]

// goes through all the music in the music onject array
for(var i =0; i< music.length;i++){
    //innerHTML, prints the everything inside `` to the main HTML file where song-list is 
    document.getElementById("song-list").innerHTML += 
    // the id, class and onlick features is to keeps track of what can be done on the the whole "tr" list
    // so when "onClick", it calls the playmusic function
   `<tr  id="track${music[i].id}" class="tracks" onClick="playMusic('${music[i].song}', ${music[i].id});">
        <td>${music[i].id}</td>
        <td>
            <img  src="${music[i].art}"style="height:60px; width: auto;" />
        </td>
        <td>${music[i].title}</td>
        <td>${music[i].singer}</td>
        <td>Album</td>
        <td>Date Added</td>
        <td>#</td>
    </tr>`
}

// plays the music
function playMusic(src, id){
    
    source.src = src;
    audio.load();
    audio.play();

    styleActiveTrack(id);
  
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");

}

function styleActiveTrack(id){
   
    // gets the tracks sections
    var elements = document.getElementsByClassName('tracks');
    for(var i=0;i<elements.length ;i++){
        elements[i].classList.remove("active");
    }

    activeMusic = id;
    playToggle = true;
    // set the new one to be active
    document.getElementById('track' +id).classList.add("active");
}

function playPause(){

    if(playToggle== true){ 
        // were gonna pause
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        playToggle = false;
        audio.pause();
    }
    else{ // else were playing it 
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        playToggle = true;
        audio.play();
      
    }

  
 

}

function next(){

    //gets the id for the next song
    let nextMusicID = parseInt(activeMusic) +1;
    // makes sure it within the boundaries
    // if nextMusicID <= music.length, then getActiveMusic(nextMusicID) else, getActiveMusic(1);
    var gotMusic = (nextMusicID <= music.length) ? getActiveMusic(nextMusicID) : getActiveMusic(1);
    playMusic(gotMusic.song,gotMusic.id);
}

function prev(){

    let prevMusicID = parseInt(activeMusic) - 1;
    var gotMusic = (prevMusicID > 0) ? getActiveMusic(prevMusicID) : getActiveMusic(1);
    playMusic(gotMusic.song,gotMusic.id);
}

// finds the active music in the object array 
function getActiveMusic(id){
    for(var i=0;i<music.length ;i++){
       if(music[i].id == id){
        return music[i];
       }
    }
}

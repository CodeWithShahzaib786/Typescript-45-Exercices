//Define make_album functions

function make_album(artist_name : string , album_title: string , tracks? : number){
    let music_Album: {artist:string , title: string , tracks? : number } = {
        artist : artist_name,
        title : album_title,
    }
    if(tracks != undefined){
       music_Album.tracks = tracks
    }

    return(music_Album)
};

// calling three functions and creating three variables with different values

let music_Album1 = make_album("Shahzaib", "Music1");

let music_Album2 = make_album("Shafey", "Music2");

// Calling a make_album function with third parameter
let music_Album3 = make_album("Uzair", "Music3" , 5);

// printing the variables

console.log(music_Album1);
console.log(music_Album2);
console.log(music_Album3);



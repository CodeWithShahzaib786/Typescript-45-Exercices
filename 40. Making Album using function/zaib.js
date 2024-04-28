//Define make_album functions
function make_album(artist_name, album_title, tracks) {
    var music_Album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks != undefined) {
        music_Album.tracks = tracks;
    }
    return (music_Album);
}
;
// calling three functions and creating three variables with different values
var music_Album1 = make_album("Shahzaib", "Music1");
var music_Album2 = make_album("Shafey", "Music2");
// Calling a make_album function with third parameter
var music_Album3 = make_album("Uzair", "Music3", 5);
// printing the variables
console.log(music_Album1);
console.log(music_Album2);
console.log(music_Album3);

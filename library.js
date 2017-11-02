var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (musicLibrary) {
  var thePlaylists = musicLibrary["playlists"];
  for (var eachList in thePlaylists) {
    var listItems = thePlaylists[eachList];
    var numOfTracks = listItems.tracks.length;
    console.log(listItems["id"] + ": " + listItems["name"] + " - " + numOfTracks + " tracks");
  }
};

// THIS ONE WORKS
// Uncomment lower line to test
// printPlaylists(library);

// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (musicLibrary) {
  var allTracks = musicLibrary["tracks"];
  for (var track in allTracks) {
    var tracks = allTracks[track];
    console.log(tracks["id"] + ": " + tracks["name"] + " by " + tracks["artist"] + " (" + tracks["album"] + ")");
  }
};

// THIS ONE WORKS
// Uncomment lower line to test
// printTracks(library);




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  // This code prints the specified playlist details
  var theID = playlistId;
  var playlists = library["playlists"];
  var allTracks = library["tracks"];
  var selectedPlaylist = playlists[theID];
  var numOfTracks = selectedPlaylist.tracks.length;
  console.log(selectedPlaylist["id"] + ": " + selectedPlaylist["name"] + " - " + numOfTracks + " tracks");

  // This code prints the playlist track details
  var tracksInPlaylist = selectedPlaylist["tracks"];

  for (i = 0; i < tracksInPlaylist.length; i++) {
    var specificTrack = tracksInPlaylist[i];
    var trackDetails = allTracks[specificTrack];
    console.log(trackDetails["id"] + ": " + trackDetails["name"] + " by " + trackDetails["artist"] + " (" + trackDetails["album"] + ")");
  }
};

// THIS ONE WORK
// Uncomment lower lines to test
// printPlaylist ("p01");
// printPlaylist ("p02");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var theTrackID = trackId;
  var thePlayList = playlistId;
  var playlists = library["playlists"];
  var specificPlayList = playlists[thePlayList];
  specificPlayList["tracks"].push(theTrackID);
}

// THIS ONE WORKS
// addTrackToPlaylist("t02", "p02");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var theLibrary = library["tracks"];
  var trackID = uid();
  var trackInfo = {};
  trackInfo["id"] = trackID;
  trackInfo["name"] = name;
  trackInfo["artist"] = artist;
  trackInfo["album"] = album;
  theLibrary[trackID] = trackInfo;
};

addTrack ("song name", "artist name", "album name");
addTrack ("song name2", "artist name2", "album name2");
console.log(library["playlists"]);

// adds a playlist to the library

var addPlaylist = function (name) {
  var thePlaylists = library["playlists"];
  var playID = uid();
  var playListInfo = {};
  playListInfo["id"] = playID;
  playListInfo["name"] = name;
  playListInfo["tracks"] = [];
  thePlaylists[playID] = playListInfo;
};

addPlaylist("test play list");

console.log(library["playlists"]);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
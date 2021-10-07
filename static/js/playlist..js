Amplitude.init({
    songs: [
      {
        "name": "Risin'",
        "artist": "Mississippi Reaper",
        "album": "We Are to Answer",
        "url": "/songs/risin.mp3",
        "cover_art_url": "../album-art/we-are-to-answer.jpg"
      },
      {
        "name": "The Gun",
        "artist": "Mississippi Reaper",
        "album": "Ask The Dust",
        "url": "../songs/08 The Gun.mp3",
        "cover_art_url": "../album-art/ask-the-dust.jpg",
      },
      {
        "name": "Anvil",
        "artist": "Mississippi Reaper",
        "album": "Anvil",
        "url": "../songs/LORN - ANVIL.mp3",
        "cover_art_url": "../album-art/anvil.jpg",
      }
    ],
  
  
    playlists: {
      "ancient_astronauts": {
        songs: [0, 3],
        title: 'Best of Ancient Astronauts'
      },
      "trip_hop": {
        songs: [1, 2, 5, 6, 7, 8]
        title: 'Trip Hop Mix 2018',
        author: 'Dan Pastori'
      },
      "emancipator": {
        songs: [4, 9, {
          "name": "Anthem",
          "artist": "Emancipator",
          "album": "Soon It Will Be Cold Enough",
          "url": "../songs/Anthem-Emancipator.mp3",
          "cover_art_url": "../album-art/soon-it-will-be-cold-enough.jpg"
        }],
        title: 'Emancipator\'s Greatest Hits'
      }
    }
  });
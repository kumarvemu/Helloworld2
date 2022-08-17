import { useState } from "react";
import Song from "./Song"

const SongList = () => {

    const initialSongs = [
        {name : "Hooked on a feeling", singer : "Blue Suede", votes: 0},
        {name : "Free Bird", singer : "Leonard Skinnered", votes : 0},
        {name : "Teenage Kicks", singer: "Undertones", votes : 0},
        {name : "Let it be", singer: "Beatles", votes: 0}
    ];

    const [songs, setSongs] = useState(initialSongs);
    
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    const voteForSong = (arrayPosition) => {
        // //step1 = create a new array of songs, where we update the vote number as relevant
        // const songToVote = songs[arrayPosition];
        // const updatedSong = {...songToVote, votes: songToVote.votes + 1};
        // let tempSongs = [...songs];
        // tempSongs[arrayPosition] = updatedSong;
        // console.log(arrayPosition, updatedSong)
        // //step2 = call the setter method passing the new array of songs
        // setSongs(tempSongs);

        const tempSongs = songs.map
        ( (it, idx) => idx === arrayPosition ? {...it, votes: it.votes + 1} : it);
        setSongs(tempSongs);

    }

    const displaySongs = songs.map ( (it,index) =>
        <Song key={index} song={it} voteFunction={() => voteForSong(index) } />   )

    console.log(displaySongs);
    
    return <div>
        <h2>The songs are</h2>
        <button onClick={toggleVisibility}>{visible ? "hide" : "show"} songs</button>

        <ul style={{display: visible ? "block" : "none"}}  >
            {displaySongs}
        </ul>
       
    </div>;
}

export default SongList;


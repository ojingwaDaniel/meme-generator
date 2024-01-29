import { useState } from "react";
import memeData from "../memeData";
export default function Meme() {
  const [memeImage, setMemeImage] = useState('')
  
    function getImageUrl() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length + 1)
        const url = memeArray[randomNumber].url
        setMemeImage(url)
    }
        
  return (
    <main>
      <div  className="meme-form">
        <input type="text" name="" id="" placeholder=" Top Text..." />
        <input type="text" name="" id="" placeholder=" Botton Text..." />
        <button type="button" onClick={getImageUrl}>Get a new meme image 🖼</button>
      </div>
      <img src= {memeImage} alt=""  className="meme-image" />
    </main>
  );
}


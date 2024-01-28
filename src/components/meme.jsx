import memeData from "../memeData";
export default function Meme() {
    function getImageUrl() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length + 1)
        const url = memeArray[randomNumber].url
        console.log(url)
    }
        
  return (
    <main>
      <div  className="meme-form">
        <input type="text" name="" id="" placeholder=" Top Text..." />
        <input type="text" name="" id="" placeholder=" Botton Text..." />
        <button type="button" onClick={getImageUrl}>Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
// state in react
 const result = React.useState("Yes");
 console.log(result);
 return (
   <div className="state">
     <h1 className="state--title">Is state important to know?</h1>
     {/* <div className="state--value">
       <h1>{result[0]}</h1>
     </div>
   </div> */}
 );

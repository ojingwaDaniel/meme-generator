export default function Meme() {
  return (
    <div className="meme">
      <div className="input-form">
        <form action="" className="input-form-1">
          <label htmlFor="">Top text</label>
          <input type="text" name="" id="" placeholder=" type in a text..." />
        </form>
        <form action="">
          <label htmlFor="">Bottom text</label>
          <input type="text" name="" id="" placeholder="type a text..." />
        </form>
      </div>
      <button type="button">Get a new meme image 🖼</button>
    </div>
  );
}

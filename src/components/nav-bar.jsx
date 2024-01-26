import memeLogo from "../images/Troll Face.png";
export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="app-info">
        <img src={memeLogo} alt="meme-logo" />
        <span className="app-name">Meme Generator</span>
      </div>

      <p>React Course - Project 3</p>
    </div>
  );
}

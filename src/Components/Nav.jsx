import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-style"><Link to="/" className="nav-option">Home</Link></div>
      <div className="nav-style"><Link to="/example-portfolio" className="nav-option">Example Portfolio</Link></div>
      <div className="nav-style"><Link to="/colour-generator" className="nav-option">Colour Generator</Link></div>
      <div className="nav-style"><Link to="/colour-coding" className="nav-option">Colour Coding</Link></div>
      <div className="nav-style"><Link to="/bar-chart" className="nav-option">Bar Chart</Link></div>
      <div className="nav-style"><Link to="/country-generator" className="nav-option">Country Generator</Link></div>
      <div className="nav-style"><Link to="/season" className="nav-option">Seasons</Link></div>
      <div className="nav-style"><Link to="/event-handling" className="nav-option">Event Handling</Link></div>
      <div className="nav-style-last"><Link to="/form" className="nav-option">Form</Link></div>
    </nav>
  );
}
export default Nav;
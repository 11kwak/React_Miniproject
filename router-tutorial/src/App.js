import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/profile/velopart">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">길동 프로필</Link>
        </li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="profile/:username" component={Profile} />
    </div>
  );
}

export default App;

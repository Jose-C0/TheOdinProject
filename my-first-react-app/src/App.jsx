import "./App.css";
import { Link } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav>
        <Profile name="Mauricio" age={63} />
        <Profile name={100} age="Mauricio" />
        <Profile name={[]} />
        <Profile />
      </div>
      <p className="read-the-docs">Hello World!</p>
    </>
  );
}

export default App;

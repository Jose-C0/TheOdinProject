import "./App.css";
import Profile from "./Components/Profile";
function App() {
  return (
    <>
      <div className="App">
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

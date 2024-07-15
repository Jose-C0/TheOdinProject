// import "./App.css";

// function App() {
//   return (
//     <>
//       <p className="read-the-docs">Hello World!</p>
//     </>
//   );
// }

// export default App;
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

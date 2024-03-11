import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{width: "3rem", height: "3rem"}}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div> */}
      <HomePage/>
    </div>
  );
}

export default App;

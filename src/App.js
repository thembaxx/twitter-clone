import "./App.css";
import Aside from "./Aside";
import Sidebar from "./sidebar/Sidebar";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <main>
        <Timeline />
        <Aside />
      </main>
    </div>
  );
}

export default App;

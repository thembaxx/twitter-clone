import "./App.css";
import Aside from "./Aside";
import Sidebar from "./sidebar/Sidebar";
import Timeline from "./Timeline";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Timeline />
        <Aside />
      </main>
    </div>
  );
}

export default App;

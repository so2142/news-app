// App.tsx

import Header from "./compornents/header";
import TodayNews from "./compornents/TodayNews";
import Topics from "./compornents/topics";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodayNews />
      <Topics />
    </div>
  );
}

export default App;
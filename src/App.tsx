// App.tsx

import Header from "./compornents/header/header";
import TodayNews from "./compornents/article/TodayNews";
import Topics from "./compornents/article/topics";
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
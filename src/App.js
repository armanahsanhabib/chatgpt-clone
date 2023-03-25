import './assets/css/App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App flex h-screen">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
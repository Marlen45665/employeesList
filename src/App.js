import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import './App.css';

function App() {
  console.log("рендер App")
  return (
    <div className="view">
      <Navigation/>
      <Content/>
    </div>
  );
}

export default App;

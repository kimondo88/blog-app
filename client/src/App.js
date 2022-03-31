import './App.css';
import Nav from './feature/navbar/navbar'
import Content from './feature/content/content'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <div className='parallax'></div>
      <Content/>
    </div>
  );
}

export default App;

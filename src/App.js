import './App.css';
import logoball from "./image/ultra-ball.png";
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <div className='container'>
      <p>p</p> <Logoball src={logoball}/>  <p>kemon</p>
      </div>
    </div>
  );
}

export default App;
const Logoball = styled.img`
 width: 100px;
 height:100px;
`
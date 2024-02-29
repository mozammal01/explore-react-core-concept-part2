import './App.css'
import Counter from './Counter'
import Freinds from './Friends'
import Team from './Team'
import User from './Users'

function App() {

  function handleClick() {
    alert('Why you clikced this button, Close it now')
  }

  const handleClick2 = () => {
    alert('Prothom ta na korsi ai jonno ditiota click korsos tor shahos to kom na ... Taratari close kor')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concept part 2</h3>

      <Freinds></Freinds>

      <Team></Team>


      {/* <User></User> */}
      
      {/* <Counter></Counter> */}

      
      {/* 
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={handleClick2}>Click 2</button>
      <br />
      <button onClick={() => { alert('Third button clicked by you') }}>Third</button>
      <br />
      <button onClick={() => addToFive(55)}>Four</button> */}

      
    </>
  )
}

export default App

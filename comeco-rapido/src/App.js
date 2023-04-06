import Button from "./components/Button";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  
  }
  return (
    <div>
      <h1>Começando com React</h1>
      <Button count={count} onClick={handleClick}/>
      <Button  count={count} onClick={handleClick}/>
      <Profile/>
      <ShoppingList/>
    </div>
  );
}

export default App;

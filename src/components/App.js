import react  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Item from "./Item";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setisDark] = useState(false)
  const appClass = false ? "App dark" : "App light"


  function HandleClick(){
    setisDark((isDark)=>!isDark)

  }


  return (
    <div className={isDark? "App dark":"App light"}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={HandleClick}>{isDark?"Dark Mode":"Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
      <Item/>
    </div>
  );
}

export default App;

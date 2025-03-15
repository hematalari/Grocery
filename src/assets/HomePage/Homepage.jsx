import React, {useState} from 'react'
import Home from '../Home/Home'
import Food from '../FoodDisplay/Food'
import Appdownload from '../Appdownload/Appdownload'
import Catogies from '../Catogies/Catogries'
import List from '../List/List'

const Homepage = () => {
    const [category, setCategory]= useState("All");
  return (
    <div>
        <List />
        <Home />
        <Catogies category={category} setCategory={setCategory}/>
        <Food category={category}/>
        <Appdownload />
    </div>
  )
}

export default Homepage
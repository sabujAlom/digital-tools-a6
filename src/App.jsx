
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import GetStartedStep from './components/GetStartedStep'
import Models from './components/Models'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import Rating from './components/Rating'
import Workflow from './components/Workflow'
import Cart from './components/Cart'


const getmodels = async ()=>{
   const res = await fetch("/models.json");
   return res.json();
};
 
const modelPromise = getmodels();


function App() {
  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])
  

  return (
    <>
     <Navbar/>
     <Banner/>
     <Rating/>
      

        <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={()=>setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={()=>setActiveTab("cart")}
          
        />
      </div>

      {
        activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>
      }
      {
        activeTab === "cart" &&  <Cart carts={carts} setCarts={setCarts}/>
      }

     


     <GetStartedStep/>
      <PricingSection/>
      <Workflow/>
     <Footer/>
     
    </>
  )
}

export default App

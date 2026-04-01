
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import GetStartedStep from './components/GetStartedStep'
import Models from './components/Models'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import Rating from './components/Rating'
import Workflow from './components/Workflow'

const getmodels = async ()=>{
   const res = await fetch("/models.json");
   return res.json();
}
 
const modelPromise = getmodels();


function App() {
  

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
          
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart`}
          
        />
      </div>

     <Models modelPromise={modelPromise}/>
      



     <GetStartedStep/>
      <PricingSection/>
      <Workflow/>
     <Footer/>
    </>
  )
}

export default App

import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react"



function App() {
  const loadCoffees = useLoaderData()
  const [coffees,setCoffees]= useState(loadCoffees)

  return (
    <div>
     
      <h1 className=' text-4xl text-center'>Our Popular Product :{coffees.length}</h1>
     <div className="mx-auto flex justify-center mt-10"><Link to={'/addCoffee'} > <button className="btn bg-yellow-700 border-none">Add Coffee</button></Link></div>

     <div className="grid md:grid-cols-2 mt-10 gap-3">
      {
        coffees.map(coffee=><CoffeeCard coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id}></CoffeeCard>)
      }
     </div>
    </div>
   
  )
}

export default App

import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);


  useEffect(() => {
    const fetchSmoothies = async() =>{
      const {data, error} = await supabase
      .from('smoothies') //name on tableonsupabase
      .select() //grabs all items in specified table when blank

      if(error){
        setFetchError('Could not fetch the smoothies');
        setSmoothies(null)
        console.log(error)
      
      }

      if(data){
        setSmoothies(data);
        setFetchError(null)
      }

      
    }
    fetchSmmothies() //function call
          
  }, [])

  
  return (
    <div className="page home">
    {fetchError && (<p>{fetchError}</p>)}
    {smoothies && ( <div>
      {smoothies.map(smoothie =>(
        <p>{smoothie.title}</p>
      ))}
      </div> )}
      
    </div>
  )
}

export default Home
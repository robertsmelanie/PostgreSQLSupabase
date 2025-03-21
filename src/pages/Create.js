import { useState } from "react"
import supabase from '../config/supabaseClient'
import {useNavigate} from 'react-router-dom'

const Create = () =>{
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  
  const [formError, setFormError] = useState(null)

  

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!title || !method || !rating ){

      setFormError('Please fill in all the fields');
      return
    }
    console.log(title,rating,method)
    const {data, error} = await supabase
      .from('smoothies')
      .insert([{title, method, rating}])

        if(error){
          console.log(error)
          setFormError('Please fill in all fields');

        }
     
      
          setFormError(null)
          navigate("/")
     

    
  }
  return (
    <div className="page create">
      <h2>Create</h2>
       
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />

       


        <label htmlFor="method">Method:</label>
        {/* <time dateTime=""></time> */}
        <textarea
        type="text"
        id="method"
        value={method}
        onChange={(e) => setMethod(e.target.value)} />

        <label htmlFor="rating">Rating:</label>
        <input 
        type="text"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)} />
        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

  


export default Create
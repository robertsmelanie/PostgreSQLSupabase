import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  return (
    <div className="page create">
      <h2>Create</h2>
    </div>
  )
}
<form onsubmit={handleSubmit}>
  <label htmlFor="title">Title:</label>
  <input 
    type="text"
    id="title"
    value={title}
    onChange={(e) => setTitle(e.target.value)} />

    <label htmlFor="method">Method:</label>
    <textarea
     type="text"
      id="method"
      value={method}
      onChange={(e) => setMethod(e.target.value)}/ >

      
</form>
<input type="text" />

export default Create
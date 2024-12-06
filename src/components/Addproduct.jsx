import React, { useState } from 'react'

const Addproduct = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddProduct = () => {
        console.log('Title:', title);
        console.log('Description:', description);
      
        if (!title.trim() || !description.trim()) {
          alert('Please enter all fields');
          return;
        }
      
        fetch('http://localhost:3000/api/product/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
      };
      
  return (
    <div className='mt-10 p-10 flex justify-center'>
      <input 
        type="text" 
        placeholder='Title'  
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder='Description' 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  )
}

export default Addproduct;

import React, { useState } from 'react'

const AddProduct = () => {


    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [img , setImg] = useState('')
    const [error, setError] = useState(false);

    const addProduct = async () => {
        console.log(name, price, category, company);


        if (!name || !price || !category || !company || !img) {
            setError(true);
            return false;
        }



        let userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company, userId ,img}),
            headers: { "Content-Type": "application/json" }
        });

        result = await result.json();
        console.log(result)
    

    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" className='inputbox' placeholder='Enter Car Name'
                onChange={(e) => setName(e.target.value)} value={name} />
            {error && !name && <span className='invalid-input'>Enter Valid Name</span>}

            <input type="text" className='inputbox' placeholder='Enter Car Price'
                onChange={(e) => setPrice(e.target.value)} value={price} />
            {error && !price && <span className='invalid-input'>Enter Valid Price</span>}

            <input type="text" className='inputbox' placeholder='Enter Car Category'
                onChange={(e) => setCategory(e.target.value)} value={category} />
            {error && !category && <span className='invalid-input'>Enter Valid Category</span>}

            <input type="text" className='inputbox' placeholder='Enter Car Company'
                onChange={(e) => setCompany(e.target.value)} value={company} />
            {error && !company && <span className='invalid-input'>Enter Valid company</span>}

            
            <input type="text" className='inputbox' placeholder='Enter img url'
                onChange={(e) => setImg(e.target.value)} value={img} />
            {error && !img && <span className='invalid-input'>Enter Valid company</span>}


            
            <button  className='appButton' onClick={addProduct}>Add Car</button>
        </div>
    )
}

export default AddProduct

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {


    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }


    const updateProduct = async () => {
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {

            method: "PUT",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/');

    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" className='inputbox' placeholder='Enter Car Name'
                onChange={(e) => setName(e.target.value)} value={name} />


            <input type="text" className='inputbox' placeholder='Enter Car Price'
                onChange={(e) => setPrice(e.target.value)} value={price} />


            <input type="text" className='inputbox' placeholder='Enter Car Category'
                onChange={(e) => setCategory(e.target.value)} value={category} />

            <input type="text" className='inputbox' placeholder='Enter Car Company'
                onChange={(e) => setCompany(e.target.value)} value={company} />


            <button className='appButton' onClick={updateProduct}>Update Car</button>
        </div>
    )
}

export default UpdateProduct;

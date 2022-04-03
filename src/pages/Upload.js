import React from 'react'
import { Button } from 'web3uikit'
import { useMoralis, useMoralisFile } from 'react-moralis'
import { useFormik } from 'formik'
import Input from '../components/Input'

export default function Upload() {
    
    const {values, handleChange, handleSubmit} = useFormik({
        onSubmit: async (v, h) => {
            console.log(v)
        },
        initialValues: {
            scene: null,
            logo: null,
            movie: null
        }
    })

    return (
        <form onSubmit={handleSubmit}> 
            <Input name='scene'>
                <input type='file' onChange={handleChange} value={values.scene} />
            </Input>
            <Input name='logo'>
                <input type='file' onChange={handleChange} value={values.logo}/>
            </Input>
            <Input name='movie'>
                <input type='file' onChange={handleChange} value={values.video}/>
            </Input>
            <button type='submit'>
                Create Movie
            </button>
       </form>
    )
}
import  { useState } from 'react'
import { Button } from 'web3uikit'
import { useMoralis, useMoralisFile } from 'react-moralis'
import { useFormik } from 'formik'
import Input from '../components/Input'

export default function Upload() {
    
    let [scene, setScene] = useState('')
    let [logo, setLogo] = useState('')
    let [movie, setMovie] = useState('')

    function handleSubmission() {
        console.log({
            scene,
            logo,
            movie
        })
    }

    return (
        <>
            HELLO WORLD
            <form onSubmit={() => handleSubmission()} style={{ color: 'white'}}>
                Hello World
                <Input name='scene'>
                    <input type='file' onChange={e => setScene(e.target.files)} />
                </Input>
                <Input name='logo'>
                    <input type='file' onChange={e => setLogo(e.target.files)} />
                </Input>
                <Input name='movie'>
                    <input type='file' onChange={e => setMovie(e.target.files)} />
                </Input>
                <Button theme='primary' type='submit'>
                    Create Movie
                </Button>
            </form>
        </>
    )
}
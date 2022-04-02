import { movies } from "../helpers/library"
import { Button, Modal } from 'web3uikit'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../pages/Home.css'

export default function Movies() {

    const [visible, setVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState()
    const navigate = useNavigate()

    return (
        <>
        <div className='scene'>
            <img
                src={movies[0].Scene}
                className='sceneImg'
            />
            <img
                className='sceneLogo'
                src={movies[0].Logo}
            />
            <p
                className='sceneDesc'
            >
                {movies[0].Description}
            </p>
                <div className='playButton'>
                    <Button
                        icon='chevronRightX2'
                        text='Play'
                        theme='secondary'
                        type='button'
                    />
                    <Button
                        icon='plus'
                        text='Add to My List'
                        theme='translucent'
                        type='button'
                    />
                   
            </div>
        </div>
        <div className='title'>
            Movies
        </div>
        <div className='thumbs'>
            {movies && movies.map(e => {
                return (
                    <img
                        key={e.Thumnbnail}
                        src={e.Thumnbnail}
                        className='thumbnail'
                        onClick={() => {
                            setSelectedFilm(e)
                            setVisible(true)
                        }}
                    />
                ) 
            })}   
        </div>    
        {selectedFilm && (
            <div>
                <Modal
                    onCloseButtonPressed={() => {
                            console.log('Closing')
                            setVisible(false)
                    }}
                    isVisible={visible}
                    hasFooter={false}
                    width='1000px'
                >
                    <div className='modalContent'>
                        <img src={selectedFilm.Scene} className='modalImg' />
                            <img className='modalLogo' src={selectedFilm.Logo} />
                            <div className='modalPlayButton'>
                                <Button
                                    icon='chevronRightX2'
                                    text='Play'
                                    theme='secondary'
                                    type='button'
                                    onClick={() => {
                                        navigate('/player', {
                                            state: selectedFilm.Movie
                                        })
                                    }}
                                />
                                <Button
                                    icon='plus'
                                    text='Add to My List'
                                    theme='translucent'
                                    type='button'
                                />
                            </div>
                            <div className='movieInfo'>
                                <div className='description'>
                                    <div className='details'>
                                        <span>
                                            {selectedFilm.Yaer}
                                        </span>
                                        <span>
                                            {selectedFilm.Duration}
                                        </span>
                                    </div>
                                    {selectedFilm.Description}
                                </div>
                                <div>
                                    Genre:
                                    <span className='deets'>{selectedFilm.Genre}</span>
                                    <br />
                                    Actors:
                                    <span className='deets'>
                                    {selectedFilm.Actors}
                                    </span>
                                </div>
                            </div>
                    </div>        
                </Modal>        
            </div>
        )}  
        </>
    )
}
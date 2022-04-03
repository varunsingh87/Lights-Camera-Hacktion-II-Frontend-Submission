import { Button } from "web3uikit"
import { useNavigate } from "react-router-dom"

export default function Buttons({ onClick, selectedFilm }) {

    let navigate = useNavigate()

    return (
        <>
            <Button
                icon='chevronRightX2'
                text='Play'
                theme='secondary'
                type='button'
                onClick={() => {
                    if (onClick) {
                        onClick()
                    } else {
                        navigate('/player', {
                            state: (selectedFilm.Movie),
                        })
                    }
                }}
            />
            <Button
                icon='plus'
                text='Add to My List'
                theme='translucent'
                type='button'
                onClick={() => {
                    if (onClick) {
                        onClick()
                    }
                }}
            />
        </>
    )
}
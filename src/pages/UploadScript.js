import { useEffect, useState } from "react";
import { useMoralis } from 'react-moralis';
import { useNavigate } from 'react-router-dom';
import "./script.css";
/**
 * Textboxes for each scene
 * Column 1: Dialogue
 * Column 2: Action
 * Column 3: Display
 * @param {*} props 
 * @returns 
 */
export default function UploadScript(props) {
    const [scenes, setScenes] = useState([]);
    const [currentScene, setScene] = useState(1);
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const { Moralis, user } = useMoralis()

    function saveScript() {
        let ScriptDatabase = Moralis.Object.extend('scripts')
        let scripts = new ScriptDatabase()
        scripts.save({
            scenes,
            eth: user.get('ethAddress')
        })
    }

    useEffect(() => {
        async function getScript() {
            let ScriptDB = Moralis.Object.extend('scripts')
            const query = new Moralis.Query(ScriptDB)
            query.equalTo('ethAddress', user.get('ethAddress'))
            const results = await query.find()
            return results[0]
        }
        setScenes(getScript());
    }, [Moralis, name, user])



    const saveScene = (index, newScript) => {
        let newScenes = scenes;
        newScenes[index] = newScript;
        setScenes(newScenes);
    }

    return (
        <form className="script-form">
            <div className="movie-name">
                <label htmlFor="name">Name</label>
                <input type="text" size={50} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="sidebar">
                <button type="button" onClick={() => setScene(1)}>Scene 1</button>
                <button type="button" onClick={() => setScene(2)}>Scene 2</button>
                <button type="button" onClick={() => setScene(3)}>Scene 3</button>
            </div>
            <div className="script">
                <label htmlFor="script">Scene</label>
                <textarea id="script" style={{ resize: "none" }} cols="50" rows="10" onChange={e => saveScene(currentScene, e.target.textContent)}>{scenes[currentScene]}</textarea>
            </div>
            <button className="submit" onClick={() => {
                console.table({
                    curScene: currentScene,
                    scenes,
                    name
                })
                navigate('/submit', {
                    state: name
                })
                saveScript()
            }}>
                Finish Script Builder
            </button>
        </form>
    )
}
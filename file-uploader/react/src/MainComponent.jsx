import { useCallback } from 'react'
import axios from 'axios'

const MainComponent = () => {
    const getAllNumbers = useCallback(async () => {
        const values = await axios.get('/');
    })


    return (
        <div>
            <button onClick={getAllNumbers}> Get all numbers </button>
        </div>
    );

}

export default MainComponent;

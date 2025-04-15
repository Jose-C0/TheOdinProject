import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainComponent = () => {
    const [values, setValues] = useState([]);

    const getAllNumbers = useCallback(async () => {
      const values = await axios.get('/values');
      setValues(values);
    }, []);

    return (
      <div>
       <button onClick={getAllNumbers}> Get all numbers</button>
       <div></div>
       <span> Values </span>
      <div>
        {values.map(item => (
          <p> { item } </p>
        ))}
        
      </div>
      </div>
    )
}

export default MainComponent;
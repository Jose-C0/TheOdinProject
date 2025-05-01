import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchExample () {
  const [backendData, setBackendData] = useState(null);

  const hostApi = import.meta.env.VITE_API_URL;
  const port = import.meta.env.VITE_API_PORT;
  const url = `http://${hostApi}:${port}/api`;
    
  useEffect(() => {
    axios
      .get(`${url}/values`)
      .then((res) => {
        setBackendData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (

    <div>jose</div>
  );
}

export default FetchExample;

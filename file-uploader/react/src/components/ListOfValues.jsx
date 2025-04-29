import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchExample () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiCall =  () => {
    axios.get('api-express/api/values').then((data) => {
    // this console.log will be in our frontend console
      console.log(data);
    });
  };

  console.log(apiCall());
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('api-express/api/values');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.files}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchExample;

import React, { useEffect, useState } from 'react';

function ExternalData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Fel vid hämtning av inlägg:', error));
  }, []);

  return (
    <div>
      <h2>Hämtade Inlägg</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalData;

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://linkvault-favx.onrender.com/api/links')
      .then(res => {
        setLinks(res.data);
        setLoading(false);
      });
  }, []);

  const grouped = links.reduce((acc, link) => {
    acc[link.category] = acc[link.category] || [];
    acc[link.category].push(link);
    return acc;
  }, {});

  return (
    <div className="container">
      {loading ? <div className="loader"></div> :
        Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="category-block">
            <h3>{category}</h3>
            {items.map(link => (
              <div key={link._id} className="link-row">
                <span>{link.name}</span>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <button>Go</button>
                </a>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

import { useEffect, useState } from 'react';
import Cards from './Cards';

const CardLoader = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/featureCards')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFeatured(data);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row flex-wrap items-center justify-center gap-10 mt-20 mx-auto">
        {featured?.map(feature => (
          <Cards key={feature?._id} feature={feature}></Cards>
        ))}
      </div>
    </div>
  );
};

export default CardLoader;

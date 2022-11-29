import type { Plant } from 'entities/plant';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPlantImage } from '../utils/getPlantImage';

interface TileProps {
  isHost: boolean;
  plant: Plant;
}

const Tile: React.FC<TileProps> = ({ plant, isHost }) => {
  const imgUrl = useMemo(() => getPlantImage(plant), [plant]);

  const navigate = useNavigate();

  const moveToPlantDetail = useCallback(() => {
    if (isHost) {
      navigate(`/plant/${plant.letterId}`);
    }
  }, [plant, isHost, navigate]);

  return (
    <button onClick={moveToPlantDetail} className='w-[120px] h-[120px] bg-black bg-opacity-20'>
      <div className='relative overflow-hidden'>
        <img src={imgUrl} alt='직물' />
      </div>
    </button>
  );
};

export default Tile;
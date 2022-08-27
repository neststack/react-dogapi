import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageBox = ({ list }) => {
  return (
    <div className='relative flex justify-center py-11 px-2'>
      <Box>
        <ImageList variant='masonry' cols={3} gap={8}>
          {list.map(({ id, image }) => (
            <ImageListItem key={id}>
              <img
                src={`${image}?w=248&fit=crop&auto=format`}
                alt={id}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default ImageBox;

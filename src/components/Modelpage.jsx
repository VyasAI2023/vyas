import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const Modelpage = () => {
  const navigate = useNavigate();

  const handleSelect = (model) => {
    navigate(`/upload?model=${model}`);
  };

  const models = [
    {
      name: 'Model1: ',
      image: 'https://i.imgur.com/165aGhQ.jpeg',
      description: 'This model is designed for ...'
    },
    {
      name: 'Model2: ',
      image: 'https://i.imgur.com/165aGhQ.jpeg',
      description: 'This model excels in ...'
    },
    {
      name: 'Model3: ',
      image: 'https://i.imgur.com/165aGhQ.jpeg',
      description: 'This model is best suited for ...'
    }
  ];

  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <div className='header text-center my-8'>
        <div className='text'>Models</div>
        <div className='underline'></div>
      </div>
      <div className='card-container flex flex-wrap justify-center gap-4'>
        {models.map((model, index) => (
          <Card className='max-w-xs rounded-xl' key={index}>
            <CardMedia
              component="img"
              height="140"
              image={model.image}
              alt={`Model ${index + 1} Image`}
            />
            <CardContent className='pt-0'>
              <Typography gutterBottom variant="h5" component="div">
                {model.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {model.description}
              </Typography>
            </CardContent>
            <CardActions className='justify-center'>
              <Button
                className="flex items-center mt-auto text-[13px] text-black"
                variant="contained"
                onClick={() => handleSelect(model.name)}
                sx={{
                  backgroundColor: 'rgb(0, 223, 154)',
                  color: 'black',
                  borderRadius: '.375rem',
                  '&:hover': {
                    backgroundColor: 'rgb(0, 183, 124)',
                  },
                }}
              >
                Select
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Modelpage;

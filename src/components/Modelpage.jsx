import React from 'react';
import Navbar from './Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const Modelpage = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/upload');
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text'>Models</div>
        <div className='underline'></div>
      </div>
      <div className='card-container' style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/165aGhQ.jpeg"
            alt="Model Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Model1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              About the model
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: 'rgb(0, 223, 154)',
                color:'black',
                borderRadius: '.375rem', 
                '&:hover': {
                  backgroundColor: 'rgb(0, 183, 124)', 
                },
              }}
              onClick={handleSelect}
            >
              Select
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/165aGhQ.jpeg"
            alt="Model Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Model2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              About the model
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: 'rgb(0, 223, 154)',
                color:'black',
                borderRadius: '.375rem', 
                '&:hover': {
                  backgroundColor: 'rgb(0, 183, 124)', 
                },
              }}
              onClick={handleSelect}
            >
              Select
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/165aGhQ.jpeg"
            alt="Model Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Model3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              About the model
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: 'rgb(0, 223, 154)',
                color:'black',
                borderRadius: '.375rem',
                '&:hover': {
                  backgroundColor: 'rgb(0, 183, 124)', 
                },
              }}
              onClick={handleSelect}
            >
              Select
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Modelpage;

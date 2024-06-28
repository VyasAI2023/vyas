import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/company/blog1');
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text'>Blogs</div>
        <div className='underline'></div><br/><br/>
      </div>
      <div className='card-container' style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 345,borderRadius: '10%' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow relative -top-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>

          <CardContent sx={{ paddingTop: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSelect}>
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345,borderRadius: '10%' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow relative -top-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>

          <CardContent sx={{ paddingTop: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSelect}>
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345,borderRadius: '10%' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow relative -top-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>

          <CardContent sx={{ paddingTop: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSelect}>
              Read More
            </Button>
          </CardActions>
        </Card>
      </div><br/><br/><br/>
      <Footer />
    </div>
  );
};

export default Blog;

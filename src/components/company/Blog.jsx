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
    <div className='container mx-auto px-4'>
      <Navbar />
      <div className='header text-center my-8'>
        <div className='text'>Blogs</div>
        <div className='underline w-16 h-1 mx-auto my-2'></div>
      </div>
      <div className='card-container flex flex-wrap justify-center gap-4'>
        <Card className='max-w-xs rounded-xl'>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between items-center mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow mx-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>
          <CardContent className='pt-0'>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions className='justify-center'>
          <Button class="flex items-center mt-auto text-[13px] text-black" variant="contained" onClick={handleSelect}>
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
            </Button>
          </CardActions>
        </Card>

        <Card className='max-w-xs rounded-xl'>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between items-center mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow mx-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>
          <CardContent className='pt-0'>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions className='justify-center'>
          <Button class="flex items-center mt-auto text-[13px] text-black" variant="contained" onClick={handleSelect}>
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
            </Button>
          </CardActions>
        </Card>

        <Card className='max-w-xs rounded-xl'>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
          <div className="flex justify-between items-center mb-3 text-black mt-4 mx-4">
            <time dateTime="2024-01-06 21:52:42" className="text-sm">06 Jan</time>
            <div className="border-b grow mx-2"></div>
            <a className="text-sm" href="">Admin</a>
          </div>
          <CardContent className='pt-0'>
            <Typography gutterBottom variant="h5" component="div">
              Blog Name:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              context of the blog
            </Typography>
          </CardContent>
          <CardActions className='justify-center'>
          <Button class="flex items-center mt-auto text-[13px] text-black" variant="contained" onClick={handleSelect}>
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
            </Button>
          </CardActions>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

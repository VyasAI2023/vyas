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
    navigate('/');
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
        <div class="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time datetime="2024-01-06 21:52:42" class="text-sm">06 Jan</time>
            <div class="border-b grow relative -top-2"></div>
            <a class="text-sm" href="">Admin</a>
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
          <a class="flex items-center mt-auto text-[13px] text-black" href="/company/Blog1">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
        </a>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345,borderRadius: '10%' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
        <div class="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time datetime="2024-01-06 21:52:42" class="text-sm">06 Jan</time>
            <div class="border-b grow relative -top-2"></div>
            <a class="text-sm" href="">Admin</a>
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
          <a class="flex items-center mt-auto text-[13px] text-black" href="/company/Blog1">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
        </a>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345,borderRadius: '10%' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Model Image"
          />
        <div class="flex justify-between space-x-6 mb-3 text-black mt-4 mx-4">
            <time datetime="2024-01-06 21:52:42" class="text-sm">06 Jan</time>
            <div class="border-b grow relative -top-2"></div>
            <a class="text-sm" href="">Admin</a>
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
          <a class="flex items-center mt-auto text-[13px] text-black" href="/company/Blog1">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
        </a>
          </CardActions>
        </Card>
        
      </div><br/><br/><br/>
      <Footer/>
    </div>
  );
};

export default Blog;

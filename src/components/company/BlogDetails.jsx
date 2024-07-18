import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details from Firebase
    axios.get(`https://vyas-auth-default-rtdb.firebaseio.com/blogs/${blogId}.json`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 text-white">
      <Navbar />
      <div className="header text-center my-8 text-white">
        <Typography variant="h3" component="div" className="font-bold">
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" className='text-white'>
          {blog.date}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className='text-white'>
            {blog.name}
          </a>
        </Typography>
      </div>
      <div className="content my-8 text-white">
        <CardMedia component="img" height="200" image={blog.gifUrl} alt="GIF" className="w-full rounded-xl shadow-lg mb-8" />
        <div className="author flex items-center mb-4 text-white">
          <img src={blog.authorImage} alt="Author" className="w-16 h-16 rounded-full shadow-lg mr-4" />
          <Typography variant="h6" component="div">
            {blog.name}
          </Typography>
        </div>
        <Typography variant="body1" component="div">
          {blog.content}
        </Typography>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;

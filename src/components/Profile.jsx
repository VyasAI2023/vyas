import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const Profile = () => {
  const models = [
    {
      name: 'Linear Regression',
      description: 'A linear approach to modeling the relationship between a dependent variable and one or more independent variables, where the prediction is a continuous value.'
    },
    {
      name: 'Logistic Regression',
      description: 'A statistical method used for binary classification that models the probability of a target variable being one of two possible outcomes based on one or more predictor variables.',
      link: '/logisticregression'
    },
    {
      name: 'Decision Tree',
      description: 'A decision support tool that uses a tree-like model of decisions and their possible consequences.',
      link: '/decisiontree'
    },
    {
      name: 'Random Forest',
      description: 'An ensemble learning method that operates by constructing multiple decision trees.'
    },
    {
      name: 'Support Vector Machine (SVM)',
      description: 'A supervised learning model used for classification and regression analysis.',
      link: '/supportvectormachine'
    },
    {
      name: 'K-Nearest Neighbors (KNN)',
      description: 'A non-parametric method used for classification and regression by comparing distances between points.',
      link: '/knearestneighbors'
    },
    {
      name: 'Naive Bayes',
      description: 'A family of simple probabilistic classifiers based on applying Bayes\' theorem.'
    },
    {
      name: 'Principal Component Analysis (PCA)',
      description: 'A technique for reducing the dimensionality of datasets, increasing interpretability but at the same time minimizing information loss.'
    },
    {
      name: 'Gradient Boosting Machines (GBM)',
      description: 'A machine learning technique for regression and classification problems, which builds a model in a stage-wise fashion.'
    },
    {
      name: 'Neural Networks (Deep Learning)',
      description: 'A set of algorithms, modeled loosely after the human brain, designed to recognize patterns.'
    },
    {
      name: 'Convolutional Neural Networks (CNN)',
      description: 'A class of deep neural networks, most commonly applied to analyzing visual imagery.'
    },
    {
      name: 'Recurrent Neural Networks (RNN)',
      description: 'A class of artificial neural networks where connections between nodes can create a cycle, allowing output from some nodes to affect subsequent input to the same nodes.'
    },
    {
      name: 'Long Short-Term Memory networks (LSTM)',
      description: 'A type of RNN capable of learning order dependence in sequence prediction problems.'
    },
    {
      name: 'Generative Adversarial Networks (GAN)',
      description: 'A class of machine learning frameworks designed by a system of two neural networks competing against each other in a zero-sum game framework.'
    },
    {
      name: 'K-Means Clustering',
      description: 'A method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters.'
    },
    {
      name: 'Hierarchical Clustering',
      description: 'A method of cluster analysis which seeks to build a hierarchy of clusters.'
    },
    {
      name: 'Association Rule Learning (Apriori)',
      description: 'A rule-based machine learning method for discovering interesting relations between variables in large databases.'
    },
    {
      name: 'Collaborative Filtering (Matrix Factorization)',
      description: 'A technique used by recommender systems that makes automatic predictions about the interests of a user by collecting preferences or taste information from many users.'
    },
    {
      name: 'Hidden Markov Models (HMM)',
      description: 'A statistical model that represents a system that transitions between hidden states.'
    },
    {
      name: 'Gaussian Mixture Models (GMM)',
      description: 'A probabilistic model for representing normally distributed subpopulations within an overall population.'
    }
  ];

  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', animation: `${fadeInUp} 4s ease` }}>Let's Train the Model!</div>
        <div className='underline'></div>
      </div>
      <div className='profile-details' style={styles.profileDetails}>
        <h1 className='welcome-text' style={{ color: '#00df9a', textAlign: 'center', marginBottom: '20px' }}>Welcome, User!</h1>
        <div className='card-container' style={styles.cardContainer}>
          {models.map((model, index) => (
            <Card key={index} sx={{ ...styles.card, opacity: 1 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={styles.modelName}>
                  {model.name}
                </Typography>
                <Typography variant="body2" sx={{ ...styles.description, color: '#00df9a' }}>
                  {model.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                {model.link ? (
                  <Link to={model.link} style={{ textDecoration: 'none', width: '100%' }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={styles.button}
                    >
                      Train
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    sx={styles.button}
                    disabled
                  >
                    Train
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  profileDetails: {
    padding: '20px'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    width: 'calc(50% - 40px)', // Adjust width as per your grid setup
    minHeight: '50px', // Fixed height to ensure consistent box size
    margin: '20px',
    textAlign: 'left',
    backgroundColor: 'black',
    color: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.4s',
    cursor: 'pointer',
    borderRadius: '10px', // Rounded corners
    border: '1px solid #ddd', // Border style
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: 'white',
      opacity: 1
    },
  },
  modelName: {
    color: '#00df9a',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '3em', // Larger font size
    marginBottom: '10px'
  },
  description: {
    fontSize: '1.4em', // Increased font size
    marginBottom: '10px',
    lineHeight: '1.5',
    textAlign: 'center',
    color: 'black' // Green color for the description text
  },
  button: {
    backgroundColor: 'rgb(0, 223, 154)',
    color: 'white',
    borderRadius: '.375rem',
    textAlign: 'center',
    width: '50%',
    marginLeft: '140px',
    marginRight: 'auto',
    '&:hover': {
      backgroundColor: 'rgb(0, 183, 124)',
    },
  }
};

export default Profile;

import React from 'react';
import { ReactTyped } from "react-typed";
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
    <div className='container mx-auto'>
      <Navbar />
      <div className='border-b border-t border-slate-700 p-12 px-20 pb-20 pt-20'>
      <div className='flex items-center'>
        <div className='w-1/2'>
          <div className='text-6xl font-semibold text-white'>
            Next-Generation Vision
          </div>
          <div className='text-2xl text-slate-400 mt-6'>
            <ReactTyped
              strings={[
                "Explore high-performance computer vision models",
                "Optimized for your specific dataset requirements",
              ]}
              typeSpeed={140}
              backSpeed={160}
              loop
            />
          </div>
        </div>
        <div className='w-1/2'>
          <img src='https://miro.medium.com/v2/resize:fit:1200/0*415bOphqpjJTGkKR.jpg' alt='Next Generation Vision' className='w-full h-auto' />
        </div>
      </div>
    </div>

      <div className='mt-10 md:flex sm:inline-block text-white px-20'>
        <div className=''>
          <div>
            <div className='font-semibold'>Search Models</div>
            <div className='mt-3'>
              <input type="text"
                placeholder='🔎 Search...'
                className='bg-transparent border rounded p-1 px-3 w-[350px]'
              />
            </div>
          </div>

          <div className='mt-8'>
            <div className='text-semibold text-lg border-b-2 border-slate-800 pb-2'>Filter By Task</div>
            <div className='mt-5 text-slate-300'>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>All Models</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Object Detection</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Classification</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Instance Segmentation</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Semantic Segmentation</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Keypoint Detection</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>Vision-Language</div>
              <div className='cursor-pointer hover:text-slate-400 mb-1'>OCR</div>
            </div>
          </div>

          <div className='mt-8'>
            <div className='border-b-2 border-slate-800 pb-2 text-lg font-semibold'>Filter By Feature</div>
            <div className='mt-3 flex  gap-4'>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Foundation Vision</div>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Multimodal Vision</div>
            </div>
            <div>
              <div className='border rounded-full p-1 w-2/3 mt-2 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>LLMS with Vision Capabilities</div>
            </div>
            <div className='mt-2 flex  gap-4'>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Image Embedding</div>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Real-Time Vision</div>
            </div>
            <div className='mt-2 flex  gap-4'>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Zero-shot Detection</div>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Image Captioning</div>
            </div>
            <div className='mt-2 flex  gap-4'>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Image Similarity</div>
              <div className='border rounded-full p-1 cursor-pointer hover:border-slate-500 text-sm text-slate-300 font-semibold'>Image Tagging</div>
            </div>
          </div>
        </div>

        <div className=' grid md:grid-cols-2 sm:grid-cols-1 w-full gap-6 px-10 '>
            <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
              <div className='flex gap-6'>
                <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="" /></div>
                <div className='font-semibold text-2xl'>Linear Regression</div>
              </div>
              <div className='mt-2 text-slate-400'>
                A linear approach to modeling the relationship between a dependent variable and one or more independent variables, where the prediction is a continuous value.
              </div>
              <div className='flex mt-4'>
                <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                  REGRESSION
                </div>
              </div>
            </div>

          <a href="/modellogisticregression">
            <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
              <div className='flex gap-6'>
                <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000" alt="" /></div>
                <div className='font-semibold text-2xl'>Logistic Regression</div>
              </div>
              <div className='mt-2 text-slate-400'>
                A method used for binary classification that models the probability of a target variable being one of two possible outcomes based on one or more predictor variables.
              </div>
              <div className='flex mt-4'>
                <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                  CLASSIFICATION
                </div>
              </div>
            </div>
          </a>

          <a href="/modeldecisiontree">
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=3QpOTWDqiqQU&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Decision Tree</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A decision support tool that uses a tree-like model of decisions and their possible consequences.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          </a>

          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=97384&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Random Forest</div>
            </div>
            <div className='mt-2 text-slate-400'>
              An ensemble learning method that operates by constructing multiple decision trees.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>

          <a href="/modelsupportvectormachine">
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Support Vector Machine (SVM)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A supervised learning model used for classification and regression analysis.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          </a>

          <a href="/modelknearestneighbors">
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=cx04GeIy2JZ5&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>K-Nearest Neighbors (KNN)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A non-parametric method used for classification and regression by comparing distances between points.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          </a>

          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=44804&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Naive Bayes</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A family of simple probabilistic classifiers based on applying Bayes' theorem.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Principal Component Analysis</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A technique for reducing the dimensionality of datasets, increasing interpretability but at the same time minimizing information loss.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                DIMENSIONALITY REDUCTION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=yjSFO4TGzhsn&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Gradient Boosting Machines (GBM)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A machine learning technique for regression and classification problems, which builds a model in a stage-wise fashion.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=kHa374LPzAvu&format=png&color=228BE6" alt="" /></div>
              <div className='font-semibold text-2xl'>Neural Networks (Deep Learning)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A set of algorithms, modeled loosely after the human brain, designed to recognize patterns.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLASSIFICATION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=QlqmfUp2xkCq&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Convolutional Neural Networks (CNN)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A class of deep neural networks, most commonly applied to analyzing visual imagery.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                OBJECT DETECTION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=Ja6N9gQK99nM&format=png&color=228BE6" alt="" /></div>
              <div className='font-semibold text-2xl'>Recurrent Neural Networks</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A class of artificial neural networks where connections between nodes can create a cycle, allowing output from some nodes to affect subsequent input to the same nodes.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                VISION-LANGUAGE
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=Qf9aBbonWfLd&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Long Short-Term Memory networks (LSTM)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A type of RNN capable of learning order dependence in sequence prediction problems.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                VISION-LANGUAGE
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=JSnLFBKCt9En&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Generative Adversarial Networks (GAN)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A class of machine learning frameworks designed by a system of two neural networks competing against each other in a zero-sum game framework.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                OBJECT DETECTION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=43227&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>K-Means Clustering</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A technique for reducing the dimensionality of datasets, increasing interpretability but at the same time minimizing information loss.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLUSTERING
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=GBu1KXnCZZ8j&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Hierarchical Clustering</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A method of cluster analysis which seeks to build a hierarchy of clusters.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLUSTERING
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=IJyJrL3znN8t&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Association Rule Learning (Apriori)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A rule-based machine learning method for discovering interesting relations between variables in large databases.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                ASSOCIATION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=5xMfU0pOhtpa&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Collaborative Filtering (Matrix Factorization)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A technique used by recommender systems that makes automatic predictions about the interests of a user by collecting preferences or taste information from many users.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                RECOMMENDATION
              </div>
            </div>
          </div>
          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=114910&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Hidden Markov Models (HMM)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A statistical model that represents a system that transitions between hidden states.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                SEQUENCE MODELING
              </div>
            </div>
          </div>

          <div className='border border-slate-900 rounded-xl  p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'><img src="https://img.icons8.com/?size=100&id=ehy8DUWMHmpu&format=png&color=000000" alt="" /></div>
              <div className='font-semibold text-2xl'>Gaussian Mixture Models (GMM)</div>
            </div>
            <div className='mt-2 text-slate-400'>
              A probabilistic model for representing normally distributed subpopulations within an overall population.
            </div>
            <div className='flex mt-4'>
              <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full '>
                CLUSTERING
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Modelpage;

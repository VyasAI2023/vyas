import React, { useState } from 'react';
import Papa from 'papaparse';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const KNearestNeighbors = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [totalColumns, setTotalColumns] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [modelTrained, setModelTrained] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== 'text/csv') {
      setError('Please upload a .csv file.');
      setData([]);
      setTotalColumns(0);
      setTotalRows(0);
      setModelTrained(false);
    } else {
      setError('');
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setTotalColumns(Object.keys(results.data[0]).length);
          setTotalRows(results.data.length);
          setModelTrained(false);
        },
        error: (error) => {
          setError('Error parsing the file.');
          setData([]);
          setTotalColumns(0);
          setTotalRows(0);
          setModelTrained(false);
        }
      });
      console.log('File uploaded:', file);
    }
  };

  const handleTrainModel = () => {
    // Implement training logic here
    // For demonstration purposes, set modelTrained to true
    setModelTrained(true);
  };

  return (
    <div className='container mx-auto' style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '100%' }}>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
          Training Dashboard
        </div>
        <div className='underline' style={{ borderBottom: '2px solid #00df9a', margin: '0 auto 20px', width: '50%' }}></div>
      </div>
      <div className='content'>
        <div className='box border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
          <div className='flex gap-6 justify-center'>
            <div className='my-auto'>
              <img src="https://img.icons8.com/?size=100&id=cx04GeIy2JZ5&format=png&color=000000" alt="" />
            </div>
            <div className='font-semibold text-6xl'>K-Nearest Neighbors Model</div>
          </div>
          <div className='mt-2 text-slate-400 text-center'>
            A simple, non-parametric, and lazy learning algorithm used for classification and regression tasks. It classifies data based on the majority class among its K nearest neighbors.
          </div>
          <div className='flex justify-center mt-4'>
            <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full'>
              INSTANCE SEGMENTATION
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=8m89hFwpmX6a&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Key Concepts</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Distance Metrics: Measures like Euclidean, Manhattan, and Minkowski distances are used to find the nearest neighbors.</li>
              <li>Neighbors: Data points in the dataset that are closest to the input point.</li>
              <li>K: The number of nearest neighbors considered for classification or regression.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=49445&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Applications</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Pattern Recognition: Handwriting and image recognition.</li>
              <li>Recommendation Systems: Suggesting products or content based on user similarity.</li>
              <li>Anomaly Detection: Identifying unusual data points in datasets.</li>
              <li>Medical Diagnosis: Predicting diseases based on patient attributes.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Advantages</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Simple: Easy to implement and understand.</li>
              <li>Versatile: Can be used for both classification and regression tasks.</li>
              <li>No Training Phase: The model is trained during the prediction phase.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=VIv8t3G3jp6o&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Limitations</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Computationally Intensive: Can be slow with large datasets.</li>
              <li>Choice of K: The performance is highly dependent on the choice of K and distance metric.</li>
              <li>Imbalanced Data: May perform poorly with imbalanced datasets.</li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center'>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ color: '#00df9a', fontSize: '1.1em', padding: '8px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '20px' }}
            accept=".csv"
          />
        </div>
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        {data.length > 0 && !modelTrained && (
          <div className='flex justify-center'>
            <button onClick={handleTrainModel} style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '10px' }}>Train Model</button>
          </div>
        )}
        {data.length > 0 && (
          <div style={{ marginTop: '20px', color: '#ffffff', textAlign: 'left' }}>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Columns: {totalColumns}</p>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Rows: {totalRows}</p>
          </div>
        )}
        {modelTrained && (
          <p style={{ color: '#00df9a', marginTop: '10px', textAlign: 'center', fontSize: '1.1em' }}>Model trained successfully!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default KNearestNeighbors;

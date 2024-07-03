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
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
         Training Dashboard
        </div>
        <div className='underline' style={{ borderBottom: '2px solid #00df9a', margin: '0 auto 20px', width: '50%' }}></div>
      </div>
      <div className='content' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='left-column' style={{ width: '30%', textAlign: 'left' }}>
          <h2 style={{ color: '#00df9a', fontSize: '5em', marginBottom: '20px' }}>K-Nearest Neighbors Model</h2>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ color: '#00df9a', fontSize: '1.1em', padding: '8px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer' }}
            accept=".csv"
          />
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {data.length > 0 && !modelTrained && (
            <button onClick={handleTrainModel} style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '10px' }}>Train Model</button>
          )}
        </div>
        <div className='right-column' style={{ width: '65%', padding: '20px', backgroundColor: '#222', borderRadius: '10px' }}>
          <p style={{ color: '#ffffff', fontSize: '1.2em', marginBottom: '20px' }}>
            K-Nearest Neighbors (KNN) is a simple, non-parametric, and lazy learning algorithm used for classification and regression tasks. It classifies data based on the majority class among its K nearest neighbors.
          </p>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginBottom: '10px' }}>Key Concepts</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Distance Metrics: Measures like Euclidean, Manhattan, and Minkowski distances are used to find the nearest neighbors.</li>
            <li>Neighbors: Data points in the dataset that are closest to the input point.</li>
            <li>K: The number of nearest neighbors considered for classification or regression.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Applications</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Pattern Recognition: Handwriting and image recognition.</li>
            <li>Recommendation Systems: Suggesting products or content based on user similarity.</li>
            <li>Anomaly Detection: Identifying unusual data points in datasets.</li>
            <li>Medical Diagnosis: Predicting diseases based on patient attributes.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Advantages</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Simple: Easy to implement and understand.</li>
            <li>Versatile: Can be used for both classification and regression tasks.</li>
            <li>No Training Phase: The model is trained during the prediction phase.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Limitations</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Computationally Intensive: Can be slow with large datasets.</li>
            <li>Choice of K: The performance is highly dependent on the choice of K and distance metric.</li>
            <li>Imbalanced Data: May perform poorly with imbalanced datasets.</li>
          </ul>
          {data.length > 0 && (
            <div style={{ marginTop: '20px', color: '#ffffff', textAlign: 'left' }}>
              <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Columns: {totalColumns}</p>
              <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Rows: {totalRows}</p>
            </div>
          )}
          {modelTrained && (
            <div style={{ marginTop: '20px', color: '#00df9a', textAlign: 'center' }}>
              <p>Model successfully trained!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KNearestNeighbors;

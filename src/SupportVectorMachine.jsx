import React, { useState } from 'react';
import Papa from 'papaparse';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const SupportVectorMachine = () => {
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
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#111', color: '#fff' }}>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
          Support Vector Machine (SVM)
        </div>
        <div className='underline' style={{ borderBottom: '2px solid #00df9a', margin: '0 auto 20px', width: '50%' }}></div>
      </div>
      <div className='content' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', maxWidth: '80%', marginBottom: '30px' }}>
          <h2 style={{ color: '#00df9a', fontSize: '1.75em' }}>Support Vector Machine Model</h2>
          <p style={{ color: '#ffffff', fontSize: '1.2em', marginBottom: '30px' }}>
            Support Vector Machine (SVM) is a supervised learning model used for classification and regression tasks. It finds the optimal hyperplane that maximizes the margin between the different classes.
          </p>
          <h3 style={{ color: '#00df9a', fontSize: '1.5em', marginBottom: '10px' }}>Key Concepts</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Support Vectors: Data points that are closest to the hyperplane.</li>
            <li>Hyperplane: The decision boundary that separates different classes.</li>
            <li>Kernel Trick: Transforms the data to a higher dimension to make it linearly separable.</li>
          </ul>
          <h3 style={{ color: '#00df9a', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Applications</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Text Classification: Spam detection, sentiment analysis.</li>
            <li>Image Classification: Identifying objects in images.</li>
            <li>Bioinformatics: Protein classification, gene expression data analysis.</li>
            <li>Finance: Stock market prediction, credit risk analysis.</li>
          </ul>
          <h3 style={{ color: '#00df9a', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Advantages</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Effective: Works well with high-dimensional data.</li>
            <li>Robust: Handles outliers by maximizing the margin.</li>
            <li>Flexible: Different kernel functions can be used for different data structures.</li>
          </ul>
          <h3 style={{ color: '#00df9a', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Limitations</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Computationally Intensive: Can be slow with large datasets.</li>
            <li>Choice of Kernel: The performance is highly dependent on the choice of kernel and parameters.</li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
          <div style={{ marginBottom: '20px', color: '#ffffff', textAlign: 'left' }}>
            <input 
              type="file" 
              onChange={handleFileUpload} 
              style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer' }} 
              accept=".csv"
            />
            {error && <p style={{ color: 'red', marginTop: '10px', fontSize: '0.9em' }}>{error}</p>}
            {data.length > 0 && !modelTrained && (
              <button onClick={handleTrainModel} style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '10px' }}>Train Model</button>
            )}
          </div>
          {data.length > 0 && (
            <div style={{ color: '#ffffff', textAlign: 'left', marginBottom: '20px', fontSize: '1.1em' }}>
              <p style={{ color: '#ffffff', marginBottom: '5px' }}>Total Columns: {totalColumns}</p>
              <p style={{ color: '#ffffff', marginBottom: '5px' }}>Total Rows: {totalRows}</p>
            </div>
          )}
          {modelTrained && (
            <div style={{ marginTop: '20px', color: '#00df9a', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1em' }}>Model Trained Successfully!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportVectorMachine;

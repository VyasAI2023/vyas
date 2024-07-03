import React, { useState } from 'react';
import Papa from 'papaparse';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const DecisionTree = () => {
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
          <h2 style={{ color: '#00df9a', fontSize: '5em', marginBottom: '20px' }}>Decision Tree Model</h2>
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
            Decision Tree is a non-parametric supervised learning method used for classification and regression. It splits the data into subsets based on the most significant differentiators in the input features.
          </p>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginBottom: '10px' }}>Key Concepts</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Nodes: Represent the attributes based on which the data is split.</li>
            <li>Edges: Represent the outcome of the split to the next node.</li>
            <li>Leaves: Represent the final decision or classification.</li>
            <li>Gini Index/Entropy: Metrics to decide the quality of a split.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Applications</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Medical Field: Diagnosis of diseases based on patient attributes.</li>
            <li>Marketing: Customer segmentation based on purchasing behavior.</li>
            <li>Finance: Risk analysis and credit scoring.</li>
            <li>Manufacturing: Predictive maintenance and quality control.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Advantages</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Interpretable: Easy to visualize and understand.</li>
            <li>Non-parametric: Makes no assumptions about data distribution.</li>
            <li>Versatile: Can handle both numerical and categorical data.</li>
          </ul>
          <h3 style={{ color: 'darkseagreen', fontSize: '1.5em', marginTop: '20px', marginBottom: '10px' }}>Limitations</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em', color: '#ffffff' }}>
            <li>Overfitting: Prone to overfitting, especially with small datasets.</li>
            <li>Instability: Small changes in data can result in a completely different tree.</li>
          </ul>
          {data.length > 0 && (
            <div style={{ marginTop: '20px', color: '#ffffff', textAlign: 'left' }}>
              <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Columns: {totalColumns}</p>
              <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Rows: {totalRows}</p>
              <div style={{ maxHeight: '400px', overflowY: 'scroll', overflowX: 'hidden', border: '1px solid #00df9a', borderRadius: '5px', marginTop: '10px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1em' }}>
                  <thead style={{ position: 'sticky', top: 0, backgroundColor: '#00df9a', zIndex: 1 }}>
                    <tr>
                      {Object.keys(data[0]).map((header, index) => (
                        <th key={index} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff', textAlign: 'left', textTransform: 'capitalize' }}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, rowIndex) => (
                      <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? '#333' : '#444' }}>
                        {Object.values(row).map((value, colIndex) => (
                          <td key={colIndex} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff', textAlign: 'left' }}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {modelTrained && (
            <div style={{ marginTop: '20px', color: '#00df9a', textAlign: 'center' }}>
              <p>Model Trained Successfully!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecisionTree;

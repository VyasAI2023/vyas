import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog2 = () => {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-6">
        <div className="text-center">
          <h2 className="text-6xl text-blue-400 font-extrabold mb-6">Exploring the Impact of Convolutional Neural Networks (CNNs)</h2>
          <hr className="mt-4 w-48 mx-auto border-t-4 border-blue-400" />
        </div>
      </div>
      <div className="container mx-auto mb-20 px-6 flex">
        {/* Table of Contents */}
        <div className="w-1/4 sticky top-20 self-start hidden lg:block">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className={`block ${activeSection === "introduction" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Introduction
                </a>
              </li>
              <li>
                <a href="#understanding-cnns" className={`block ${activeSection === "understanding-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Understanding CNNs
                </a>
              </li>
              <li>
                <a href="#structure-cnns" className={`block ${activeSection === "structure-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Structure of CNNs
                </a>
              </li>
              <li>
                <a href="#training-cnns" className={`block ${activeSection === "training-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Training CNNs
                </a>
              </li>
              <li>
                <a href="#applications-cnns" className={`block ${activeSection === "applications-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Applications of CNNs
                </a>
              </li>
              <li>
                <a href="#challenges-future" className={`block ${activeSection === "challenges-future" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Challenges and Future Directions
                </a>
              </li>
              <li>
                <a href="#conclusion" className={`block ${activeSection === "conclusion" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full lg:w-3/4 lg:pl-12">
          <div className="flex justify-center items-center feature-image mx-auto mb-12 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://analyticsindiamag.com/wp-content/uploads/2018/01/nural-network-05.jpg"
              alt="Exploring CNNs"
            />
          </div>
          <div className="blog-content content mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <div id="introduction" ref={(el) => sectionsRef.current[0] = el}>
              <h3 className="text-3xl font-bold mb-6">Introduction</h3>
              <p className="mb-6">
                In the world of machine learning, Convolutional Neural Networks (CNNs) have become a revolutionary tool, especially in the area of computer vision. From facial recognition to self-driving cars, CNNs have fundamentally changed how machines perceive and interpret visual data. This blog delves into the basics of CNNs, their structure, and their uses.
              </p>
            </div>
            <div id="understanding-cnns" ref={(el) => sectionsRef.current[1] = el}>
              <h4 className="text-2xl font-semibold mb-4">Understanding Convolutional Neural Networks</h4>
              <p className="mb-4">Convolutional Neural Networks (CNNs) are a type of deep learning algorithm specifically designed for handling structured grid data, like images. Unlike traditional neural networks, CNNs can automatically learn spatial hierarchies of features from input images.</p>
            </div>
            <div id="structure-cnns" ref={(el) => sectionsRef.current[2] = el}>
              <h4 className="text-2xl font-semibold mb-4">Structure of CNNs</h4>
              <div className="flex justify-center items-center feature-image mx-auto mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://www.researchgate.net/publication/338199242/figure/fig1/AS:840889396113413@1577495063054/Basic-structure-of-a-CNN.jpg"
                  alt="Structure of CNNs"
                />
              </div>
              <p className="mb-4">The architecture of a CNN consists of several types of layers, each with a specific function:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Convolutional Layer</strong>: This layer is the main building block of a CNN. It uses a set of filters (kernels) to scan the input image, creating feature maps. These filters move over the image, performing element-wise multiplications and summing the results, which helps in detecting features like edges, textures, and patterns.</li>
                <li><strong>Activation Function (ReLU)</strong>: Following convolution, the Rectified Linear Unit (ReLU) is applied to add non-linearity to the model. ReLU sets all negative pixel values in the feature map to zero, which speeds up the model's convergence.</li>
                <li><strong>Pooling Layer</strong>: This layer reduces the spatial dimensions of the feature maps, preserving essential information while reducing computational complexity. Max pooling, which selects the highest value from each patch of the feature map, is commonly used.</li>
                <li><strong>Fully Connected Layer</strong>: After several convolutional and pooling layers, the fully connected layer (or dense layer) is used for final classifications. It connects every neuron in one layer to every neuron in the next, combining the features learned in the previous layers to predict the output.</li>
              </ul>
            </div>
            <div id="training-cnns" ref={(el) => sectionsRef.current[3] = el}>
              <h4 className="text-2xl font-semibold mb-4">Training CNNs</h4>
              <div className="flex justify-center items-center feature-image mx-auto mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://www.researchgate.net/publication/357970884/figure/fig7/AS:1119433787478029@1643905221570/Representation-of-the-2D-convolutional-neural-network-The-network-is-composed-of-two.ppm"
                  alt="Training CNNs"
                />
              </div>
              <p className="mb-4">Training a CNN involves these steps:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Forward Propagation</strong>: The input image passes through the convolutional, activation, and pooling layers, generating feature maps at each stage. The output then goes through the fully connected layers to produce the final predictions.</li>
                <li><strong>Loss Calculation</strong>: The predicted output is compared to the true labels using a loss function, like cross-entropy loss for classification tasks.</li>
                <li><strong>Backpropagation</strong>: Gradients of the loss function with respect to the weights are calculated and propagated backward through the network. Optimization algorithms, such as stochastic gradient descent (SGD), update the weights to minimize the loss.</li>
              </ul>
            </div>
            <div id="applications-cnns" ref={(el) => sectionsRef.current[4] = el}>
              <h4 className="text-2xl font-semibold mb-4">Applications of CNNs</h4>
              <div className="flex justify-center items-center feature-image mx-auto mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://ig-s.co.uk/wp-content/uploads/2020/12/AdobeStock_323256831-1080x675.jpg"
                  alt="Applications of CNNs"
                />
              </div>
              <p className="mb-4">CNNs have made a significant impact across various fields:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Image Classification</strong>: CNNs are excellent at classifying images into different categories. They have been used in projects like ImageNet, achieving top accuracy in recognizing thousands of object classes.</li>
                <li><strong>Object Detection</strong>: CNNs drive object detection systems that find and identify multiple objects within an image. Applications include surveillance, autonomous vehicles, and augmented reality.</li>
                <li><strong>Semantic Segmentation</strong>: In semantic segmentation, CNNs classify each pixel in an image into predefined categories. This is crucial in medical imaging for identifying different tissues and in self-driving cars for recognizing road signs and obstacles.</li>
                <li><strong>Facial Recognition</strong>: CNNs have greatly enhanced facial recognition systems, allowing secure authentication in devices and applications. They can detect and identify faces with high accuracy, even in difficult conditions.</li>
                <li><strong>Image Generation</strong>: Generative Adversarial Networks (GANs), which use CNNs, can create realistic images from noise. This has applications in art, fashion, and data augmentation.</li>
              </ul>
            </div>
            <div id="challenges-future" ref={(el) => sectionsRef.current[5] = el}>
              <h4 className="text-2xl font-semibold mb-4">Challenges and Future Directions</h4>
              <p className="mb-4">Despite their success, CNNs face several challenges:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Computational Demand</strong>: Training deep CNNs requires significant computational resources and memory.</li>
                <li><strong>Data Requirements</strong>: CNNs often need large labeled datasets for effective training, which can be hard to collect.</li>
                <li><strong>Interpretability</strong>: Understanding how CNNs make decisions can be difficult due to their complex architectures.</li>
              </ul>
              <p className="mb-6">Future research is focused on overcoming these challenges through advancements in hardware, data-efficient learning techniques, and explainable AI.</p>
            </div>
            <div id="conclusion" ref={(el) => sectionsRef.current[6] = el}>
              <h3 className="text-3xl font-bold mb-6">Conclusion</h3>
              <p className="mb-6">
                Convolutional Neural Networks have revolutionized computer vision and beyond, enabling machines to interpret visual data with impressive accuracy. As technology advances, CNNs will continue to be vital in developing innovative solutions to complex visual recognition problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog2;

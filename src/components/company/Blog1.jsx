import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog1 = () => {
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
          <h2 className="text-6xl text-green-400 font-extrabold mb-6">Demystifying Machine Learning: Code Examples for Common Models</h2>
          <hr className="mt-4 w-48 mx-auto border-t-4 border-green-400" />
        </div>
      </div>
      <div className="container mx-auto mb-20 px-6 flex">
        {/* Table of Contents */}
        <div className="w-1/4 sticky top-20 self-start hidden lg:block">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#supervised-learning" className={`block ${activeSection === "supervised-learning" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Supervised Learning
                </a>
              </li>
              <li>
                <a href="#linear-regression" className={`block ${activeSection === "linear-regression" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Linear Regression
                </a>
              </li>
              <li>
                <a href="#logistic-regression" className={`block ${activeSection === "logistic-regression" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Logistic Regression
                </a>
              </li>
              <li>
                <a href="#unsupervised-learning" className={`block ${activeSection === "unsupervised-learning" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Unsupervised Learning
                </a>
              </li>
              <li>
                <a href="#kmeans-clustering" className={`block ${activeSection === "kmeans-clustering" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  K-Means Clustering
                </a>
              </li>
              <li>
                <a href="#pca" className={`block ${activeSection === "pca" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  PCA
                </a>
              </li>
              <li>
                <a href="#beyond-basics" className={`block ${activeSection === "beyond-basics" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Beyond the Basics
                </a>
              </li>
              <li>
                <a href="#takeaway" className={`block ${activeSection === "takeaway" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  The Takeaway
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
              src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
              alt="Demystifying Machine Learning"
            />
          </div>
          <div className="blog-content content mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <div id="supervised-learning" ref={(el) => sectionsRef.current[0] = el}>
              <h3 className="text-3xl font-bold mb-6">Supervised Learning: When Experience is Your Teacher</h3>
              <p className="mb-6">
                Imagine a student learning from labeled examples. Supervised learning models function similarly. They are trained on data where each input has a corresponding output, like a price tag for a product or a category label for an email. Let's explore some key players with code snippets:
              </p>
            </div>
            <div id="linear-regression" ref={(el) => sectionsRef.current[1] = el}>
              <h4 className="text-2xl font-semibold mb-4">Linear Regression</h4>
              <p className="mb-4">Our go-to for solving problems with continuous outputs, it finds linear relationships between variables.</p>
              <pre className="bg-gray-700 p-4 rounded-lg text-white mb-6">
{`from sklearn.linear_model import LinearRegression

# Sample data: area of houses and their selling prices
X = [[1000], [1500], [2000], [2500]]
y = [200000, 300000, 400000, 500000]

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make a prediction for a house with 3000 sq ft area
predicted_price = model.predict([[3000]])[0]
print("Predicted price for 3000 sq ft house:", predicted_price)`}
              </pre>
            </div>
            <div id="logistic-regression" ref={(el) => sectionsRef.current[2] = el}>
              <h4 className="text-2xl font-semibold mb-4">Logistic Regression</h4>
              <p className="mb-4">This model ventures into classification, estimating the probability of an event, like spam detection in emails (spam/not spam).</p>
              <pre className="bg-gray-700 p-4 rounded-lg text-white mb-6">
{`from sklearn.linear_model import LogisticRegression

# Sample data: email text and spam labels (0/not spam, 1/spam)
X = [["Buy this amazing product!"], ["Important meeting tomorrow"], ["Get rich quick scheme!"]]
y = [1, 0, 1]

# Create and train the model
model = LogisticRegression()
model.fit(X, y)

# Predict if a new email is spam ("Free money offer!")
new_email = ["Free money offer!"]
predicted_spam = model.predict([new_email])[0]
print("Is the new email spam?", ("Yes" if predicted_spam == 1 else "No"))`}
              </pre>
            </div>
            <div id="unsupervised-learning" ref={(el) => sectionsRef.current[3] = el}>
              <h3 className="text-3xl font-bold mb-6">Unsupervised Learning: Finding Hidden Gems in Untamed Data</h3>
              <p className="mb-6">
                Unlike supervised learning, unsupervised models don't have a predefined outcome. They explore unlabeled data, uncovering hidden structures and patterns. Here are two prominent examples:
              </p>
            </div>
            <div id="kmeans-clustering" ref={(el) => sectionsRef.current[4] = el}>
              <h4 className="text-2xl font-semibold mb-4">K-Means Clustering</h4>
              <p className="mb-4">Imagine sorting a basket of fruits by color. K-Means does exactly that, grouping similar data points into clusters. This is useful for market segmentation or customer profiling.</p>
              <pre className="bg-gray-700 p-4 rounded-lg text-white mb-6">
{`from sklearn.cluster import KMeans

# Sample data: points in 2D space
X = [[1, 2], [1, 4], [1, 0], [4, 2], [4, 4], [4, 0]]

# Create and train the model
kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

# Get the cluster centers
centers = kmeans.cluster_centers_
print("Cluster centers:", centers)`}
              </pre>
            </div>
            <div id="pca" ref={(el) => sectionsRef.current[5] = el}>
              <h4 className="text-2xl font-semibold mb-4">Principal Component Analysis (PCA)</h4>
              <p className="mb-4">PCA is like a magician, reducing the dimensionality of data while retaining its essence. It's invaluable for visualizing complex datasets.</p>
              <pre className="bg-gray-700 p-4 rounded-lg text-white mb-6">
{`from sklearn.decomposition import PCA

# Sample data: points in 3D space
X = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4], [5, 6, 7], [8, 9, 10]]

# Create and train the model
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

# Print the reduced data
print("Reduced data:", X_reduced)`}
              </pre>
            </div>
            <div id="beyond-basics" ref={(el) => sectionsRef.current[6] = el}>
              <h3 className="text-3xl font-bold mb-6">Beyond the Basics: Exploring Advanced Machine Learning Techniques</h3>
              <p className="mb-6">
                Let's embark on a journey to discover advanced techniques and their practical implementations.
              </p>
            </div>
            <div id="takeaway" ref={(el) => sectionsRef.current[7] = el}>
              <h3 className="text-3xl font-bold mb-6">The Takeaway: Empowering Your Machine Learning Journey</h3>
              <p className="mb-6">
                Machine learning is a powerful tool that can unlock new possibilities. By understanding these fundamental models and techniques, you're well on your way to harnessing the full potential of machine learning in your projects.
              </p>
              <a href="/company/blog2" className="flex items-center text-green-400 hover:text-green-600 font-semibold">
                Read Next Article
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog1;
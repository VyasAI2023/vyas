import React from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';

const Documentation = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='header text-center p-4'>
        <div className='text'>Documentation</div>
        <div className='underline w-96'></div>
      </div>
      <div className="main-body grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] gap-5 p-5 text-white">
        <nav id="navbar" className="text-white">
          <header className="text-xl font-bold text-white">Documentation Menu</header>
          <a href="#Intro" className="nav-link block border border-white p-2 my-2 no-underline">
            Introduction
          </a>
          <a href="#1some" className="nav-link block border border-white p-2 my-2 no-underline">
            1 something
          </a>
          <a href="#2some" className="nav-link block border border-white p-2 my-2 no-underline">
            2 something
          </a>
          <a href="#3some" className="nav-link block border border-white p-2 my-2 no-underline">
            3 something
          </a>
          <a href="#4some" className="nav-link block border border-white p-2 my-2 no-underline">
            4 something
          </a>
          <a href="#5some" className="nav-link block border border-white p-2 my-2 no-underline">
            5 something
          </a>
        </nav>

        <main id="main-doc">
          <section className="main-section mb-5 p-4 md:pl-10" id="Intro">
            <header className="text-xl font-bold">Introduction</header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo exercitationem perspiciatis similique quod quia, provident ratione et, nam quis aut vitae. Nam aperiam soluta, quo ipsa commodi eos adipisci.
            </p><br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis distinctio a expedita, labore voluptatibus. Sint eligendi minima officiis illum hic quaerat, facilis inventore, assumenda nihil repudiandae consequuntur, ratione quia.
              <br /><br />
              Let us now look at the program :
              <br />
            </p>
            <code className="bg-gray-300 block p-5 text-black">
              #include &lt;iostream&gt; <br />
              using namespace std; <br />
              int main() <br />
              &#123; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Hello World"; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return 0; <br />
              &#125;
            </code>
            <br />
            <p>
              Features:
              <br /> The main pillars are :
            </p>
            <ul className="list-disc list-inside">
              <li>1 something</li>
              <li>2 something</li>
              <li>3 something</li>
              <li>4 something</li>
              <li>5 something</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;

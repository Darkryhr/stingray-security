import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const index = ({ children }) => {
  return (
    <main>
      <header
        style={{
          background: '#131313',
        }}
      >
        <Navbar />
      </header>
      <div>{children}</div>
      <footer
        style={{
          width: '100%',
          background: ' #000000',
        }}
      >
        <Footer />
      </footer>
    </main>
  );
};

export default index;

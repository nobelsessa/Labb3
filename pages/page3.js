// pages/page3.js

import React from 'react';

const Page3 = ({ data }) => {
  return (
    <div>
      <h1>Sida 3</h1>
      <p>Data från getStaticProps:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  // Här kan du hämta data från en extern källa för Sida 3
  const data = 'Data för Sida 3 från getStaticProps';

  return {
    props: {
      data,
    },
  };
}

export default Page3;

// pages/page1.js

import React from 'react';

const Page1 = ({ data }) => {
  return (
    <div>
      <h1>Sida 1</h1>
      <p>Data från getStaticProps:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  // Hämta data här från en extern källa, en databas eller ett API
  const data = { message: 'Data för Sida 1 från getStaticProps' };

  return {
    props: {
      data,
    },
  };
}

export default Page1;

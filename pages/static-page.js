// pages/static-page.js

import React from 'react';

const StaticPage = ({ data }) => {
  return (
    <div>
      <h1>Statisk Sida</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getStaticProps() {
  // Hämta data från extern källa eller databas
  const data = 'Detta är statiskt innehåll från getStaticProps';

  return {
    props: {
      data,
    },
  };
}

export default StaticPage;

import React from 'react';
import { Chart } from 'react-google-charts';

export function PieChart({ productData }) {
  // Handle cases where productData is undefined or an empty array
  console.log('Product Data:', productData);

  // Adjusted the variable name to avoid conflict with the function parameter
  const data = (productData || []).map(item => ({
    name: item?.name || item?.product || 'Unknown Product',
    price: item?.price || 0,
  }));

  const chartData = [['Product', 'Price']].concat(
    data.map(product => [`${product.name}`, product.price])
  );

  const options = {
    title: 'Products In The Cart',
    legend: 'none',
    pieSliceText: slice => `${slice.label}: $${slice.value}`,
    titleTextStyle: {
      color: 'white', // Set the title text color to white
    },
    pieSliceTextStyle: {
      color: 'white', // Set the pie slice text color to white
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  );
}

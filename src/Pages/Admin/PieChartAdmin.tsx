// import React from 'react';
// import { Chart } from 'react-google-charts';

// export function PieChartAdmin({ productData }) {
//   // Handle cases where productData is undefined or an empty array
//   console.log('Product Data:', productData);

//   // Adjusted the variable name to avoid conflict with the function parameter
//   const data = (productData || []).map(item => ({
//     name: item?.name || item?.product || 'Unknown Product',
//     price: item?.price || 0,
//   }));

//   const chartData = [['Product', 'Price']].concat(
//     data.map(product => [`${product.name}`, product.price])
//   );

//   const options = {
//     title: 'Products In The Cart',
//     legend: 'none',
//     pieSliceText: slice => `${slice.label}: $${slice.value}`,
//     titleTextStyle: {
//       color: 'white', // Set the title text color to white
//     },
//     pieSliceTextStyle: {
//       color: 'white', // Set the pie slice text color to white
//     },
//   };

//   return (
//     <Chart
//       chartType="PieChart"
//       data={chartData}
//       options={options}
//       width={'100%'}
//       height={'400px'}
//     />
//   );
// }

import React from 'react';
import { Chart } from 'react-google-charts';

export function PieChartAdmin({ userData, productData, reviewData }) {
  // Handle cases where data is undefined or an empty array
  console.log('User Data:', userData);
  console.log('Product Data:', productData);
  console.log('Review Data:', reviewData);

  // Map user data
  const users = (userData || []).map(user => ({
    name: user?.name || 'Unknown User',
    // Add additional user properties as needed
  }));

  // Map product data
  const products = (productData || []).map(product => ({
    name: product?.name || 'Unknown Product',
    price: product?.price || 0,
  }));

  // Map review data
  const reviews = (reviewData || []).map(review => ({
    user: review?.user || 'Unknown User',
    product: review?.product || 'Unknown Product',
    // Add additional review properties as needed
  }));

  // Count the number of reviews per product
  const productReviewCounts = products.map(product => ({
    name: product.name,
    reviewCount: reviews.filter(review => review.product === product.name)
      .length,
  }));

  const chartData = [['Item', 'Count']].concat(
    // Combine user count, product count, and review count into a single array
    users.map(user => [user.name, 1]),
    products.map(product => [product.name, 1]),
    productReviewCounts.map(product => [
      `${product.name} Reviews`,
      product.reviewCount,
    ])
  );

  const options = {
    title: 'Users, Products, and Reviews',
    legend: 'none',
    titleTextStyle: {
      color: 'white',
    },
    pieSliceTextStyle: {
      color: 'white',
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

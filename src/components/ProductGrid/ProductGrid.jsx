import React from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';

function ProductGrid({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
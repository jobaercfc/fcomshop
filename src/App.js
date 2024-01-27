import React from 'react';
import ProductGrid from './components/ProductGrid/ProductGrid';
import sampleProducts from './sampleProducts';

function App() {
  return (
    <div>
      <ProductGrid products={sampleProducts} />
    </div>
  );
}

export default App;
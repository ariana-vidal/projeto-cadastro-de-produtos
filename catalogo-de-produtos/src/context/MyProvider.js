import React, { useState } from "react";

import MyContext from "./MyContext";

function MyProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts(products.concat(newProduct))
  }

  return (
    <main>
      <MyContext.Provider value={{ products, addProduct }}>
        {children}
      </MyContext.Provider>
    </main>
  );

}

export default MyProvider;
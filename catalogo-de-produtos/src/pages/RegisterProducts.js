import React from "react";

function RegisterProducts() {
  return (
    <section className="sectionRegister">
      <form>
        {/* <label htmlFor="ecormerce">
          Nome do eco
          <input
            type="email"
            name="ecomerce"
          />
        </label> */}

        <label htmlFor="name">
          Nome do produto:
          <input
            type="text"
            name="name"
          />
        </label>

        <label htmlFor="img">
          Imagem do produto:
          <input
            type="file"
            name="img"
          />
        </label>

        <label htmlFor="value">
          Valor do produto:
          <input
            type="number"
            name="value"
          />
        </label>

        <label htmlFor="description">
          Descriçao do produto:
          <input
            type="text"
            name="description"
          />
        </label>
      </form>
    </section>
  )
}

export default RegisterProducts;
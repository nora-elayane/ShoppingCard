import Product from "./Product";
import { useState } from "react";
import Card from "./Card";

export default function Products({ products }) {
  const [card, setCard] = useState([]);

  function addToCard(product) {
    setCard((pr) => [...pr, product]);
  }

  function removeFromCard(id) {
    setCard((pr) => pr.filter((elem) => elem.id !== id));
  }

  return (
    <div className="Products">
      <h2>Produits Disponiles : </h2>
      {products
        .filter((product) => product.quantity > 0)
        .map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCard={addToCard}
            card={card}
          />
        ))}
      <div>
        <h2>Your Card :</h2>
        <p>items : {card.length}</p>
        <Card card={card} removeFromCard={removeFromCard} />
      </div>
      <h3>Total : {card.reduce((a, b) => a + b.price, 0)}MAD</h3>
    </div>
  );
}

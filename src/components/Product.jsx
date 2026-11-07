export default function Product({ product, addToCard, card }) {
  const isAdded = card.find((pro) => pro.id === product.id) ? true : false;
  return (
    <>
      <div className="product">
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <button onClick={() => addToCard(product)} disabled={isAdded}>
          {isAdded ? "Added" : "Add"}
        </button>
      </div>
    </>
  );
}

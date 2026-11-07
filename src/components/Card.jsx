export default function Card({ card, removeFromCard }) {
  return (
    <>
      <div className="card">
        {card.map((elem) => (
          <div key={elem.id}>
            <h4>{elem.name}</h4>
            <p>{elem.price}</p>
            <button onClick={() => removeFromCard(elem.id)} className="">
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

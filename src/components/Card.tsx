import "./Card.css";

export default function Card({ name, phone, onClick, isFavorite }) {
  return (
    <div className="card">
      <p>name:{name}</p>
      <p>phone:{phone}</p>
      <button onClick={onClick}>
        {isFavorite ? "In favorites" : "Add to favorites"}
      </button>
    </div>
  );
}

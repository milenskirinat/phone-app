import "./Card.css";
import { useState } from "react";

export default function Card({ showOnlyFavorites = false }) {
  const contacts = [
    { id: 1, name: "Иван Иванов", phone: "+7 (912) 345-67-89" },
    { id: 2, name: "Мария Петрова", phone: "+7 (901) 234-56-78" },
    { id: 3, name: "Пётр Сидоров", phone: "+7 (900) 123-45-67" },
  ];

  const [favorite, setFavorite] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  const handleFavoriteClick = (contactId) => {
    const newFavorites = favorite.includes(contactId)
      ? favorite.filter((id) => id !== contactId)
      : [...favorite, contactId];

    setFavorite(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const contactsToShow = showOnlyFavorites
    ? contacts.filter((contact) => favorite.includes(contact.id))
    : contacts;

  return (
    <div className="card">
      {contactsToShow.map((contact) => {
        return (
          <div key={contact.id}>
            <p>name: {contact.name}</p>
            <p>phone: {contact.phone}</p>
            <button
              onClick={() => handleFavoriteClick(contact.id)}
              className={
                favorite.includes(contact.id) ? "favButton" : "classikButton"
              }
            >
              {favorite.includes(contact.id)
                ? "In favorites"
                : "Add to favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

import Card from "./components/Card.tsx";
import { useState } from "react";

const contacts = [
  { id: 1, name: "Иван Иванов", phone: "+7 (912) 345-67-89" },
  { id: 2, name: "Мария Петрова", phone: "+7 (901) 234-56-78" },
  { id: 3, name: "Пётр Сидоров", phone: "+7 (900) 123-45-67" },
];

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavoriteClick = (contactId) => {
    if (favorite.includes(contactId)) {
      setFavorite(favorite.filter((id) => id !== contactId));
    } else {
      setFavorite([...favorite, contactId]);
    }
  };
  return (
    <div className="flex flex-col flex-row justify-center items-center gap-6 min-h-screen p-5 bg-gray-50 ">
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Контакты
        </h1>
        {/* <Card name={"Rinat"} phone={"Milenskii"}></Card> */}
        {contacts.map((contact) => {
          return (
            <Card
              key={contact.id}
              name={contact.name}
              phone={contact.phone}
              onClick={() => handleFavoriteClick(contact.id)}
              isFavorite={favorite.includes(contact.id)}
            ></Card>
          );
        })}
      </div>

      <div>
        <h1>Избранное</h1>
        {favorite.map((contacs) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default App;

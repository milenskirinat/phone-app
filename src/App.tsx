import Card from "./components/Card.tsx";

function App() {
  return (
    <div className="flex flex-col flex-row justify-center items-center gap-6 min-h-screen p-5 bg-gray-50 ">
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Контакты
        </h1>
        <Card />
      </div>

      <div>
        <h1>Избранное</h1>
        <Card showOnlyFavorites={true} />
      </div>
    </div>
  );
}

export default App;

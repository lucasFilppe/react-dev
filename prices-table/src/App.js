import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = [
  {category: "Frutas", price: "$1", stocked: true, name: 'maça'},
  {category: "Frutas", price: "$2", stocked: false, name: 'banana'},
  {category: "Vegetal", price: "$1", stocked: true, name: 'alface'},
  {category: "Vegetal", price: "$3", stocked: false, name: 'cenoura'}
];


function App() {
  return (
    <div>
      <h1>Tabela de preços</h1>
      <FilterableProductTable products='maça'/>
    </div>
  );
}

export default App;

const products = [
  { title: "Repolho", isFruit: false, id: 1 },
  { title: "Alho", isFruit: false, id: 2 },
  { title: "Maça", isFruit: true, id: 3 }
];

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
export default ShoppingList;

import { useState } from "react";
import Button from "./Button";

export default function AddToCardWidget({ productID }) {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const handleClick = (evt) => {
    console.log(quantity, productID);
  };

  return (
    <div className="py-2">
      <input
        className="border rounded px-3 py-1 mr-2 w-16 text-right"
        type="number"
        min="1"
        value={quantity.toString()}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <Button onClick={handleClick}>Add to Chart</Button>
    </div>
  );
}

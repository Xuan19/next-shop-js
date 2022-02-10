import { useState } from "react";
import Button from "./Button";
import { useRouter } from 'next/router';
import { useMutation} from 'react-query';
import { fetchJson } from '../lib/api';

export default function AddToCardWidget({ productID }) {
  
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const mutation = useMutation(() => fetchJson('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity, productID  }),
    }));

  const handleClick = async (evt) => {
    await mutation.mutateAsync();
    router.push('/cart')
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
      {mutation.isLoading ? (<p>Loading...</p>) :
          (<Button onClick={handleClick}>Add to Chart</Button>)
        }
    </div>
  );
}

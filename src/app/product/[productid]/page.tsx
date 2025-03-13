import { useRouter } from 'next/router';

const Product = ({ product }: { product: any }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;

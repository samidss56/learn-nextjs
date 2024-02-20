import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Product Page</h1>
      <h2 className="mb-2">Products :</h2>
      {products.map((product: productType) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
};

export default ProductPage;

import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);

  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;

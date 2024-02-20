import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;

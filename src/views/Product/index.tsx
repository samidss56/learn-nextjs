type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="p-10 w-full ">
      <h1 className="text-3xl font-bold mb-2 text-center">Product</h1>
      <div className="flex">
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className="w-1/4 p-2.5">
                <div className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                </div>
                <h4 className="font-bold text-xl mt-2">{product.name}</h4>
                <p className="text-gray-500">{product.category}</p>
                <p className="font-bold mt-3">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className="w-1/4 p-2.5 animate-[blinking_1s_infinite]">
            <div className="w-full aspect-square bg-gray-200" />
            <div className="w-full h-5 mt-2 bg-gray-200" />
            <div className="w-full h-4 bg-gray-200 mt-2" />
            <div className="2-full h-4 mt-2.5 bg-gray-200" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;

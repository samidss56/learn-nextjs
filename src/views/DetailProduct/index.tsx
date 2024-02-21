import { ProductType } from "@/types/product.type";

const DetailProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-1/4 p-2.5 m-auto">
      <div className="">
        <img
          src={product.image && product.image}
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <h4 className="font-bold text-xl mt-2">{product.name}</h4>
      <p className="text-gray-500">{product.category}</p>
      <p className="font-bold mt-3">
        {product.price &&
          product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </p>
    </div>
  );
};

export default DetailProduct;

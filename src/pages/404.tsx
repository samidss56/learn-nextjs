import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-lvh bg-black text-white flex-col gap-5">
      <Image src="/404.svg" alt="404" width={300} height={300} />
      <h1 className="text-2xl font-bold">
        404 | Oops, Halaman Tidak Ditemukan!
      </h1>
    </div>
  );
};

export default Custom404;

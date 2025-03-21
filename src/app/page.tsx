import Link from "next/link";
import { productData } from "@/config/data";
import { Lato } from "next/font/google";
import { Slider } from "./_components/slider";
import { Reklama } from "./_components/reklama";
import { ProductCard } from "./_components/product-card";
import { NewsIcon } from "../../public/svg";

const lato = Lato({
  variable: "--font-geist-lato",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function Home() {
  return (
    <div className="flex">
      <Slider />
      <div className="pt-9.5 pr-12.5 pl-7.5 bg-[var(--bg)] w-full">
        <Reklama />
        <div className="pt-7 flex gap-4.25">
          <NewsIcon />
          <h3 className={`${lato.variable} text-bold text-8 leading-[75%] text-[var-(--text-title)] pr-2`}>Yangi</h3>
        </div>
        <div className="pt-9 flex gap-2.5 ">
          {productData.map((item) =>
            item && item.id ? (
              <div key={item.id}>
                <Link href={`/product/${item.id}`}>
                  <ProductCard
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                  />
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}

import { Lato } from "next/font/google";
import { StrelkaIcon } from "../../../public/svg"
import { PhoneIcon } from "../../../public/svg/phone-icon";
import { Left } from "../../../public/svg/left-icon";
import { Right } from "../../../public/svg/right-icon";
const lato = Lato({
    variable: "--font-geist-lato",
    subsets: ["latin"],
    weight: ["700"]
});
export const Reklama = () => {
    return (
        <div className="w-full pt-4 pr-5 pl-12.5 pb-25 pb-[61px] bg-[#c4ead2] rounded-[6px]  flex items-center">
            <button className="w-7.5 h-7.5 rounded-[100%] fill-[var(--white-1000)] shadow-[0, 2px, 4px, 0] bg-[#fff] pt-[1px] pl-[5px]">
                <Left />
            </button>
            <div className=" ml-12.5 mr-[350px]">
                <h2 className={`${lato.variable} text-bold text-[30px] tracking-widest text-[#071612] pt-[43px]`}>
                    Yangi ro’yxatdan o’tgan mijozlarga ilk buyurtma bepul yetkazib beriladi!
                </h2>
                <h3 className="flex gap-[11px] pt-[29px]">
                    <PhoneIcon />
                    1833-2178
                </h3>
            </div>
            <button className=" w-7.5 h-7.5 rounded-[100%] fill-[var(--white-1000)] shadow-[0, 2px, 4px, 0] bg-[#fff] pt-[1px] pl-[5px]">
                <Right />
            </button>
        </div>
    )
}
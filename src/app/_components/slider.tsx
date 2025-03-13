import { Lato } from "next/font/google";
import { StrelkaIcon } from "../../../public/svg"
const lato = Lato({
    variable: "--font-geist-lato",
    subsets: ["latin"],
    weight: ["400"]
});
export const Slider = () => {
    return (
        <div className="max-w-70 pt-4 pr-5 pl-12.5 pb-25">
            <ul className="flex flex-col gap-[17px]">
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>O’zbekistonga yetkazish</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Go'sht va Baliq</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Asosiy oziq-ovqatlar</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Tayyor oziq-ovqatlar</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Ichimliklar</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Mobil telefon va kompyuter...</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Go'zallik & Sog'lik</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Oilaviy do'kon</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Kitoblar</p>
                    <StrelkaIcon />
                </li>
                <li className="w-52.5 h-[57px] flex items-center justify-between">
                    <p className={`${lato.variable} text-normal text-3.5 leading-[161%] text-[var-(--text-title)] pr-2`}>Shirinliklar</p>
                    <StrelkaIcon />
                </li>
            </ul>
        </div>
    )
}
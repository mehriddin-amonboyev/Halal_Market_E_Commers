import { Lato, Poppins } from "next/font/google";
import { Logo } from "../../../public/svg/logo"
import { GooglePlay } from "../../../public/svg/google-play";
import { AppStore } from "../../../public/svg/app-store";

const lato = Lato({
    variable: "--font-geist-lato",
    subsets: ["latin"],
    weight: ["400"]
});

const poppins = Poppins({
    variable: "--font-geist-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "700"]
});

export const Footer = () => {
    return (
        <footer className="px-[85px] pt-[25px] pb-[40px] bg-[var(--white-1000)] shadow-[0_4px_4px_0_rgba(0,0,0,0.03)]">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <h3 className={`pt-[22px] ${poppins.variable} font-medium text-[19px] leading-[150%] `}>HilalMart © 2021</h3>
                    <h3 className={`${lato.variable} font-normal text-[15px] leading-[150%] text-[#000]`}>Barcha huquqlar kafolatlangan</h3>
                    <div className="pt-[16px] flex gap-[12px]">
                        <GooglePlay />
                        <AppStore />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h2 className={`${poppins.variable} font-medium text-[19px] leading-[120%]`}>
                        Foydali havolalar
                    </h2>
                    <ul className="flex flex-col gap-[6px]">
                        <li className={`${lato.variable} font-normal text-xs leading-[162%] text-[var(--text-title)]`}>Bosh sahifa</li>
                        <li className={`${lato.variable} font-normal text-xs leading-[162%] text-[var(--text-title)]`}>Yordam kerakmi?</li>
                        <li className={`${lato.variable} font-normal text-xs leading-[162%] text-[var(--text-title)]`}>Foydalanish shartlari</li>
                        <li className={`${lato.variable} font-normal text-xs leading-[162%] text-[var(--text-title)]`}>Maxfiylik siyosati</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h2 className={`${poppins.variable} font-medium text-[19px] leading-[120%]`}>
                        Biz haqimizda
                    </h2>
                    <ul className="flex flex-col gap-[6px]">
                        <li className={`${poppins.variable} font-normal text-[13px] leading-[150%] text-[var(--text-title)]`}>Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</li>
                        <li className={`${poppins.variable} font-normal text-[13px] leading-[150%] text-[var(--text-title)]`}>Korxona nomi: Crescent trade llc</li>
                        <li className={`${poppins.variable} font-normal text-[13px] leading-[150%] text-[var(--text-title)]`}>Korxona rahbari:DADAJONOV RAKHIMJON</li>
                        <li className={`${poppins.variable} font-normal text-[13px] leading-[150%] text-[var(--text-title)]`}>Registratsiya raqami: 433-62-00377</li>
                        <li className={`${poppins.variable} font-normal text-[13px] leading-[150%] text-[var(--text-title)]`}>Telefon raqam: 1833-2178 02-3670-6808</li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}
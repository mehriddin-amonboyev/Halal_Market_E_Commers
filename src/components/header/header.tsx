import Link from "next/link";
import { Poppins } from "next/font/google";
import { CardIcon, Logo, OperatorIcon, SearchIcon } from "../../../public/svg";
import { LanguageSwitcher } from "./components/language";
import { UserIcon } from "../../../public/svg";

const poppins = Poppins({
    variable: "--font-geist-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "700"]
});
export const Header = () => {
    return (
        <header className="flex h-[92px] items-center bg-amber-100 px-[50px] gap-[50px]">
            <Link href='/'><Logo /></Link>
            <form className="flex-1 h-[49px] border border-solid border-[var(--primary-variant)] rounded-[6px] bg-[var(--bg)] flex items-center pl-[9px]">
                <button className="mx-2 my-3"><SearchIcon /></button>
                <input type="text" className="w-full h-full ml-2 mr-4 pl-2 rounded-[0 6px 6px 0] border-[var(--primary-variant)]" placeholder="Qidirish" />
            </form>
            <div className="flex items-center gap-[2px]">
                <OperatorIcon/>
                <Link href={'/'}>Bog'lanish</Link>
            </div>
            <button className="flex items-center justify-between py-[9px] px-[12px] border border-[var(--primary-variant)] border-solid rounded-[6px] bg-[var(--white-1000)] gap-[2px]">
                <CardIcon/>
                <span className={`${poppins.variable} text-bold text-[13px] text-[var(--primary-variant)]`}>
                    payme
                </span>
            </button>
            <div>
                <LanguageSwitcher/>
            </div>
            <button>
                <UserIcon/>
            </button>
        </header>
    )
}
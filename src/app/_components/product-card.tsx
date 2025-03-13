import { Poppins } from 'next/font/google';
import prduct from '../../../public/image/image.png'
import { SavatIcon } from '../../../public/svg';

const poppins = Poppins({
    variable: "--font-geist-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "700"]
});

export const ProductCard = () => {
    return (
        <div className="w-66 flex flex-col justify-center items-center">
            <div className='w-[262px] rounded-[6px]-[0px]'>
                <img src={prduct.src} alt="img" />
            </div>
            <h4 className={`${poppins.variable} text-normal text-[14px] leading-[150%] text-[#999]`}>Qo'y bo'yin (muzlatilgan)</h4>
            <div className='flex gap-2'>
                <p className='flex items-center gap-1'>
                    7,040
                    <del>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6718 7.99084H13.3976L13.7221 6.67795H15.6718C15.8533 6.67795 16 6.5309 16 6.34969C16 6.16857 15.8529 6.02158 15.6718 6.02158H13.8845L14.2803 4.42071C14.381 4.00794 14.4321 3.70784 14.4321 3.52926C14.4321 3.30774 14.3577 3.12948 14.2046 2.98396C14.0484 2.83571 13.8631 2.76353 13.6376 2.76353C13.4163 2.76353 13.2507 2.8164 13.1446 2.92037C13.021 3.04228 12.9365 3.17527 12.8866 3.32706C12.8291 3.50125 12.7674 3.74773 12.7023 4.05873L12.2621 6.02158H9.79384L9.37222 4.46508C9.24526 3.9997 9.14323 3.66274 9.06936 3.46384C9.00494 3.29082 8.88502 3.12622 8.71265 2.9746C8.5533 2.83454 8.31703 2.76338 8.01083 2.76338C7.70619 2.76338 7.4669 2.83252 7.29933 2.9687C7.12183 3.1133 6.9925 3.286 6.91475 3.48179C6.82756 3.70262 6.72621 4.03282 6.61397 4.46337L6.19589 6.02141H3.73804L3.29857 4.0615C3.20201 3.60681 3.09046 3.26035 2.96634 3.02947C2.93073 2.96371 2.82266 2.76318 2.36258 2.76318C2.13321 2.76318 1.94713 2.83585 1.79391 2.98528C1.64195 3.13327 1.56802 3.31154 1.56802 3.52892C1.56802 3.72648 1.61895 4.02557 1.71947 4.4186L2.11561 6.02106H0.328173C0.146796 6.02109 0 6.16806 0 6.34918C0 6.5303 0.146968 6.67744 0.328173 6.67744H2.27804L2.60253 7.99019H0.328173C0.146796 7.99019 0 8.13741 0 8.31836C0 8.49982 0.146968 8.64656 0.328173 8.64656H2.76485L3.47113 11.5037C3.52331 11.7125 3.58269 11.9395 3.64939 12.1847C3.71122 12.4124 3.79114 12.6107 3.88684 12.7736C3.97486 12.9236 4.08576 13.036 4.22599 13.1168C4.36377 13.1964 4.54826 13.2369 4.77409 13.2369C5.0527 13.2369 5.26578 13.1713 5.42564 13.0369C5.59421 12.895 5.71319 12.7347 5.77921 12.5605C5.8557 12.3588 5.96119 12.0181 6.0928 11.5478L6.88493 8.64639H9.12471L9.90757 11.5496C10.0438 12.033 10.1506 12.3787 10.2244 12.5751C10.288 12.7441 10.4054 12.9003 10.573 13.0393C10.7312 13.1703 10.951 13.2369 11.2261 13.2369C11.5178 13.2369 11.7418 13.1693 11.8915 13.0369C12.0534 12.8932 12.1698 12.7244 12.2369 12.5357C12.3131 12.3204 12.4116 11.9728 12.529 11.5033L13.2353 8.64639H15.6718C15.8533 8.64639 16 8.49954 16 8.31822C16.0002 8.13793 15.8533 7.99084 15.6718 7.99084ZM12.1149 6.67812L11.8205 7.99084H10.3275L9.97179 6.67812H12.1149ZM8.01208 4.51997L8.41689 6.02158H7.60194L8.01208 4.51997ZM3.88524 6.67812H6.01936L5.66714 7.99084H4.17969L3.88524 6.67812ZM4.85698 11.0096L4.327 8.64722H5.49098L4.85698 11.0096ZM7.06437 7.99084L7.42276 6.67795H8.59379L8.94796 7.99084H7.06437ZM11.1442 11.0056L10.5052 8.64725H11.6733L11.1442 11.0056Z" fill="#0D1136" />
                        </svg>
                    </del>
                </p>
                <p className={`flex items-center gap-1 ${poppins.variable} text-normal text-[14px] leading-[150%] text-[#999]`}>
                    8,800
                    <del className={`${poppins.variable} text-normal text-[14px] leading-[150%] text-[#999]`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6718 7.99084H13.3976L13.7221 6.67795H15.6718C15.8533 6.67795 16 6.5309 16 6.34969C16 6.16857 15.8529 6.02158 15.6718 6.02158H13.8845L14.2803 4.42071C14.381 4.00794 14.4321 3.70784 14.4321 3.52926C14.4321 3.30774 14.3577 3.12948 14.2046 2.98396C14.0484 2.83571 13.8631 2.76353 13.6376 2.76353C13.4163 2.76353 13.2507 2.8164 13.1446 2.92037C13.021 3.04228 12.9365 3.17527 12.8866 3.32706C12.8291 3.50125 12.7674 3.74773 12.7023 4.05873L12.2621 6.02158H9.79384L9.37222 4.46508C9.24526 3.9997 9.14323 3.66274 9.06936 3.46384C9.00494 3.29082 8.88502 3.12622 8.71265 2.9746C8.5533 2.83454 8.31703 2.76338 8.01083 2.76338C7.70619 2.76338 7.4669 2.83252 7.29933 2.9687C7.12183 3.1133 6.9925 3.286 6.91475 3.48179C6.82756 3.70262 6.72621 4.03282 6.61397 4.46337L6.19589 6.02141H3.73804L3.29857 4.0615C3.20201 3.60681 3.09046 3.26035 2.96634 3.02947C2.93073 2.96371 2.82266 2.76318 2.36258 2.76318C2.13321 2.76318 1.94713 2.83585 1.79391 2.98528C1.64195 3.13327 1.56802 3.31154 1.56802 3.52892C1.56802 3.72648 1.61895 4.02557 1.71947 4.4186L2.11561 6.02106H0.328173C0.146796 6.02109 0 6.16806 0 6.34918C0 6.5303 0.146968 6.67744 0.328173 6.67744H2.27804L2.60253 7.99019H0.328173C0.146796 7.99019 0 8.13741 0 8.31836C0 8.49982 0.146968 8.64656 0.328173 8.64656H2.76485L3.47113 11.5037C3.52331 11.7125 3.58269 11.9395 3.64939 12.1847C3.71122 12.4124 3.79114 12.6107 3.88684 12.7736C3.97486 12.9236 4.08576 13.036 4.22599 13.1168C4.36377 13.1964 4.54826 13.2369 4.77409 13.2369C5.0527 13.2369 5.26578 13.1713 5.42564 13.0369C5.59421 12.895 5.71319 12.7347 5.77921 12.5605C5.8557 12.3588 5.96119 12.0181 6.0928 11.5478L6.88493 8.64639H9.12471L9.90757 11.5496C10.0438 12.033 10.1506 12.3787 10.2244 12.5751C10.288 12.7441 10.4054 12.9003 10.573 13.0393C10.7312 13.1703 10.951 13.2369 11.2261 13.2369C11.5178 13.2369 11.7418 13.1693 11.8915 13.0369C12.0534 12.8932 12.1698 12.7244 12.2369 12.5357C12.3131 12.3204 12.4116 11.9728 12.529 11.5033L13.2353 8.64639H15.6718C15.8533 8.64639 16 8.49954 16 8.31822C16.0002 8.13793 15.8533 7.99084 15.6718 7.99084ZM12.1149 6.67812L11.8205 7.99084H10.3275L9.97179 6.67812H12.1149ZM8.01208 4.51997L8.41689 6.02158H7.60194L8.01208 4.51997ZM3.88524 6.67812H6.01936L5.66714 7.99084H4.17969L3.88524 6.67812ZM4.85698 11.0096L4.327 8.64722H5.49098L4.85698 11.0096ZM7.06437 7.99084L7.42276 6.67795H8.59379L8.94796 7.99084H7.06437ZM11.1442 11.0056L10.5052 8.64725H11.6733L11.1442 11.0056Z" fill="#77798C" />
                        </svg>
                    </del>
                </p>
            </div>
            <button className='flex  gap-[10px]  bg-[#f3f3f3] rounded-[6px] py-2.5 px-[74px] cursor-pointer'>
                <SavatIcon />
                <span className={`${poppins.variable} text-normal text-[13px] aligin-center text-[#000]`}>
                    Qo'shish
                </span>
            </button>
        </div>
    )
}
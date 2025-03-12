"use client";

import { useState } from "react";
import { LangDrop } from "../../../../public/svg";

interface Language {
    code: string;
    label: string;
}

const languages: Language[] = [
    { code: "uz", label: "O'zbekcha 🇺🇿" },
    { code: "en", label: "English 🇬🇧" },
    { code: "ru", label: "Русский 🇷🇺" }
];

export const LanguageSwitcher = () => {
    const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSelect = (lang: Language) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center justify-between w-40 shadow-md"
            >
                {selectedLang.label}
                <span className="ml-2"><LangDrop /></span>
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            onClick={() => handleSelect(lang)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

import { useState, createContext, useContext, ReactNode, useEffect } from "react";

interface Translation {
    [key: string]: string;
}

interface Translations {
    [key: string]: Translation;
}

interface TranslationContextType {
    language: string;
    translate: (key: string, optional?: Record<string, any>) => string;
    switchLanguage: (newLanguage: string) => void;
}

const translations: Translations = {
    ar: {
        "Hello World {name}": "مرحبا بالعالم {name}" ,
    },
};

const TranslationContext = createContext<TranslationContextType | undefined>(
    undefined
);

interface TranslationProviderProps {
    children: ReactNode;
}

const TranslationProvider = ({ children }: TranslationProviderProps) => {
    const [language, setLanguage] = useState("en");

    const translate = (key: string, optional?: Record<string, any>) => {
        let translation = language === "ar" ? translations[language][key] || key : key;
    
        if (optional) {
            for (const placeholder in optional) {
                if (optional.hasOwnProperty(placeholder)) {
                    const placeholderValue = optional[placeholder];
                    const placeholderRegex = new RegExp(`{${placeholder}}`, "g");
                    translation = translation.replace(placeholderRegex, placeholderValue);
                }
            }
        }
        return translation;
    };

    const switchLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage)
    };

    const contextValue: TranslationContextType = {
        language,
        translate,
        switchLanguage
    };

    useEffect(() => {
        let slanguage = localStorage.getItem("language")
        if (slanguage) {
            setLanguage(slanguage);
        } else {
            setLanguage("en");
        }
    }, []);

    return (
        <TranslationContext.Provider value={contextValue}>
            {children}
        </TranslationContext.Provider>
    );
};

const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);

    if (!context) {
        throw new Error(
            "useTranslation must be used within a TranslationProvider"
        );
    }

    return context;
};

export { TranslationProvider, useTranslation };

import { getItemAsync, setItemAsync } from "expo-secure-store";
import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { I18nManager, Platform } from "react-native";
import * as Updates from "expo-updates";

interface Translation {
    [key: string]: string;
}

interface Translations {
    [key: string]: Translation;
}

interface TranslationContextType {
    language: string;
    translate: (key: string) => string;
    switchLanguage: (newLanguage: string) => void;
}

const translations: Translations = {
    ar: {
        "Hello World": "مرحبا بالعالم",
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

    const translate = (key: string) => {

        if (language === "ar") {
            return translations[language][key] || key;
        } else {
            return key;
        }
    };

    const switchLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        setItemAsync("language", newLanguage);

        if (Platform.OS === "android") {

            if (newLanguage === "ar") {
                I18nManager.allowRTL(true);
                I18nManager.forceRTL(true);
                Updates.reloadAsync()
            } else {
                I18nManager.allowRTL(false);
                I18nManager.forceRTL(false);
                Updates.reloadAsync()
            }

        }

    };

    const contextValue: TranslationContextType = {
        language,
        translate,
        switchLanguage
    };

    useEffect(() => {
        getItemAsync("language").then((language) => {
            if (language) {
                setLanguage(language);
            } else {
                setLanguage("en");
            }
        });
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

import { useState, createContext, useContext, ReactNode, useEffect } from "react";

interface Translation {
    [key: string]: string;
}

interface Translations {
    [key: string]: Translation;
}

interface TranslationContextType {
    biApp: string;
    language: string;
    translate: (key: string, optional?: Record<string, any>) => string;
    switchLanguage: (newLanguage: string) => void;
}

const translations: Translations = {
    ar: {
        "Hello World {name}": "مرحبا بالعالم {name}" ,
        "العربية": "English",
        "Sign In": "تسجيل الدخول",
        "Welcome Home,": "مرحبا بك في البيت،",
        "start your journey here": "ابدأ رحلتك هنا",
        "We represent the quintessence of craftsmanship by embracing the virtues of urbanism." :
        "نحن نمثل جوهر الحرفية من خلال احتضان فضائل التمدن.",
        "Retal Development. All rights reserved.": 
        " التنمية العقارية. كل الحقوق محفوظة.",
        "Hello": "مرحبا",
        "Please enter your information to connect to your account.": "الرجاء إدخال المعلومات الخاصة بك للاتصال بحسابك.",
        "Your email or phone number": "بريدك الإلكتروني أو رقم هاتفك",
        "Connect": "يتصل",
        "Please contact the": "يرجى الاتصال",
        "Help Center": "مركز المساعدة",
        "Having trouble logging into your account?": "هل تواجه مشكلة في تسجيل الدخول إلى حسابك؟",
        "Verify your number": "التحقق من رقمك"
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
    const [biApp, setBiApp] = useState('ltr');

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
        localStorage.setItem("language", newLanguage);
        document.documentElement.lang = newLanguage;
        if (newLanguage === 'ar') {
            document.documentElement.dir= "rtl";
            setBiApp('rtl');
        } else {
            document.documentElement.dir= "ltr";
            setBiApp('ltr');
        }

    };

    const contextValue: TranslationContextType = {
        biApp,
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
        if (slanguage === 'ar') {
            document.documentElement.dir= "rtl";
            setBiApp('rtl');
        } else {
            document.documentElement.dir= "ltr";
            setBiApp('ltr');
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

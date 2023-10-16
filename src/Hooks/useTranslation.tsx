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
        "Welcome Home,": "مرحبًا بك في بيتك،",
        "start your journey here": "ابدأ رحلتك هنا",
        "We represent the quintessence of craftsmanship by embracing the virtues of urbanism." :
        "نحن نمثل جوهر الحرفية باحتضان فضائل التمدن.",
        "Retal Development. All rights reserved.": 
        "كل الحقوق محفوظة. Retal Company",
        "Hello": "مرحبا",
        "Please enter your information to connect to your account.": "الرجاء إدخال المعلومات الخاصة بك للاتصال بحسابك.",
        "Your email or phone number": "بريدك الإلكتروني أو رقم هاتفك",
        "Connect": "تسجيل الدخول",
        "Please contact the": "يرجى الاتصال",
        "Help Center": "بمركز المساعدة",
        "Having trouble logging into your account?": "هل تواجه مشكلة في تسجيل الدخول إلى حسابك؟",
        "Verify your number": "تحقق من رقمك",
        "Send a new code" : "إرسال رمز جديد",
        "Validate": "تحقق",
        "Enter the code sent to": "أدخل الرمز المرسل إلى",
        "Saleh Abdullah": "صالح عبدالله",
        "Your Essentials": "أساسياتك",
        "Dashboard": "لوحة التحكم الرئيسية",
        "Properties": "مجتمعاتنا",
        "Payments": "المدفوعات",
        "Documents": "وثائق",
        "Warranty": "الضمانات",
        "Gifts": "الهدايا",
        "Services": "الخدمات",
        "Raise Ticket": "رفع التذكرة",
        "Request Appointment": "طلب تحديد موعد",
        "FAQs": "الأسئلة الشائعة",
        "Contact Us": "اتصل بنا",
        "My Profile": "ملفي",
        "Logout": "تسجيل خروج",
        "MEMBER": "عضو",
        "My Properties": "مجتمعاتنا",
        "Find here all the your properties": "تجد هنا كل ما لديك من مجتمعات",
        "View details": "رؤية التفاصيل",
        "Handed over": "تم التسليم",
        "In Progress": "قيد التنفيذ",
        "Retal Rise": "رتال رايز",
        "8 Apt Retal Rise, Khobar.": "8 شقة ريتال رايز ، الخبر",
        "Ayala Al Nakheel": "أيالا النخيل",
        "128 Villa Ayala Al ...": "128 فيلا أيالا",
        "Ewan Sedra": "ايوان سدرة",
        "8 Villa Ewan Sedra, Riyadh.": "8 فيلا إيوان السدرة، الرياض."
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

import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import { 
  MessageCircle, Users, Award, Globe, Heart, BookOpen, Star, Trophy, Languages,
  Shield, Bell, Settings, Menu, X, Eye, Wifi, WifiOff, Brain, Lock, Unlock,
  CheckCircle, Send, Share, Plus, TrendingUp, Video, UserPlus, Calendar,
  Phone, Mail, Check, AlertTriangle, Lightbulb, Target, Smile, Layers, MapPin,
  Home, GraduationCap, Handshake, Coffee, Camera
} from 'lucide-react';

// Enhanced UNESCO-focused modal components
const DialogueModal = lazy(() => Promise.resolve({ default: ({ dialogue, onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
    <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-scale-in">
      <h3 className="font-bold text-lg mb-4">🤝 Join Community Dialogue</h3>
      <div className="mb-4">
        <h4 className="font-medium text-gray-800">{dialogue.title}</h4>
        <p className="text-sm text-gray-600">📍 {dialogue.location}</p>
        <p className="text-sm text-blue-600">⏰ {dialogue.nextSession}</p>
      </div>
      <div className="bg-green-50 p-3 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-green-800">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">🛡️ Community Safety Score: {dialogue.safetyRating}%</span>
        </div>
        <p className="text-xs text-green-700 mt-1">Cultural mediator present • Multilingual support</p>
      </div>
      <div className="bg-blue-50 p-2 rounded mb-4">
        <div className="text-xs text-blue-700">
          <div className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            <span>SDG Focus: {dialogue.sdgFocus}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
        <button onClick={onConfirm} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">🌟 Join Circle</button>
      </div>
    </div>
  </div>
)}));

// Enhanced custom hooks for community focus
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage?.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setStoredValue(value);
      window.localStorage?.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('LocalStorage not available');
    }
  }, [key]);

  return [storedValue, setValue];
};

// Comprehensive translation system for 13 refugee languages
const useTranslation = (currentLanguage) => {
  return useMemo(() => {
    const translations = {
      en: {
        appTitle: "BRIDGES 3.0", 
        subtitle: "UNESCO Intercultural Leadership • South Florida",
        tagline: "Building Community Through Dialogue", 
        userLevel: "Community Bridge Builder",
        points: "impact points", 
        protected: "Safe Space", 
        live: "Active",
        tabs: { live: "Dialogues", learn: "Learn", connect: "Community", impact: "SDG Impact" },
        buttons: { join: "Join Circle", reserve: "Reserve Spot", connect: "Connect", start: "Begin", 
                  cancel: "Cancel", confirm: "Join", switchLanguage: "Language" },
        dialogue: { title: "Community Dialogue Circles", liveNow: "3 Active Now" },
        messages: { reservationConfirm: "Spot Reserved!", pointsEarned: "impact points earned!",
                   welcomeMessage: "Welcome to your intercultural community!" },
        community: { southFlorida: "South Florida Communities", localResources: "Local Resources" }
      },
      es: {
        appTitle: "PUENTES 3.0", 
        subtitle: "UNESCO Liderazgo Intercultural • Sur de Florida",
        tagline: "Construyendo Comunidad a Través del Diálogo", 
        userLevel: "Constructor de Puentes Comunitarios",
        points: "puntos de impacto", 
        protected: "Espacio Seguro", 
        live: "Activo",
        tabs: { live: "Diálogos", learn: "Aprender", connect: "Comunidad", impact: "Impacto ODS" },
        buttons: { join: "Unirse al Círculo", reserve: "Reservar Lugar", connect: "Conectar", start: "Comenzar",
                  cancel: "Cancelar", confirm: "Unirse", switchLanguage: "Idioma" },
        dialogue: { title: "Círculos de Diálogo Comunitario", liveNow: "3 Activos Ahora" },
        messages: { reservationConfirm: "¡Lugar Reservado!", pointsEarned: "puntos de impacto ganados!",
                   welcomeMessage: "¡Bienvenido a tu comunidad intercultural!" },
        community: { southFlorida: "Comunidades del Sur de Florida", localResources: "Recursos Locales" }
      },
      ht: {
        appTitle: "PON 3.0", 
        subtitle: "UNESCO Lidèchip Entèkiltirèl • Sid Florida",
        tagline: "Konstwi Kominote nan Dyalòg", 
        userLevel: "Moun k ap Bati Pon Kominote",
        points: "pwen enpak", 
        protected: "Espas ki Ansekirite", 
        live: "Aktif",
        tabs: { live: "Dyalòg", learn: "Aprann", connect: "Kominote", impact: "Enpak SDG" },
        buttons: { join: "Patisipe nan Sèk", reserve: "Rezève Plas", connect: "Konekte", start: "Kòmanse",
                  cancel: "Anile", confirm: "Patisipe", switchLanguage: "Lang" },
        dialogue: { title: "Sèk Dyalòg Kominote", liveNow: "3 Aktif Kounye a" },
        messages: { reservationConfirm: "Plas Rezève!", pointsEarned: "pwen enpak yo genyen!",
                   welcomeMessage: "Byenvini nan kominote entèkiltirèl ou!" },
        community: { southFlorida: "Kominote Sid Florida", localResources: "Resous Lokal" }
      },
      ar: {
        appTitle: "الجسور 3.0", 
        subtitle: "اليونسكو القيادة الثقافية • جنوب فلوريدا",
        tagline: "بناء المجتمع من خلال الحوار", 
        userLevel: "باني جسور المجتمع",
        points: "نقاط التأثير", 
        protected: "مساحة آمنة", 
        live: "نشط",
        tabs: { live: "حوارات", learn: "تعلم", connect: "مجتمع", impact: "تأثير SDG" },
        buttons: { join: "انضم للدائرة", reserve: "احجز مكان", connect: "اتصل", start: "ابدأ",
                  cancel: "إلغاء", confirm: "انضم", switchLanguage: "اللغة" },
        dialogue: { title: "دوائر الحوار المجتمعي", liveNow: "3 نشطة الآن" },
        messages: { reservationConfirm: "تم حجز المكان!", pointsEarned: "نقاط تأثير مكتسبة!",
                   welcomeMessage: "مرحباً بك في مجتمعك متعدد الثقافات!" },
        community: { southFlorida: "مجتمعات جنوب فلوريدا", localResources: "الموارد المحلية" }
      },
      fr: {
        appTitle: "PONTS 3.0", 
        subtitle: "UNESCO Leadership Interculturel • Sud de la Floride",
        tagline: "Construire la Communauté par le Dialogue", 
        userLevel: "Constructeur de Ponts Communautaires",
        points: "points d'impact", 
        protected: "Espace Sûr", 
        live: "Actif",
        tabs: { live: "Dialogues", learn: "Apprendre", connect: "Communauté", impact: "Impact ODD" },
        buttons: { join: "Rejoindre le Cercle", reserve: "Réserver", connect: "Connecter", start: "Commencer",
                  cancel: "Annuler", confirm: "Rejoindre", switchLanguage: "Langue" },
        dialogue: { title: "Cercles de Dialogue Communautaire", liveNow: "3 Actifs Maintenant" },
        messages: { reservationConfirm: "Place Réservée!", pointsEarned: "points d'impact gagnés!",
                   welcomeMessage: "Bienvenue dans votre communauté interculturelle!" },
        community: { southFlorida: "Communautés du Sud de la Floride", localResources: "Ressources Locales" }
      },
      sw: {
        appTitle: "MADARAJA 3.0", 
        subtitle: "UNESCO Uongozi wa Kitamaduni • Kusini mwa Florida",
        tagline: "Kujenga Jamii kwa Mazungumzo", 
        userLevel: "Mjenzi wa Madaraja ya Jamii",
        points: "alama za athari", 
        protected: "Eneo Salama", 
        live: "Amilifu",
        tabs: { live: "Mazungumzo", learn: "Jifunze", connect: "Jamii", impact: "Athari ya SDG" },
        buttons: { join: "Jiunge na Duara", reserve: "Hifadhi Nafasi", connect: "Unganisha", start: "Anza",
                  cancel: "Ghairi", confirm: "Jiunge", switchLanguage: "Lugha" },
        dialogue: { title: "Miduara ya Mazungumzo ya Jamii", liveNow: "3 Amilifu Sasa" },
        messages: { reservationConfirm: "Nafasi Imehifadhiwa!", pointsEarned: "alama za athari zimepatikana!",
                   welcomeMessage: "Karibu katika jamii yako ya kitamaduni!" },
        community: { southFlorida: "Jamii za Kusini mwa Florida", localResources: "Rasilimali za Mitaa" }
      },
      fa: {
        appTitle: "پل‌ها 3.0", 
        subtitle: "رهبری بین‌فرهنگی یونسکو • جنوب فلوریدا",
        tagline: "ساخت جامعه از طریق گفتگو", 
        userLevel: "سازنده پل‌های جامعه",
        points: "امتیازات تأثیر", 
        protected: "فضای امن", 
        live: "فعال",
        tabs: { live: "گفتگوها", learn: "یادگیری", connect: "جامعه", impact: "تأثیر SDG" },
        buttons: { join: "پیوستن به دایره", reserve: "رزرو جا", connect: "ارتباط", start: "شروع",
                  cancel: "لغو", confirm: "پیوستن", switchLanguage: "زبان" },
        dialogue: { title: "دایره‌های گفتگوی جامعه", liveNow: "3 فعال الآن" },
        messages: { reservationConfirm: "جا رزرو شد!", pointsEarned: "امتیازات تأثیر کسب شد!",
                   welcomeMessage: "به جامعه بین‌فرهنگی خود خوش آمدید!" },
        community: { southFlorida: "جوامع جنوب فلوریدا", localResources: "منابع محلی" }
      },
      ps: {
        appTitle: "پلونه 3.0", 
        subtitle: "د یونسکو د کلتورونو ترمنځ مشرتابه • د فلوریډا سویل",
        tagline: "د خبرو اترو له لارې د ټولنې جوړول", 
        userLevel: "د ټولنې د پلونو جوړونکی",
        points: "د اغیزو ټکي", 
        protected: "خوندي ځای", 
        live: "فعال",
        tabs: { live: "خبرې", learn: "زده کړه", connect: "ټولنه", impact: "د SDG اغیزه" },
        buttons: { join: "په دایره کې ګډون", reserve: "ځای ساتل", connect: "تړاو", start: "پیل",
                  cancel: "لغوه", confirm: "ګډون", switchLanguage: "ژبه" },
        dialogue: { title: "د ټولنې د خبرو اترو حلقې", liveNow: "3 اوس فعال" },
        messages: { reservationConfirm: "ځای وساتل شو!", pointsEarned: "د اغیزو ټکي ترلاسه شول!",
                   welcomeMessage: "ستاسو کولتوري ټولنې ته ښه راغلاست!" },
        community: { southFlorida: "د سویل فلوریډا ټولنې", localResources: "سیمه ایز سرچینې" }
      },
      uk: {
        appTitle: "МОСТИ 3.0", 
        subtitle: "Міжкультурне лідерство ЮНЕСКО • Південна Флорида",
        tagline: "Будуємо спільноту через діалог", 
        userLevel: "Будівельник громадських мостів",
        points: "бали впливу", 
        protected: "Безпечний простір", 
        live: "Активно",
        tabs: { live: "Діалоги", learn: "Навчання", connect: "Спільнота", impact: "Вплив ЦСР" },
        buttons: { join: "Приєднатися до кола", reserve: "Зарезервувати", connect: "З'єднати", start: "Почати",
                  cancel: "Скасувати", confirm: "Приєднатися", switchLanguage: "Мова" },
        dialogue: { title: "Кола громадського діалогу", liveNow: "3 активні зараз" },
        messages: { reservationConfirm: "Місце зарезервовано!", pointsEarned: "бали впливу отримано!",
                   welcomeMessage: "Вітаємо у вашій міжкультурній спільноті!" },
        community: { southFlorida: "Спільноти Південної Флориди", localResources: "Місцеві ресурси" }
      },
      ru: {
        appTitle: "МОСТЫ 3.0", 
        subtitle: "Межкультурное лидерство ЮНЕСКО • Южная Флорида",
        tagline: "Строим сообщество через диалог", 
        userLevel: "Строитель общественных мостов",
        points: "баллы влияния", 
        protected: "Безопасное пространство", 
        live: "Активно",
        tabs: { live: "Диалоги", learn: "Обучение", connect: "Сообщество", impact: "Влияние ЦУР" },
        buttons: { join: "Присоединиться к кругу", reserve: "Зарезервировать", connect: "Связать", start: "Начать",
                  cancel: "Отменить", confirm: "Присоединиться", switchLanguage: "Язык" },
        dialogue: { title: "Круги общественного диалога", liveNow: "3 активных сейчас" },
        messages: { reservationConfirm: "Место зарезервировано!", pointsEarned: "баллы влияния получены!",
                   welcomeMessage: "Добро пожаловать в ваше межкультурное сообщество!" },
        community: { southFlorida: "Сообщества Южной Флориды", localResources: "Местные ресурсы" }
      },
      my: {
        appTitle: "တံတားများ 3.0", 
        subtitle: "UNESCO လူမျိုးစုပေါင်းစုံ ခေါင်းဆောင်မှု • တောင်ဖလောရီဒါ",
        tagline: "ဆွေးနွေးမှုများဖြင့် အသိုင်းအဝိုင်း တည်ဆောက်ခြင်း", 
        userLevel: "အသိုင်းအဝိုင်း တံတား တည်ဆောက်သူ",
        points: "သြဇာအမှတ်များ", 
        protected: "လုံခြုံသော နေရာ", 
        live: "လှုပ်ရှားမှု",
        tabs: { live: "ဆွေးနွေးမှုများ", learn: "သင်ယူခြင်း", connect: "အသိုင်းအဝိုင်း", impact: "SDG သြဇာ" },
        buttons: { join: "စက်ဝိုင်းတွင် ပါဝင်ရန်", reserve: "နေရာ ကြိုတင်မှာ", connect: "ချိတ်ဆက်", start: "စတင်",
                  cancel: "မလုပ်တော့", confirm: "ပါဝင်ရန်", switchLanguage: "ဘာသာစကား" },
        dialogue: { title: "အသိုင်းအဝိုင်း ဆွေးနွေးမှု စက်ဝိုင်းများ", liveNow: "လက်ရှိ 3 ခု လှုပ်ရှားနေ" },
        messages: { reservationConfirm: "နေရာ ကြိုတင်မှာထားပြီး!", pointsEarned: "သြဇာအမှတ်များ ရရှိပြီး!",
                   welcomeMessage: "သင့်ရဲ့ လူမျိုးစုပေါင်းစုံ အသိုင်းအဝိုင်းထဲကို ကြိုဆိုပါတယ်!" },
        community: { southFlorida: "တောင်ဖလောရီဒါ အသိုင်းအဝိုင်းများ", localResources: "ဒေသန္တရ အရင်းအမြစ်များ" }
      },
      kr: {
        appTitle: "တံတားစားများ 3.0", 
        subtitle: "UNESCO လိုံ့ပစ့်ကျိုံး မုၢ်လိကီၣ် • တီးမွီးအၢ်ဖံးလံးရံးဒီးအါး",
        tagline: "သုး တၢ်ထူသီးလိံးကဲ ပျဲတၢ်ပီၤခံဲးလဲၤ သု့တီၣ် သ့ုး", 
        userLevel: "သုး တံတားစားတီၣ်လီၤ သ့ုးဖျံးဖျံး",
        points: "သုး သုးအီၤသာၤ ကဲၣ်", 
        protected: "မုၢ်ကီၤတံးလၢ", 
        live: "လု့ဝါကီၤ",
        tabs: { live: "သုး တၢ်ပီၤခံဲးလဲၤ", learn: "အီၤတံး", connect: "သုး", impact: "SDG သုး သုးအီၤသာၤ" },
        buttons: { join: "သုး ဝံၤလိံးထူၣ် ဝါ့ကီၤ", reserve: "မုၢ်အ့လုၢ် တံးမုၢ်", connect: "ခံါ်တီၣ်", start: "တီၤ",
                  cancel: "မုး", confirm: "ဝါ့ကီၤ", switchLanguage: "ပဝီၤအံးဖံး" },
        dialogue: { title: "သုး သုး တၢ်ပီၤခံဲးလဲၤ ဝံၤလိံး", liveNow: "3 လု့ဝါကီၤနံၣ်" },
        messages: { reservationConfirm: "မုၢ်အ့လုၢ် တံးမုၢ်ဖိး!", pointsEarned: "သုး သုးအီၤသာၤ ကဲၣ် ပါ့အီၤ!",
                   welcomeMessage: "နၢ့သုး လိုံ့ပစ့်ကျိုံး မုၢ်လိကီၣ်သုး ဝါၣ်ဟးကါဒး!" },
        community: { southFlorida: "တီးမွီးအၢ်ဖံးလံးရံးဒီးအါး သုး", localResources: "မုၢ်ဖိါလီၤ သ့ၢ်ဆူးကီၤ" }
      },
      rh: {
        appTitle: "সাংকু 3.0", 
        subtitle: "UNESCO দেশতান সিক্ষত্ব • দক্ষিণ ফ্লোরিডা",
        tagline: "মতিবুদ্ধিয়ে মানুষী সোসাইটি বানাইব", 
        userLevel: "গামের সাংকু বানাইয়া",
        points: "ফায়দা নম্বর", 
        protected: "নিরাপত্ত জায়গা", 
        live: "কাম গরতসে",
        tabs: { live: "মতিবুদ্ধি", learn: "পড়া", connect: "গাম", impact: "SDG ফায়দা" },
        buttons: { join: "গোল ভিতর যাইব", reserve: "জায়গা রাখিব", connect: "মিলাইব", start: "শুরু",
                  cancel: "ছাড়িদিব", confirm: "যাইব", switchLanguage: "বাশা" },
        dialogue: { title: "গামের মতিবুদ্ধি গোল", liveNow: "3 টা এইলা কাম গরতসে" },
        messages: { reservationConfirm: "জায়গা রাখি রাখসি!", pointsEarned: "ফায়দা নম্বর পাইসি!",
                   welcomeMessage: "তোমার মিশ্র সংস্কৃতির গামে আইসো!" },
        community: { southFlorida: "দক্ষিণ ফ্লোরিডার গাম", localResources: "লোকাল জিনিসপত্র" }
      },
      am: {
        appTitle: "ድልድዮች 3.0", 
        subtitle: "UNESCO ነባራዊ ባህላዊ አመራር • ደቡብ ፍሎሪዳ",
        tagline: "በውይይት ማህበረሰብ መገንባት", 
        userLevel: "የማህበረሰብ ድልድይ ሠሪ",
        points: "የተጽዕኖ ነጥቦች", 
        protected: "ደህንነቱ የተጠበቀ ቦታ", 
        live: "ንቁ",
        tabs: { live: "ውይይቶች", learn: "መማር", connect: "ማህበረሰብ", impact: "የSDG ተጽዕኖ" },
        buttons: { join: "ክበብ ውስጥ መግባት", reserve: "ቦታ ማስያዝ", connect: "ማገናኘት", start: "ማስጀመር",
                  cancel: "መሰረዝ", confirm: "መግባት", switchLanguage: "ቋንቋ" },
        dialogue: { title: "የማህበረሰብ ውይይት ክበቦች", liveNow: "3 አሁን ንቁ" },
        messages: { reservationConfirm: "ቦታ ተያዘ!", pointsEarned: "የተጽዕኖ ነጥቦች ተገኙ!",
                   welcomeMessage: "ወደ ነባራዊ ባህላዊ ማህበረሰብዎ እንኳን በደህና መጡ!" },
        community: { southFlorida: "የደቡብ ፍሎሪዳ ማህበረሰቦች", localResources: "አካባቢያዊ ግብዓቶች" }
      }
    };
    return translations[currentLanguage] || translations.en;
  }, [currentLanguage]);
};

const useNotifications = () => {
  const [notifications, setNotifications] = useState(8);
  
  const addNotification = useCallback(() => {
    setNotifications(prev => prev + 1);
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, []);
  
  const clearNotification = useCallback(() => {
    setNotifications(prev => Math.max(0, prev - 1));
  }, []);
  
  return { notifications, addNotification, clearNotification };
};

// Enhanced optimized components for community focus
const TabButton = React.memo(({ id, icon: Icon, label, isActive, onClick, notifications: notifCount }) => (
  <button
    onClick={() => onClick(id)}
    className={`relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      isActive 
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
        : 'text-gray-600 hover:bg-gray-100 hover:shadow-md'
    }`}
    aria-label={`${label} tab ${notifCount > 0 ? `with ${notifCount} notifications` : ''}`}
    role="tab"
    aria-selected={isActive}
  >
    <Icon size={22} aria-hidden="true" />
    <span className="text-xs mt-1 font-medium">{label}</span>
    {notifCount > 0 && (
      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce" aria-label={`${notifCount} notifications`}>
        {notifCount}
      </div>
    )}
  </button>
));

const DialogueCard = React.memo(({ dialogue, onReserve, t }) => (
  <article className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 transform hover:scale-[1.02]">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-bold text-gray-800 text-sm leading-tight">{dialogue.title}</h3>
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
        dialogue.status === 'Live Now' ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-blue-100 text-blue-700'
      }`} aria-live="polite">
        {dialogue.status === 'Live Now' ? '🟢 Active' : '⏰ Starting Soon'}
      </span>
    </div>
    
    <div className="mb-3 space-y-1">
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <Users className="w-3 h-3" aria-hidden="true" />
        <span>👥 {dialogue.participants} participants</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <MapPin className="w-3 h-3" aria-hidden="true" />
        <span>📍 {dialogue.location}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-blue-600">
        <Target className="w-3 h-3" />
        <span>🎯 SDG {dialogue.sdgFocus}</span>
      </div>
    </div>
    
    <div className="flex gap-2">
      <button 
        onClick={() => onReserve(dialogue)}
        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        aria-label={`${dialogue.status === 'Live Now' ? 'Join' : 'Reserve spot for'} ${dialogue.title}`}
      >
        {dialogue.status === 'Live Now' ? '🚀 Join Now' : '📅 Reserve Spot'}
      </button>
      <button 
        className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        aria-label={`Share ${dialogue.title}`}
      >
        <Share className="w-4 h-4 text-gray-600" aria-hidden="true" />
      </button>
    </div>
  </article>
));

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center z-50" role="status" aria-label="Loading">
    <div className="text-center text-white">
      <div className="relative mb-6">
        <Globe className="w-20 h-20 mx-auto mb-4 animate-spin" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-8 h-8 text-green-300 animate-pulse" aria-hidden="true" />
        </div>
      </div>
      <p className="text-xl font-bold mb-2">🌍 Loading BRIDGES 3.0...</p>
      <p className="text-sm opacity-90">🤝 Building intercultural connections</p>
      <p className="text-xs opacity-75 mt-2">UNESCO Intercultural Leadership Program</p>
      <p className="text-xs opacity-75">📍 South Florida Community Focus</p>
    </div>
  </div>
);

const SuccessToast = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right z-50" role="alert">
    <div className="flex items-center gap-2">
      <CheckCircle className="w-5 h-5" aria-hidden="true" />
      <span>✨ {message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-green-600 rounded p-1" aria-label="Close notification">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// Main UNESCO Community Platform Component
const BridgesUNESCO = () => {
  // Enhanced state management for community platform
  const [activeTab, setActiveTab] = useState('dialogue');
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('bridges-language', 'en');
  const [userPoints, setUserPoints] = useLocalStorage('bridges-points', 1247);
  const [highContrast, setHighContrast] = useLocalStorage('bridges-contrast', false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDialogue, setSelectedDialogue] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  
  const { notifications, addNotification, clearNotification } = useNotifications();
  const t = useTranslation(currentLanguage);

  // Comprehensive language configuration for South Florida refugees
  const languages = useMemo(() => [
    { code: 'en', name: 'English', flag: '🇺🇸', rtl: false, nativeName: 'English' },
    { code: 'es', name: 'Español', flag: '🇻🇪', rtl: false, nativeName: 'Español' },
    { code: 'ht', name: 'Kreyòl Ayisyen', flag: '🇭🇹', rtl: false, nativeName: 'Kreyòl' },
    { code: 'ar', name: 'العربية', flag: '🇸🇾', rtl: true, nativeName: 'العربية' },
    { code: 'fr', name: 'Français', flag: '🇨🇩', rtl: false, nativeName: 'Français' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', rtl: false, nativeName: 'Kiswahili' },
    { code: 'fa', name: 'دری', flag: '🇦🇫', rtl: true, nativeName: 'دری' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫', rtl: true, nativeName: 'پښتو' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦', rtl: false, nativeName: 'Українська' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', rtl: false, nativeName: 'Русский' },
    { code: 'my', name: 'မြန်မာ', flag: '🇲🇲', rtl: false, nativeName: 'မြန်မာ' },
    { code: 'kr', name: 'ကညီကျိာ်', flag: '🇲🇲', rtl: false, nativeName: 'ကညီကျိာ်' },
    { code: 'rh', name: 'রোহিঙ্গা', flag: '🇲🇲', rtl: false, nativeName: 'রোহিঙ্গা' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹', rtl: false, nativeName: 'አማርኛ' }
  ], []);

  const currentLang = useMemo(() => 
    languages.find(lang => lang.code === currentLanguage), 
    [languages, currentLanguage]
  );
  
  const isRTL = currentLang?.rtl || false;

  // South Florida community dialogue circles with SDG focus
  const southFloridaDialogues = useMemo(() => [
    {
      id: 1, 
      title: "🏠 Housing Rights & Dignity Circle",
      participants: 28,
      status: "Live Now", 
      safetyRating: 98, 
      nextSession: "Now Active",
      location: "Little Haiti Community Center",
      sdgFocus: "SDG 11: Sustainable Cities",
      languages: ["Kreyòl", "English", "Spanish"],
      hostOrg: "Sant La Haitian Neighborhood Center"
    },
    {
      id: 2, 
      title: "👩‍💼 Women's Economic Empowerment",
      participants: 35,
      status: "Starting Soon", 
      safetyRating: 97, 
      nextSession: "In 20 minutes",
      location: "Miramar Community Center", 
      sdgFocus: "SDG 5: Gender Equality",
      languages: ["Rohingya", "English", "Arabic"],
      hostOrg: "Women's Fund Miami-Dade"
    },
    {
      id: 3, 
      title: "🎓 Education Access for All",
      participants: 42,
      status: "Weekly", 
      safetyRating: 99, 
      nextSession: "Tomorrow 6:00 PM",
      location: "Homestead Community Center",
      sdgFocus: "SDG 4: Quality Education",
      languages: ["Spanish", "English", "Kreyòl"],
      hostOrg: "Miami-Dade School Board"
    },
    {
      id: 4, 
      title: "🌱 Climate Resilience Together",
      participants: 31,
      status: "Weekly", 
      safetyRating: 96, 
      nextSession: "Friday 7:00 PM",
      location: "Florida International University",
      sdgFocus: "SDG 13: Climate Action",
      languages: ["English", "Spanish", "Ukrainian"],
      hostOrg: "FIU Climate Resilience Center"
    }
  ], []);

  // Enhanced event handlers for community focus
  const handleLanguageChange = useCallback((e) => {
    const selectedName = e.target.value;
    const newLang = languages.find(lang => lang.nativeName === selectedName);
    if (newLang && newLang.code !== currentLanguage) {
      setLoading(true);
      setTimeout(() => {
        setCurrentLanguage(newLang.code);
        setLoading(false);
        setSuccessMessage(`🌍 Welcome! Language changed to ${newLang.flag} ${newLang.nativeName}!`);
        setTimeout(() => setSuccessMessage(''), 3000);
      }, 1200);
    }
  }, [languages, currentLanguage]);

  const handleReserveSpot = useCallback((dialogue) => {
    setSelectedDialogue(dialogue);
    setShowModal(true);
  }, []);

  const confirmReservation = useCallback(() => {
    setUserPoints(prev => prev + 25);
    setShowModal(false);
    setSuccessMessage(`🎉 ${t.messages.reservationConfirm} Building community connections! +25 ${t.messages.pointsEarned}`);
    addNotification();
    setTimeout(() => setSuccessMessage(''), 3000);
  }, [t.messages, addNotification]);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div 
      className={`max-w-md mx-auto min-h-screen transition-all duration-300 ${
        highContrast ? 'bg-black text-white' : 'bg-gray-50'
      } ${isRTL ? 'rtl' : 'ltr'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={currentLanguage}
    >
      {/* UNESCO Community-Focused Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Menu size={20} />
            </button>
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Globe className="w-5 h-5" />
                <h1 className="text-lg font-bold">{t.appTitle}</h1>
                <Heart className="w-4 h-4 text-red-300 animate-pulse" />
              </div>
              <p className="text-xs opacity-90">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={clearNotification} className="p-2 hover:bg-white/20 rounded-lg transition-colors relative">
                <Bell size={18} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>
                )}
              </button>
              <button onClick={() => setHighContrast(!highContrast)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <Eye size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm opacity-90">🤝 {t.tagline}</p>
              <p className="font-bold text-lg">🌟 Community Member</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Handshake className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs">🏆 {t.userLevel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4 text-green-300" />
                  <span className="text-xs">⭐ {userPoints.toLocaleString()} {t.points}</span>
                </div>
              </div>
            </div>
            <div>
              <select 
                value={currentLang ? currentLang.nativeName : 'English'}
                onChange={handleLanguageChange}
                className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm backdrop-blur-sm"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.nativeName} className="text-gray-800">
                    {lang.flag} {lang.nativeName}
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-between mt-1 text-xs opacity-80">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>🛡️ {t.protected}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>📍 South FL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Community Impact Metrics */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
          <div className="text-center mb-3">
            <h3 className="text-sm font-bold text-gray-800">🏛️ UNESCO SDG Impact Dashboard</h3>
            <p className="text-xs text-gray-600">📍 {t.community.southFlorida}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <p className="text-2xl font-bold text-blue-600">🗣️ 47</p>
              <p className="text-xs text-gray-600">Active Dialogues</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <p className="text-2xl font-bold text-green-600">🌟 89%</p>
              <p className="text-xs text-gray-600">Integration Success</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <p className="text-2xl font-bold text-purple-600">🤝 234</p>
              <p className="text-xs text-gray-600">New Connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Tabs */}
      <nav className="grid grid-cols-4 gap-2 px-4 mb-4" role="tablist">
        <TabButton id="dialogue" icon={MessageCircle} label={t.tabs.live} isActive={activeTab === 'dialogue'} onClick={handleTabChange} notifications={4} />
        <TabButton id="learn" icon={GraduationCap} label={t.tabs.learn} isActive={activeTab === 'learn'} onClick={handleTabChange} notifications={2} />
        <TabButton id="connect" icon={Users} label={t.tabs.connect} isActive={activeTab === 'connect'} onClick={handleTabChange} notifications={6} />
        <TabButton id="impact" icon={TrendingUp} label={t.tabs.impact} isActive={activeTab === 'impact'} onClick={handleTabChange} notifications={1} />
      </nav>

      {/* Main Community Content */}
      <main className="px-4 pb-24">
        {activeTab === 'dialogue' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">🗣️ {t.dialogue.title}</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">🟢 4 Active Now</span>
              </div>
            </div>
            {southFloridaDialogues.map((dialogue) => (
              <DialogueCard key={dialogue.id} dialogue={dialogue} onReserve={handleReserveSpot} t={t} />
            ))}
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">🏛️ UNESCO Partnership</h3>
              <p className="text-sm text-blue-700">Building intercultural leadership through community dialogue in partnership with local organizations.</p>
            </div>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">🎓 Intercultural Learning Hub</h2>
            
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-medium">🌍 Cultural Bridge Building</h3>
                  <p className="text-sm text-gray-600">SDG 4 • UNESCO Leadership Training</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">🎯 Learn intercultural dialogue skills and community leadership approaches</p>
              <button 
                onClick={() => {
                  setUserPoints(prev => prev + 15);
                  setSuccessMessage('🎓 Cultural competency training started! +15 impact points');
                  setTimeout(() => setSuccessMessage(''), 3000);
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Begin Leadership Training
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Languages className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-medium">🗣️ Community Language Exchange</h3>
                  <p className="text-sm text-gray-600">13 Languages • Peer-to-Peer Learning</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">🤝 Practice languages with community members and build meaningful connections</p>
              <button 
                onClick={() => {
                  setUserPoints(prev => prev + 20);
                  setSuccessMessage('🗣️ Language exchange matched! +20 impact points');
                  setTimeout(() => setSuccessMessage(''), 3000);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                🌟 Find Language Partner
              </button>
            </div>
          </div>
        )}

        {activeTab === 'connect' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">🤝 {t.community.southFlorida}</h2>
            
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  👩‍🏫
                </div>
                <div>
                  <h3 className="font-semibold">🌟 Maria Gonzalez</h3>
                  <p className="text-sm text-gray-600">🏛️ Community Integration Specialist</p>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-500" />
                    <span className="text-xs text-blue-600">📍 Little Havana Community Center</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-green-700">🎯 Helping Venezuelan families navigate housing, education, and healthcare resources in Miami-Dade</p>
              </div>
              <button 
                onClick={() => {
                  setUserPoints(prev => prev + 10);
                  setSuccessMessage('🤝 Connection request sent to Maria! +10 impact points');
                  setTimeout(() => setSuccessMessage(''), 3000);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                🌟 Connect for Support
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-semibold">🏥 Dr. Ahmed Hassan</h3>
                  <p className="text-sm text-gray-600">🩺 Community Health Navigator</p>
                  <div className="flex items-center gap-1">
                    <Languages className="w-3 h-3 text-purple-500" />
                    <span className="text-xs text-purple-600">Arabic, English, French</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-purple-700">🏥 Connecting refugee families with healthcare services and mental health support in Broward County</p>
              </div>
              <button 
                onClick={() => {
                  setUserPoints(prev => prev + 10);
                  setSuccessMessage('🏥 Healthcare navigator connected! +10 impact points');
                  setTimeout(() => setSuccessMessage(''), 3000);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                🩺 Get Health Support
              </button>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">📊 UNESCO SDG Impact</h2>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="font-bold mb-3">🏛️ UNESCO Intercultural Leadership</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">🤝 1,247</p>
                  <p className="text-xs opacity-90">Community Connections</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">🌍 13</p>
                  <p className="text-xs opacity-90">Languages Supported</p>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm font-medium mb-1">🎯 Your SDG Contributions</div>
                <div className="text-sm opacity-90">✨ Advancing SDGs 4, 5, 10, 11, 16 through dialogue • 🏆 UNESCO recognition earned</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl mb-2">🎓</div>
                <p className="text-sm font-medium text-gray-800">SDG 4</p>
                <p className="text-xs text-gray-600">Education Access</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl mb-2">👩‍💼</div>
                <p className="text-sm font-medium text-gray-800">SDG 5</p>
                <p className="text-xs text-gray-600">Gender Equality</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-sm font-medium text-gray-800">SDG 10</p>
                <p className="text-xs text-gray-600">Reduced Inequalities</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-sm font-medium text-gray-800">SDG 16</p>
                <p className="text-xs text-gray-600">Peace & Justice</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">📧 UNESCO Program Contact</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="bg-blue-100 p-3 rounded border">
                  <div className="text-sm font-medium text-blue-800">📞 Project Leader</div>
                  <div className="text-sm text-blue-600">✉️ tarruck@stanford.edu</div>
                  <div className="text-xs text-blue-500">🏛️ Stanford International Policy & Governance</div>
                  <div className="text-xs text-blue-500 mt-1">🌍 UNESCO Intercultural Leadership Program</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Enhanced Modals */}
      {showModal && selectedDialogue && (
        <Suspense fallback={<div>Loading...</div>}>
          <DialogueModal 
            dialogue={selectedDialogue}
            onClose={() => setShowModal(false)}
            onConfirm={confirmReservation}
          />
        </Suspense>
      )}

      {/* Success Toast */}
      {successMessage && (
        <SuccessToast 
          message={successMessage} 
          onClose={() => setSuccessMessage('')} 
        />
      )}

      {/* Community-Focused Footer */}
      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-gray-700">🏛️ {t.appTitle}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600">🤝 Building Bridges</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-500">📧 UNESCO Program • tarruck@stanford.edu</span>
            <span className="text-xs text-gray-500">🌍 v3.2.0 • South FL</span>
          </div>
        </div>
      </footer>

      {/* Community Action Button */}
      <div className="fixed bottom-20 right-4">
        <button 
          onClick={() => {
            setUserPoints(prev => prev + 5);
            setSuccessMessage('💫 Community spirit shared! +5 impact points earned!');
            setTimeout(() => setSuccessMessage(''), 2000);
          }}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 transform"
          title="Spread community love"
        >
          <Handshake size={28} className="animate-pulse" />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default BridgesUNESCO;

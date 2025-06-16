import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Award, 
  Globe, 
  MapPin, 
  Heart, 
  BookOpen, 
  Calendar,
  Star,
  Languages,
  Home,
  GraduationCap,
  Shield,
  ChevronRight,
  Bell,
  Menu,
  X,
  Handshake,
  Play,
  CheckCircle,
  TrendingUp,
  Brain,
  Target,
  Phone,
  Mail,
  Check
} from 'lucide-react';

const BridgesUNESCO = () => {
  const [activeTab, setActiveTab] = useState('dialogue');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [userPoints, setUserPoints] = useState(3247);
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState(6);

  // Translation system with cultural context
  const translations = {
    en: {
      appTitle: "BRIDGES 3.0",
      subtitle: "UNESCO Youth for Peace • AI-Enhanced Platform",
      tagline: "AI-Powered Peace Building",
      userLevel: "Certified Peace Ambassador",
      points: "points",
      tabs: {
        live: "Live",
        learn: "Learn", 
        connect: "Connect",
        impact: "Impact"
      },
      buttons: {
        join: "Join Dialogue",
        reserve: "Reserve Spot",
        connect: "Connect",
        start: "Start Learning"
      },
      dialogue: {
        title: "Live Dialogues",
        liveNow: "3 Live Now"
      }
    },
    es: {
      appTitle: "PUENTES 3.0",
      subtitle: "UNESCO Jóvenes por la Paz • Plataforma con IA",
      tagline: "Construcción de Paz con IA", 
      userLevel: "Embajador de Paz Certificado",
      points: "puntos",
      tabs: {
        live: "En Vivo",
        learn: "Aprender",
        connect: "Conectar", 
        impact: "Impacto"
      },
      buttons: {
        join: "Unirse al Diálogo",
        reserve: "Reservar Lugar",
        connect: "Conectar",
        start: "Comenzar Aprendizaje"
      },
      dialogue: {
        title: "Diálogos en Vivo",
        liveNow: "3 En Vivo Ahora"
      }
    },
    ht: {
      appTitle: "PON 3.0",
      subtitle: "UNESCO Jèn pou Lapè • Platfòm ak AI",
      tagline: "Konstwi Lapè ak AI",
      userLevel: "Anbasadè Lapè Sètifye",
      points: "pwen",
      tabs: {
        live: "K ap Viv",
        learn: "Aprann",
        connect: "Konekte",
        impact: "Enpak"
      },
      buttons: {
        join: "Patisipe nan Dyalòg",
        reserve: "Rezève Plas",
        connect: "Konekte",
        start: "Kòmanse Aprann"
      },
      dialogue: {
        title: "Dyalòg K ap Viv",
        liveNow: "3 K ap Viv Kounye a"
      }
    },
    ar: {
      appTitle: "الجسور 3.0",
      subtitle: "اليونسكو الشباب من أجل السلام • منصة بالذكاء الاصطناعي",
      tagline: "بناء السلام بالذكاء الاصطناعي",
      userLevel: "سفير سلام معتمد", 
      points: "نقاط",
      tabs: {
        live: "مباشر",
        learn: "تعلم",
        connect: "اتصل", 
        impact: "تأثير"
      },
      buttons: {
        join: "انضم للحوار",
        reserve: "احجز مكان",
        connect: "اتصل",
        start: "ابدأ التعلم"
      },
      dialogue: {
        title: "الحوارات المباشرة",
        liveNow: "3 مباشر الآن"
      }
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
    { code: 'es', name: 'Español', flag: '🇪🇸', nativeName: 'Español' },
    { code: 'ht', name: 'Kreyòl', flag: '🇭🇹', nativeName: 'Kreyòl' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', nativeName: 'العربية' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', nativeName: 'Français' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', nativeName: 'Português' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', nativeName: 'Kiswahili' },
    { code: 'fa', name: 'دری', flag: '🇦🇫', nativeName: 'دری' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫', nativeName: 'پښتو' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦', nativeName: 'Українська' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', nativeName: 'Русский' },
    { code: 'my', name: 'မြန်မာ', flag: '🇲🇲', nativeName: 'မြန်မာ' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹', nativeName: 'አማርኛ' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);
  const t = translations[currentLanguage] || translations.en;

  const handleLanguageChange = (e) => {
    const selectedName = e.target.value;
    const newLang = languages.find(lang => lang.nativeName === selectedName);
    if (newLang) {
      setCurrentLanguage(newLang.code);
    }
  };

  const dialogues = [
    {
      id: 1,
      title: "Housing Rights & Dignity Circle",
      participants: 32,
      cultures: ["Venezuelan", "Haitian", "Host Community"],
      status: "Live Now",
      location: "Little Haiti Community Center",
      nextSession: "Now Active",
      safetyRating: 99
    },
    {
      id: 2,
      title: "Women's Economic Empowerment",
      participants: 48,
      cultures: ["Multi-Cultural", "Local Students"],
      status: "Starting Soon",
      location: "Miramar Community Center",
      nextSession: "In 15 minutes",
      safetyRating: 95
    },
    {
      id: 3,
      title: "Education Access for All",
      participants: 67,
      cultures: ["Venezuelan", "Guatemalan", "Cuban"],
      status: "Weekly",
      location: "Florida International University",
      nextSession: "Saturday 2:00 PM",
      safetyRating: 98
    }
  ];

  const learningModules = [
    {
      id: 1,
      title: "Cultural Competency Training",
      description: "15-min AI-guided assessment",
      icon: Brain,
      duration: "15 min"
    },
    {
      id: 2,
      title: "Empathy Building Simulation",
      description: "Cross-cultural perspective experience",
      icon: Heart,
      duration: "30 min"
    },
    {
      id: 3,
      title: "Language Bridge Builder",
      description: "13-language communication support",
      icon: Languages,
      duration: "20 min"
    }
  ];

  const connections = [
    {
      id: 1,
      name: "Dr. Maria Santos",
      role: "Cultural Psychology Expert",
      organization: "Sant La Haitian Neighborhood Center",
      expertise: ["Trauma Recovery", "Family Dynamics"],
      languages: ["Spanish", "English"],
      available: "Now"
    },
    {
      id: 2,
      name: "Jean-Baptiste Michel", 
      role: "Youth Community Organizer",
      organization: "Women's Fund Miami-Dade",
      expertise: ["Civic Engagement", "Education Access"],
      languages: ["Creole", "French", "English"],
      available: "This Week"
    }
  ];

  const TabButton = ({ id, icon: Icon, label, isActive, onClick, notifications: notifCount }) => (
    <button
      onClick={() => onClick(id)}
      className={`relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
          : 'text-gray-600 hover:bg-gray-100 hover:shadow-md'
      }`}
    >
      <Icon size={22} />
      <span className="text-xs mt-1 font-medium">{label}</span>
      {notifCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
          {notifCount}
        </div>
      )}
    </button>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50">
      
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {showMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Globe className="w-5 h-5" />
                <h1 className="text-lg font-bold">{t.appTitle}</h1>
                <Brain className="w-4 h-4 text-green-300 animate-pulse" />
              </div>
              <p className="text-xs opacity-90">{t.subtitle}</p>
            </div>
            <button 
              onClick={() => setNotifications(prev => Math.max(0, prev - 1))}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors relative"
            >
              <Bell size={18} />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm opacity-90">{t.tagline}</p>
              <p className="font-bold text-lg">Tarruck Wheeler</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs">{t.userLevel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs">{userPoints.toLocaleString()} {t.points}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
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
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      {showMenu && (
        <div className="bg-white border-b shadow-xl p-4">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">UNESCO Program</div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-sm">Learning Hub</div>
                  <div className="text-xs text-gray-500">Cultural competency training</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Award className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-sm">Impact Stories</div>
                  <div className="text-xs text-gray-500">Community success stories</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm font-medium text-blue-800 mb-1">Contact Project Leader</div>
              <div className="text-sm text-blue-600">tarruck@stanford.edu</div>
              <div className="text-xs text-blue-500">Stanford International Policy & Governance</div>
            </div>
          </div>
        </div>
      )}

      {/* Real-Time Metrics */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">23</p>
              <p className="text-xs text-gray-600">Active Dialogues</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">94%</p>
              <p className="text-xs text-gray-600">Wellbeing Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-xs text-gray-600">Conflicts Prevented</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-4 gap-2 px-4 mb-4">
        <TabButton id="dialogue" icon={MessageCircle} label={t.tabs.live} isActive={activeTab === 'dialogue'} onClick={setActiveTab} notifications={3} />
        <TabButton id="learn" icon={Brain} label={t.tabs.learn} isActive={activeTab === 'learn'} onClick={setActiveTab} notifications={1} />
        <TabButton id="connect" icon={Users} label={t.tabs.connect} isActive={activeTab === 'connect'} onClick={setActiveTab} notifications={2} />
        <TabButton id="impact" icon={TrendingUp} label={t.tabs.impact} isActive={activeTab === 'impact'} onClick={setActiveTab} notifications={0} />
      </div>

      {/* Content Areas */}
      <div className="px-4 pb-24">
        {activeTab === 'dialogue' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">{t.dialogue.title}</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-red-600 font-medium">{t.dialogue.liveNow}</span>
              </div>
            </div>
            
            {dialogues.map((dialogue) => (
              <div key={dialogue.id} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all cultural-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">{dialogue.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    dialogue.status === 'Live Now' ? 'bg-red-100 text-red-700 animate-pulse' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {dialogue.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Users className="w-3 h-3" />
                  <span>{dialogue.participants} participants</span>
                  <MapPin className="w-3 h-3 ml-2" />
                  <span>{dialogue.location}</span>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setUserPoints(prev => prev + 50)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    {dialogue.status === 'Live Now' ? 'Join Live' : t.buttons.reserve}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">UNESCO Learning Hub</h2>
              <span className="text-sm text-purple-600">AI-Powered</span>
            </div>

            <div className="space-y-3">
              {learningModules.map((module) => {
                const IconComponent = module.icon;
                
                return (
                  <div key={module.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all cultural-card">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{module.title}</h3>
                        <p className="text-xs text-gray-600">{module.description}</p>
                      </div>
                      <button 
                        onClick={() => setUserPoints(prev => prev + 30)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all transform hover:scale-105"
                      >
                        {t.buttons.start}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'connect' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Community Connections</h2>
              <span className="text-sm text-blue-600">South Florida</span>
            </div>

            {connections.map((person) => (
              <div key={person.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all cultural-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{person.name}</h3>
                      <p className="text-xs text-gray-600">{person.role}</p>
                      <p className="text-xs text-blue-600">{person.organization}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setUserPoints(prev => prev + 25)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    {t.buttons.connect}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">UNESCO SDG Impact</h2>
              <span className="text-sm text-green-600">Growing</span>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-5 rounded-xl shadow-lg">
              <h3 className="font-bold mb-3">Global Peace Network Impact</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">4,567</p>
                  <p className="text-xs opacity-90">Peace Leaders</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">94</p>
                  <p className="text-xs opacity-90">Countries</p>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm font-medium mb-1">Your Contribution</div>
                <div className="text-sm opacity-90">Top 5% peace impact globally</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200 unesco-card">
              <h3 className="font-semibold text-gray-800 mb-4">UNESCO SDGs Addressed</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm">SDG 4: Quality Education</div>
                    <div className="text-xs text-gray-600">Education access for all refugees</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-medium text-sm">SDG 5: Gender Equality</div>
                    <div className="text-xs text-gray-600">Women's economic empowerment</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">SDG 10: Reduced Inequalities</div>
                    <div className="text-xs text-gray-600">Inclusive community integration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Project Leader</span>
                </div>
                <div className="text-sm text-blue-600">Tarruck Wheeler</div>
                <div className="text-sm text-blue-600">tarruck@stanford.edu</div>
                <div className="text-xs text-blue-500 mt-1">Stanford International Policy & Governance</div>
                <div className="text-xs text-blue-500">UNESCO Intercultural Leadership Program</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Footer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-gray-700">{t.appTitle}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600">AI Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-500">UNESCO Program • Created by Tarruck Wheeler</span>
            <span className="text-xs text-gray-500">v3.2.0</span>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <button 
          onClick={() => setUserPoints(prev => prev + 10)}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 transform"
        >
          <Heart size={28} className="animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default BridgesUNESCO;

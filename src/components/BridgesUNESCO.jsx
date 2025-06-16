import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  Award, 
  Globe, 
  MapPin, 
  Heart, 
  BookOpen, 
  Coffee,
  Calendar,
  Star,
  Camera,
  Headphones,
  Gamepad2,
  Trophy,
  UserPlus,
  Languages,
  Home,
  Briefcase,
  GraduationCap,
  Shield,
  Zap,
  ChevronRight,
  Bell,
  Settings,
  Menu,
  X,
  Mic,
  Video,
  Handshake,
  Earth,
  Play,
  Pause,
  Volume2,
  Eye,
  Download,
  Share,
  Plus,
  ArrowRight,
  CheckCircle,
  Clock,
  Wifi,
  WifiOff,
  Brain,
  Target,
  Smile,
  AlertTriangle,
  Lock,
  Unlock,
  Lightbulb,
  TrendingUp,
  Layers,
  Send,
  Phone,
  Mail,
  Vibrate,
  Check
} from 'lucide-react';

const BridgesWorldClass = () => {
  const [activeTab, setActiveTab] = useState('dialogue');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [userPoints, setUserPoints] = useState(3247);
  const [userLevel, setUserLevel] = useState('Certified Peace Ambassador');
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState(6);
  const [isOnline, setIsOnline] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [safetyMode, setSafetyMode] = useState(true);
  const [aiModerator, setAiModerator] = useState(true);
  const [languageSwitching, setLanguageSwitching] = useState(false);
  
  // Modal states
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [showLearningModal, setShowLearningModal] = useState(false);
  const [showLanguageConfirm, setShowLanguageConfirm] = useState(false);
  const [selectedDialogue, setSelectedDialogue] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedLearning, setSelectedLearning] = useState(null);
  const [reservationStatus, setReservationStatus] = useState('');
  const [connectionRequests, setConnectionRequests] = useState([]);

  // Complete translation system with cultural context
  const translations = {
    en: {
      appTitle: "BRIDGES 3.0",
      subtitle: "UNESCO Youth for Peace • AI-Enhanced Platform",
      tagline: "AI-Powered Peace Building",
      userLevel: "Certified Peace Ambassador",
      points: "points",
      protected: "Protected",
      live: "Live",
      mainNav: {
        learningHub: "Learning Hub",
        learningDesc: "Cultural competency training",
        impactStories: "Impact Stories", 
        impactDesc: "Community success stories",
        watchListen: "Watch & Listen",
        watchDesc: "Cultural exchange media",
        getInvolved: "Get Involved",
        involvedDesc: "Join peace initiatives"
      },
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
        start: "Start",
        begin: "Begin",
        learn: "Learn",
        joinLive: "Join Live",
        sendRequest: "Send Request",
        cancel: "Cancel",
        confirm: "Confirm",
        switchLanguage: "Switch Language"
      },
      dialogue: {
        title: "Live Dialogues",
        liveNow: "3 Live Now",
        aiGuardian: "AI Peace Guardian Active",
        safetyPrinciples: "Safe Dialogue Principles",
        principle: "Every voice matters. Every culture has wisdom. Every story deserves respect.",
        yourImpact: "Your Dialogue Impact",
        facilitated: "Dialogues Facilitated",
        connected: "People Connected"
      },
      messages: {
        reservationConfirm: "Spot Reserved!",
        reservationDesc: "You'll receive a reminder 15 minutes before the session.",
        pointsEarned: "peace points earned!",
        requestSent: "Request Sent!",
        requestDesc: "They'll receive your connection request and can respond within 24 hours.",
        learningStarted: "Learning Started!",
        languageChanged: "Language Changed Successfully!"
      }
    },
    es: {
      appTitle: "PUENTES 3.0",
      subtitle: "UNESCO Jóvenes por la Paz • Plataforma Potenciada por IA",
      tagline: "Construcción de Paz Potenciada por IA", 
      userLevel: "Embajador de Paz Certificado",
      points: "puntos",
      protected: "Protegido",
      live: "En Vivo",
      mainNav: {
        learningHub: "Centro de Aprendizaje",
        learningDesc: "Entrenamiento de competencia cultural",
        impactStories: "Historias de Impacto",
        impactDesc: "Historias de éxito comunitario", 
        watchListen: "Ver y Escuchar",
        watchDesc: "Medios de intercambio cultural",
        getInvolved: "Involucrarse",
        involvedDesc: "Únete a iniciativas de paz"
      },
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
        start: "Comenzar",
        begin: "Empezar",
        learn: "Aprender",
        joinLive: "Unirse en Vivo",
        sendRequest: "Enviar Solicitud",
        cancel: "Cancelar",
        confirm: "Confirmar",
        switchLanguage: "Cambiar Idioma"
      },
      dialogue: {
        title: "Diálogos en Vivo",
        liveNow: "3 En Vivo Ahora", 
        aiGuardian: "Guardián de Paz IA Activo",
        safetyPrinciples: "Principios de Diálogo Seguro",
        principle: "Cada voz importa. Cada cultura tiene sabiduría. Cada historia merece respeto.",
        yourImpact: "Tu Impacto en Diálogos",
        facilitated: "Diálogos Facilitados",
        connected: "Personas Conectadas"
      },
      messages: {
        reservationConfirm: "¡Lugar Reservado!",
        reservationDesc: "Recibirás un recordatorio 15 minutos antes de la sesión.",
        pointsEarned: "puntos de paz ganados!",
        requestSent: "¡Solicitud Enviada!",
        requestDesc: "Recibirán tu solicitud de conexión y pueden responder en 24 horas.",
        learningStarted: "¡Aprendizaje Iniciado!",
        languageChanged: "¡Idioma Cambiado Exitosamente!"
      }
    }
    // Add more languages as needed
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', rtl: false, nativeName: 'English' },
    { code: 'es', name: 'Español', flag: '🇪🇸', rtl: false, nativeName: 'Español' }
    // Add more languages as needed
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);
  const t = translations[currentLanguage] || translations.en;
  const isRTL = currentLang && currentLang.rtl ? currentLang.rtl : false;

  // Enhanced language switching with cultural awareness
  const handleLanguageChange = (e) => {
    const selectedName = e.target.value;
    const newLang = languages.find(lang => lang.nativeName === selectedName);
    if (newLang && newLang.code !== currentLanguage) {
      setLanguageSwitching(true);
      setLoading(true);
      
      // Simulate AI cultural context loading
      setTimeout(() => {
        setCurrentLanguage(newLang.code);
        setShowLanguageConfirm(true);
        setLanguageSwitching(false);
        setLoading(false);
        
        // Hide confirmation after 2 seconds
        setTimeout(() => {
          setShowLanguageConfirm(false);
        }, 2000);
      }, 1200);
    }
  };

  // Interactive handlers with enhanced feedback
  const handleReserveSpot = (dialogue) => {
    setSelectedDialogue(dialogue);
    setShowReservationModal(true);
    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleConnectPerson = (person) => {
    setSelectedPerson(person);
    setShowConnectionModal(true);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleStartLearning = (module) => {
    setSelectedLearning(module);
    setShowLearningModal(true);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const confirmReservation = () => {
    setReservationStatus('confirmed');
    setUserPoints(prev => prev + 50);
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    setTimeout(() => {
      setShowReservationModal(false);
      setReservationStatus('');
      setNotifications(prev => prev + 1);
    }, 2500);
  };

  const sendConnectionRequest = () => {
    if (selectedPerson) {
      setConnectionRequests(prev => [...prev, selectedPerson.id]);
      setUserPoints(prev => prev + 25);
      if (navigator.vibrate) {
        navigator.vibrate([50, 30, 50]);
      }
      setTimeout(() => {
        setShowConnectionModal(false);
        setNotifications(prev => prev + 1);
      }, 2000);
    }
  };

  const startLearningModule = () => {
    setUserPoints(prev => prev + 30);
    if (navigator.vibrate) {
      navigator.vibrate([30, 20, 30, 20, 30]);
    }
    setTimeout(() => {
      setShowLearningModal(false);
      setNotifications(prev => prev + 1);
    }, 2000);
  };

  const smartDialogues = [
    {
      id: 1,
      title: "Healing Voices: Trauma & Resilience Circle",
      participants: 32,
      cultures: ["Venezuelan", "Haitian", "Host Community"],
      category: "Mental Health",
      status: "Live Now",
      moderator: "AI + Human",
      safetyRating: 99,
      emotionalTone: "supportive",
      impact: "97% report increased emotional safety",
      nextSession: "Now Active",
      skillsFocus: ["Empathy Building", "Trauma Recovery", "Cultural Healing"],
      aiInsights: "High emotional resonance detected. Positive cross-cultural bonding occurring."
    },
    {
      id: 2,
      title: "Future Builders: Youth Vision 2030",
      participants: 48,
      cultures: ["Multi-Cultural", "Local Students", "Global Network"],
      category: "Leadership",
      status: "Starting Soon",
      moderator: "Peer-Led",
      safetyRating: 95,
      emotionalTone: "energetic",
      impact: "22 youth now leading community projects",
      nextSession: "In 15 minutes",
      skillsFocus: ["Vision Setting", "Project Management", "Cultural Bridge-Building"],
      aiInsights: "High engagement predicted. Optimal time for goal-setting activities."
    },
    {
      id: 3,
      title: "Stories That Unite: Digital Heritage Project",
      participants: 67,
      cultures: ["Venezuelan", "Guatemalan", "Cuban", "American"],
      category: "Cultural Preservation",
      status: "Weekly",
      moderator: "Elder-Guided",
      safetyRating: 98,
      emotionalTone: "reflective",
      impact: "350+ stories preserved, 5 digital archives created",
      nextSession: "Saturday 2:00 PM",
      skillsFocus: ["Storytelling", "Digital Archiving", "Intergenerational Wisdom"],
      aiInsights: "Deep cultural knowledge sharing. High preservation value detected."
    }
  ];

  const learningModules = [
    {
      id: 1,
      title: "Implicit Bias Recognition",
      description: "15-min AI-guided assessment",
      icon: Brain,
      color: "blue",
      duration: "15 min",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Empathy Building Simulation",
      description: "VR cultural perspective experience",
      icon: Heart,
      color: "green",
      duration: "30 min",
      level: "Advanced"
    },
    {
      id: 3,
      title: "Cultural Context Mastery",
      description: "Venezuelan family dynamics",
      icon: Languages,
      color: "purple",
      duration: "20 min",
      level: "Beginner"
    }
  ];

  const connections = [
    {
      id: 1,
      name: "Dr. Maria Santos",
      role: "Cultural Psychology Expert",
      match: 98,
      culture: "Venezuelan-American",
      expertise: ["Trauma Recovery", "Family Dynamics"],
      languages: ["Spanish", "English"],
      available: "Now",
      bio: "Specializing in cross-cultural psychology and trauma-informed care for refugee communities."
    },
    {
      id: 2,
      name: "Jean-Baptiste Michel",
      role: "Youth Community Organizer", 
      match: 94,
      culture: "Haitian-American",
      expertise: ["Civic Engagement", "Education Access"],
      languages: ["Creole", "French", "English"],
      available: "This Week",
      bio: "Empowering youth through education and civic participation in immigrant communities."
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
    <div className={`max-w-md mx-auto min-h-screen transition-all duration-300 ${
      highContrast ? 'bg-black text-white' : 'bg-gray-50'
    } ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Enhanced Loading Animation */}
      {loading && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center z-50">
          <div className="text-center text-white">
            <div className="relative">
              <Globe className="w-20 h-20 mx-auto mb-4 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-8 h-8 text-green-300 animate-pulse" />
              </div>
            </div>
            <p className="text-xl font-bold mb-2">{t.buttons.switchLanguage}...</p>
            <p className="text-sm opacity-90">Loading cultural context</p>
          </div>
        </div>
      )}

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
                {aiModerator && <Brain className="w-4 h-4 text-green-300 animate-pulse" />}
              </div>
              <p className="text-xs opacity-90">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-1">
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
              <button 
                onClick={() => setHighContrast(!highContrast)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm opacity-90">{t.tagline}</p>
              <p className="font-bold text-lg">Tarruck Wheeler</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs">{t.userLevel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs">{userPoints.toLocaleString()} {t.points}</span>
                </div>
              </div>
            </div>
            <div className={`text-${isRTL ? 'left' : 'right'}`}>
              <select 
                value={currentLang ? currentLang.nativeName : 'English'}
                onChange={handleLanguageChange}
                disabled={languageSwitching}
                className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm backdrop-blur-sm disabled:opacity-50"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.nativeName} className="text-gray-800">
                    {lang.flag} {lang.nativeName}
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-between mt-1 text-xs opacity-80">
                <div className="flex items-center gap-1">
                  {safetyMode ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  <span>{t.protected}</span>
                </div>
                <div className="flex items-center gap-1">
                  {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                  <span>{isOnline ? t.live : 'Offline'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            
            {smartDialogues.map((dialogue) => (
              <div key={dialogue.id} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all">
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
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleReserveSpot(dialogue)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    {dialogue.status === 'Live Now' ? t.buttons.joinLive : t.buttons.reserve}
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">AI-Powered Learning</h2>
              <span className="text-sm text-purple-600">Personalized</span>
            </div>

            <div className="space-y-3">
              {learningModules.map((module) => {
                const IconComponent = module.icon;
                const buttonColorClass = module.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                                       module.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                                       'bg-purple-500 hover:bg-purple-600';
                const iconColorClass = module.color === 'blue' ? 'text-blue-600' :
                                     module.color === 'green' ? 'text-green-600' :
                                     'text-purple-600';
                
                return (
                  <div key={module.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className={`w-8 h-8 ${iconColorClass}`} />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{module.title}</h3>
                        <p className="text-xs text-gray-600">{module.description}</p>
                      </div>
                      <button 
                        onClick={() => handleStartLearning(module)}
                        className={`px-4 py-2 text-white rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${buttonColorClass}`}
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
              <h2 className="text-lg font-bold text-gray-800">Smart Connections</h2>
              <span className="text-sm text-blue-600">AI Matching</span>
            </div>

            {connections.map((person) => (
              <div key={person.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{person.name}</h3>
                      <p className="text-xs text-gray-600">{person.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-medium text-gray-700">{person.match}% match</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleConnectPerson(person)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                    disabled={connectionRequests.includes(person.id)}
                  >
                    {connectionRequests.includes(person.id) ? 'Request Sent' : t.buttons.connect}
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Impact Dashboard</h2>
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
                <div className="text-sm opacity-90">Top 5% peace impact globally • 847 lives directly touched</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">UNESCO Impact Certification</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="bg-blue-100 p-3 rounded border">
                  <div className="text-sm font-medium text-blue-800">Contact Project Leader</div>
                  <div className="text-sm text-blue-600">tarruck@stanford.edu</div>
                  <div className="text-xs text-blue-500">Stanford International Policy & Governance</div>
                </div>
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
            <span className="text-xs text-gray-500">tarruck@stanford.edu</span>
            <span className="text-xs text-gray-500">v3.2.0</span>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Action Button */}
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

export default BridgesWorldClass;/**
 * BRIDGES UNESCO 3.0 - Main Entry Point
 * Created by: Tarruck Wheeler (tarruck@stanford.edu)
 * Institution: Stanford International Policy & Governance
 * Program: UNESCO Intercultural Leadership Program
 * Focus: South Florida Refugee Community Integration
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

// Performance monitoring (development only)
if (import.meta.env.DEV) {
  console.log('🏛️ BRIDGES UNESCO 3.0 - Created by Tarruck Wheeler');
  console.log('📧 Contact: tarruck@stanford.edu');
  console.log('🌍 UNESCO Intercultural Leadership Program');
  console.log('📍 Focus: South Florida Refugee Communities');
}

// Enhanced Error boundary for UNESCO program
class UNESCOErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('BRIDGES UNESCO Error:', error, errorInfo);
    console.log('Please report issues to: tarruck@stanford.edu');
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #dbeafe, #f3e8ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                🏛️ BRIDGES UNESCO 3.0
              </h1>
              <p style={{ color: '#2563eb', fontSize: '0.875rem' }}>Created by Tarruck Wheeler</p>
            </div>
            
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Something went wrong
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              We're sorry, but something unexpected happened with the UNESCO platform.
            </p>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>📞 Contact Support</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Project Creator: Tarruck Wheeler</p>
              <p style={{ fontSize: '0.875rem', color: '#2563eb', marginBottom: '0.25rem' }}>📧 tarruck@stanford.edu</p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Stanford International Policy & Governance</p>
            </div>
            
            <button 
              onClick={() => window.location.reload()} 
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              🔄 Reload Platform
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UNESCOErrorBoundary>
      <App />
    </UNESCOErrorBoundary>
  </React.StrictMode>,
)

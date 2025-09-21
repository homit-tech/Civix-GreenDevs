import { useEffect, useState } from 'react';
import { 
  ArrowUp, 
  CheckCircle, 
  User, 
  Building2, 
  Ban, 
  RefreshCw, 
  Scale,
  Shield,
  ChevronRight,
  Calendar
} from 'lucide-react';

function Terms() {
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const terms = [
    {
      id: 'use-service',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Use of Service',
      content: 'You agree to use Civix for lawful purposes only and not to misuse or interfere with the platform\'s functionality. This includes respecting community guidelines and reporting issues in good faith.',
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    {
      id: 'user-responsibilities',
      icon: <User className="w-6 h-6" />,
      title: 'User Responsibilities',
      content: 'Users are responsible for the accuracy of the information they submit and must avoid submitting false or misleading reports. You must maintain the confidentiality of your account credentials.',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      id: 'platform-rights',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Platform Rights',
      content: 'We reserve the right to modify, suspend, or discontinue the platform at any time without prior notice. We also reserve the right to remove content that violates our community standards.',
      color: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
    },
    {
      id: 'termination',
      icon: <Ban className="w-6 h-6" />,
      title: 'Termination',
      content: 'We may suspend or terminate access if you violate these terms or engage in prohibited activities. Upon termination, your right to use the service ceases immediately.',
      color: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
    },
    {
      id: 'updates',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Updates to Terms',
      content: 'We may revise these terms periodically to reflect changes in our services or legal requirements. Continued use of Civix constitutes your acceptance of any changes.',
      color: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950">
      {/* Floating Back to Top Button */}
      {showTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-emerald-400/5"></div>
        
        <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-3xl mb-8 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out">
            <Scale className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
            Terms of Service
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            These Terms of Service govern your use of <span className="font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Civix</span>. 
            By accessing or using our platform, you agree to these terms.
          </p>
          
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Legal compliance and user protection</span>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sticky Side Nav */}
        <aside className="hidden lg:block col-span-1">
          <nav className="sticky top-32 space-y-3 p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {terms.map((term) => (
              <a 
                key={term.id}
                href={`#${term.id}`}
                className={`block px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === term.id 
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {term.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Terms Content */}
        <div className="col-span-3 space-y-12">
          {terms.map((term) => (
            <section 
              key={term.id} 
              id={term.id} 
              className="relative group overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1"
              onMouseEnter={() => setActiveSection(term.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${term.bgGradient} opacity-30 group-hover:opacity-50 transition`} />
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-10 shadow-lg group-hover:shadow-xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${term.color} text-white shadow-lg group-hover:scale-105 transition-transform`}>
                    {term.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {term.title}
                      <ChevronRight 
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          activeSection === term.id ? 'translate-x-1 text-gray-600 dark:text-gray-300' : ''
                        }`}
                      />
                    </h2>
                    <div className="mt-2 w-24 h-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 group-hover:from-current transition-all"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{term.content}</p>
              </div>
            </section>
          ))}

          {/* Footer */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50">
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Last updated: <time dateTime="2025-06" className="font-semibold text-gray-800 dark:text-gray-200">June 2025</time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;

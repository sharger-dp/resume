import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold" style={{background: 'linear-gradient(to right, #34d399, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              D.S. QA
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">Обо мне</a>
              <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">Навыки</a>
              <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">Опыт</a>
              <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">Услуги</a>
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
                Связаться
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-2">Обо мне</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-2">Навыки</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-2">Опыт</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-2">Услуги</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-emerald-500 text-white text-center px-5 py-2.5 rounded-full font-semibold">Связаться</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute inset-0 opacity-[0.03] overflow-hidden" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium">Открыт к проектам и сотрудничеству</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-white">Дмитрий Шаргер</span>
            <br />
            <span style={{background: 'linear-gradient(to right, #34d399, #22d3ee, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Full Stack QA Engineer
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            7+ лет обеспечиваю качество программного обеспечения. 
            Автоматизация тестирования, API, базы данных — 
            <span className="text-emerald-400 font-medium"> ваш продукт будет работать безупречно</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              <i className="fas fa-paper-plane mr-2"></i>
              Обсудить проект
            </a>
            <a href="#experience" className="w-full sm:w-auto border border-gray-700 hover:border-emerald-500/50 text-gray-300 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5">
              <i className="fas fa-briefcase mr-2"></i>
              Мой опыт
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">7+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Лет опыта</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">1000+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Тест-кейсов</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Дефектов найдено</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">B2</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Уровень English</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-emerald-400/50 text-xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Обо мне</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                QA-инженер, который <span className="text-emerald-400">думает как пользователь</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Более 7 лет занимаюсь обеспечением качества программного обеспечения. 
                Работал в крупной IT-компании (подразделение АО «Тандер» / Магнит), где отвечал за 
                тестирование критически важных бизнес-систем с высокой нагрузкой.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Специализируюсь на автоматизации регрессионного тестирования с помощью 
                <span className="text-emerald-400 font-medium"> Selenium + Python</span>, 
                тестировании API и работе с базами данных. Умею находить дефекты там, где другие не замечают.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Имею высшее образование в сфере IT (Прикладная информатика) и постоянно повышаю квалификацию — 
                сертификаты Отус, Stepik, GeekBrains.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-emerald-400"></i>
                    </div>
                    <div>
                      <div className="text-white font-medium">Краснодар, Россия</div>
                      <div className="text-gray-400 text-sm">Удалённо / Офис / Командировки</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-cyan-400"></i>
                    </div>
                    <div>
                      <div className="text-white font-medium">Университет «Синергия»</div>
                      <div className="text-gray-400 text-sm">Прикладная информатика, 2022</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-language text-emerald-400"></i>
                    </div>
                    <div>
                      <div className="text-white font-medium">Русский, English (B2)</div>
                      <div className="text-gray-400 text-sm">Свободное чтение документации</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-laptop-code text-cyan-400"></i>
                    </div>
                    <div>
                      <div className="text-white font-medium">Формат работы</div>
                      <div className="text-gray-400 text-sm">Полная / Частичная / Проектная</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] overflow-hidden" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-emerald-400 text-sm font-medium">Технический стек</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Инструменты и <span className="text-emerald-400">технологии</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Владею полным набором инструментов для обеспечения качества — от ручного тестирования до автоматизации
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-vial text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ручное тестирование</h3>
              <p className="text-gray-400 text-sm mb-4">Функциональное, регрессионное, исследовательское, приёмочное тестирование</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Test Cases</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Bug Reports</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">UI Testing</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-python text-cyan-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Автоматизация</h3>
              <p className="text-gray-400 text-sm mb-4">Автоматизация регрессионного тестирования на Python с использованием Selenium</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">Python</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">Selenium</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">PyTest</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-plug text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">API Тестирование</h3>
              <p className="text-gray-400 text-sm mb-4">Тестирование REST API, проверка эндпоинтов, валидация ответов и статус-кодов</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">REST</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Postman</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">JSON</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-database text-cyan-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Базы данных</h3>
              <p className="text-gray-400 text-sm mb-4">SQL-запросы, проверка данных, валидация целостности, сложные выборки</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">SQL</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">PostgreSQL</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">JOINs</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-tasks text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Управление дефектами</h3>
              <p className="text-gray-400 text-sm mb-4">Заведение, приоритизация и отслеживание багов, анализ корневых причин</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Jira</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Bug Tracking</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full">Agile</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-code-branch text-cyan-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Инструменты разработки</h3>
              <p className="text-gray-400 text-sm mb-4">Работа в команде разработки, контроль версий, CI/CD процессы</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">Git</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">HTML</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full">DevTools</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 text-center sm:text-left">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-certificate text-emerald-400 text-2xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-1">Подтверждённые навыки на hh.ru</h3>
                <p className="text-gray-400 text-sm">Все ключевые навыки пройдены через официальную систему верификации HeadHunter на продвинутом уровне</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">SQL ✓</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">PostgreSQL ✓</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">API ✓</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">Регресс ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-emerald-400 text-sm font-medium">Опыт работы</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Профессиональный <span className="text-emerald-400">путь</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                  5 лет 11 мес.
                </span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-building text-emerald-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ООО «ИТМ» — подразделение АО «Тандер»</h3>
                  <p className="text-emerald-400 font-medium">Специалист по тестированию</p>
                  <p className="text-gray-500 text-sm">Ноябрь 2020 — настоящее время</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Ревью требований к ПО, оценка трудоёмкости тестирования</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Разработка сценариев тестирования и тест-кейсов</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Выявление, локализация и регистрация дефектов</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Автоматизация регрессионного тестирования на Selenium (Python)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Оценка готовности продуктов к выпуску в эксплуатацию</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-emerald-400 mt-1 text-xs"></i>
                  <span>Анализ причин возникновения дефектов</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                <span className="bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                  1 год 9 мес.
                </span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-building text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">АНКОР, кадровый холдинг</h3>
                  <p className="text-cyan-400 font-medium">Асессор — Тестировщик</p>
                  <p className="text-gray-500 text-sm">Март 2019 — Ноябрь 2020</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-cyan-400 mt-1 text-xs"></i>
                  <span>Регрессионное тестирование различных продуктов по готовым сценариям</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-cyan-400 mt-1 text-xs"></i>
                  <span>Написание сценариев для тестирования</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-cyan-400 mt-1 text-xs"></i>
                  <span>Исследовательское тестирование новых возможностей</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="fas fa-check text-cyan-400 mt-1 text-xs"></i>
                  <span>Консультирование коллег по методикам тестирования</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Сертификаты и <span className="text-emerald-400">обучение</span></h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-award text-emerald-400 text-sm"></i>
                  </div>
                  <span className="text-xs text-gray-500">2022</span>
                </div>
                <p className="text-sm text-white font-medium">Python QA Engineer</p>
                <p className="text-xs text-gray-400 mt-1">Отус</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-award text-cyan-400 text-sm"></i>
                  </div>
                  <span className="text-xs text-gray-500">2021</span>
                </div>
                <p className="text-sm text-white font-medium">Selenium + Python</p>
                <p className="text-xs text-gray-400 mt-1">Stepik</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-award text-emerald-400 text-sm"></i>
                  </div>
                  <span className="text-xs text-gray-500">2021</span>
                </div>
                <p className="text-sm text-white font-medium">Программирование на Python</p>
                <p className="text-xs text-gray-400 mt-1">Stepik</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-award text-cyan-400 text-sm"></i>
                  </div>
                  <span className="text-xs text-gray-500">2019</span>
                </div>
                <p className="text-sm text-white font-medium">Тестировщик ПО</p>
                <p className="text-xs text-gray-400 mt-1">GeekBrains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-gray-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-emerald-400 text-sm font-medium">Услуги</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Чем могу <span className="text-emerald-400">помочь</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Предлагаю широкий спектр услуг по обеспечению качества вашего программного продукта
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Ручное тестирование</h3>
              <p className="text-gray-400 text-sm">Тщательная проверка функциональности, UI/UX, граничных случаев и пользовательских сценариев</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Автоматизация тестов</h3>
              <p className="text-gray-400 text-sm">Разработка и поддержка автотестов на Python/Selenium для регрессионного тестирования</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-lg font-bold text-white mb-2">Тестирование API</h3>
              <p className="text-gray-400 text-sm">Проверка REST API: эндпоинты, авторизация, валидация данных, нагрузочное тестирование</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-white mb-2">Тестовая документация</h3>
              <p className="text-gray-400 text-sm">Создание тест-кейсов, чек-листов, тест-планов и отчётов о тестировании</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">🗄️</div>
              <h3 className="text-lg font-bold text-white mb-2">Тестирование БД</h3>
              <p className="text-gray-400 text-sm">Проверка целостности данных, SQL-запросы, валидация миграций и хранимых процедур</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">QA-консалтинг</h3>
              <p className="text-gray-400 text-sm">Построение процессов тестирования с нуля, настройка CI/CD, менторство Junior QA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500"></div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Нужен надёжный <span className="text-emerald-400">QA-инженер</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Готов обсудить ваш проект, вакансию или разовую задачу. 
              Отвечу в течение нескольких часов.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
              <a href="tel:+79181760994" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
                <i className="fas fa-phone"></i>
                <span>Позвонить</span>
              </a>
              <a href="mailto:sharger-dima@yandex.ru" className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
                <i className="fas fa-envelope"></i>
                <span>Написать</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-emerald-400"></i>
                <a href="tel:+79181760994" className="hover:text-white transition-colors">+7 918 176-09-94</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-emerald-400"></i>
                <a href="mailto:sharger-dima@yandex.ru" className="hover:text-white transition-colors">sharger-dima@yandex.ru</a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Также можно связаться через:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://krasnodar.hh.ru/resume/2825ee30ff062abd9f0039ed1f6e526c726350" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all">
                <i className="fas fa-briefcase"></i>
                hh.ru резюме
              </a>
              <a href="mailto:sharger-dima@yandex.ru?subject=Предложение о сотрудничестве" className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all">
                <i className="fas fa-handshake"></i>
                Предложить проект
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Дмитрий Шаргер — QA Engineer
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+79181760994" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <i className="fas fa-phone"></i>
              </a>
              <a href="mailto:sharger-dima@yandex.ru" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://krasnodar.hh.ru/resume/2825ee30ff062abd9f0039ed1f6e526c726350" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <i className="fas fa-briefcase"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

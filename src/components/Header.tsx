import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { to: '/about', label: 'О компании' },
  { to: '/practice', label: 'Практика' },
  { to: '/services', label: 'Услуги' },
  { to: '/cases', label: 'Кейсы' },
  { to: '/blog', label: 'Блог' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'rgba(8,22,41,0.97)', backdropFilter: 'blur(16px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2 shrink-0">
            <span className="font-cormorant text-[22px] font-semibold text-white leading-none">Право</span>
            <span className="font-cormorant text-[13px] font-medium tracking-[0.2em] uppercase leading-none"
              style={{ background: 'linear-gradient(135deg,#C8A35F,#DDB97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Привилегия
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-golos text-[13px] tracking-wide transition-colors duration-200 hover:text-[#C8A35F]"
                style={{ color: location.pathname === link.to ? '#C8A35F' : '#C9D4E3' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden xl:flex items-center gap-5">
            <a href="tel:+78009999999" className="font-golos text-[13px] text-[#C9D4E3] hover:text-[#C8A35F] transition-colors duration-200">
              +7 (800) 999-99-99
            </a>
            <Link
              to="/contacts"
              className="btn-gold px-5 py-2.5 rounded text-[13px] font-golos font-semibold"
              style={{ color: '#081629' }}
            >
              Получить консультацию
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden text-[#C9D4E3] hover:text-[#C8A35F] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'rgba(8,22,41,0.99)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(200,163,95,0.15)' }}>
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-golos text-[15px] transition-colors duration-200 hover:text-[#C8A35F]"
                style={{ color: location.pathname === link.to ? '#C8A35F' : '#C9D4E3' }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid rgba(200,163,95,0.15)' }} className="pt-4 mt-1 flex flex-col gap-3">
              <a href="tel:+78009999999" className="font-golos text-[#C9D4E3] text-sm">
                +7 (800) 999-99-99
              </a>
              <Link
                to="/contacts"
                className="btn-gold py-3 rounded text-center text-sm font-golos font-semibold"
                style={{ color: '#081629' }}
              >
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

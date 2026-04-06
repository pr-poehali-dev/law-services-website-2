import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: '#081629' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C8A35F]" />
            <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Свяжитесь с нами</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">Контакты</h1>
          <p className="font-golos text-[#C9D4E3] text-base max-w-xl leading-relaxed">
            Первичная консультация бесплатна. Оставьте заявку — свяжемся в течение 30 минут в рабочее время.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Info cards */}
              <div className="border border-[rgba(200,163,95,0.2)] rounded-sm p-7" style={{ backgroundColor: '#0F2847' }}>
                <h2 className="font-cormorant text-2xl font-semibold text-white mb-6">Реквизиты</h2>
                <div className="flex flex-col gap-5">
                  <a href="tel:+78009999999" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name="Phone" size={16} className="text-[#C8A35F]" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-[#8A9AB5] mb-0.5">Телефон</div>
                      <div className="font-golos text-sm text-white group-hover:text-[#C8A35F] transition-colors duration-200">
                        +7 (800) 999-99-99
                      </div>
                    </div>
                  </a>

                  <a href="mailto:info@pravo-privilegia.ru" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name="Mail" size={16} className="text-[#C8A35F]" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-[#8A9AB5] mb-0.5">Email</div>
                      <div className="font-golos text-sm text-white group-hover:text-[#C8A35F] transition-colors duration-200">
                        info@pravo-privilegia.ru
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name="MapPin" size={16} className="text-[#C8A35F]" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-[#8A9AB5] mb-0.5">Адрес</div>
                      <div className="font-golos text-sm text-white">
                        г. Таганрог, ул. Петровская, 1<br />
                        <span className="text-[#8A9AB5]">Ростовская область</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name="Clock" size={16} className="text-[#C8A35F]" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-[#8A9AB5] mb-0.5">Режим работы</div>
                      <div className="font-golos text-sm text-white">
                        Пн–Пт: 9:00–19:00<br />
                        <span className="text-[#8A9AB5]">Сб: 10:00–15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online info */}
              <div className="border border-[rgba(200,163,95,0.2)] rounded-sm p-6" style={{ backgroundColor: '#0F2847' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Globe" size={16} className="text-[#C8A35F]" />
                  <span className="font-cormorant text-lg font-semibold text-white">Онлайн по всей России</span>
                </div>
                <p className="font-golos text-xs text-[#8A9AB5] leading-relaxed">
                  Работаем дистанционно: видеозвонки, мессенджеры, электронный документооборот. Личное присутствие необязательно.
                </p>
              </div>

              {/* Messengers */}
              <div className="flex gap-3">
                <a href="#" className="flex-1 border border-[rgba(200,163,95,0.2)] rounded-sm p-4 flex items-center justify-center gap-2 hover:border-[#C8A35F] transition-colors duration-200 group"
                  style={{ backgroundColor: '#0F2847' }}>
                  <Icon name="MessageCircle" size={16} className="text-[#8A9AB5] group-hover:text-[#C8A35F] transition-colors duration-200" />
                  <span className="font-golos text-xs text-[#8A9AB5] group-hover:text-[#C8A35F] transition-colors duration-200">WhatsApp</span>
                </a>
                <a href="#" className="flex-1 border border-[rgba(200,163,95,0.2)] rounded-sm p-4 flex items-center justify-center gap-2 hover:border-[#C8A35F] transition-colors duration-200 group"
                  style={{ backgroundColor: '#0F2847' }}>
                  <Icon name="Send" size={16} className="text-[#8A9AB5] group-hover:text-[#C8A35F] transition-colors duration-200" />
                  <span className="font-golos text-xs text-[#8A9AB5] group-hover:text-[#C8A35F] transition-colors duration-200">Telegram</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="border border-[rgba(200,163,95,0.2)] rounded-sm p-8 md:p-10" style={{ backgroundColor: '#0F2847' }}>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(200,163,95,0.15)' }}>
                      <Icon name="Check" size={28} className="text-[#C8A35F]" />
                    </div>
                    <h3 className="font-cormorant text-3xl font-semibold text-white mb-3">Заявка отправлена</h3>
                    <p className="font-golos text-sm text-[#8A9AB5] max-w-sm">
                      Мы свяжемся с вами в течение 30 минут в рабочее время
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-cormorant text-3xl font-semibold text-white mb-2">Оставить заявку</h2>
                    <p className="font-golos text-sm text-[#8A9AB5] mb-8">Первичная консультация бесплатно</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="font-golos text-xs text-[#8A9AB5] mb-2 block">Ваше имя</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Иван Иванов"
                            className="w-full font-golos text-sm text-white placeholder-[#8A9AB5] px-4 py-3 rounded-sm border border-[rgba(200,163,95,0.2)] outline-none focus:border-[#C8A35F] transition-colors duration-200"
                            style={{ backgroundColor: 'rgba(11,31,58,0.8)' }}
                          />
                        </div>
                        <div>
                          <label className="font-golos text-xs text-[#8A9AB5] mb-2 block">Телефон</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+7 (___) ___-__-__"
                            className="w-full font-golos text-sm text-white placeholder-[#8A9AB5] px-4 py-3 rounded-sm border border-[rgba(200,163,95,0.2)] outline-none focus:border-[#C8A35F] transition-colors duration-200"
                            style={{ backgroundColor: 'rgba(11,31,58,0.8)' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs text-[#8A9AB5] mb-2 block">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full font-golos text-sm text-white placeholder-[#8A9AB5] px-4 py-3 rounded-sm border border-[rgba(200,163,95,0.2)] outline-none focus:border-[#C8A35F] transition-colors duration-200"
                          style={{ backgroundColor: 'rgba(11,31,58,0.8)' }}
                        />
                      </div>

                      <div>
                        <label className="font-golos text-xs text-[#8A9AB5] mb-2 block">Опишите ситуацию</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Расскажите о вашей ситуации — это поможет нам подготовиться к консультации..."
                          rows={5}
                          className="w-full font-golos text-sm text-white placeholder-[#8A9AB5] px-4 py-3 rounded-sm border border-[rgba(200,163,95,0.2)] outline-none focus:border-[#C8A35F] transition-colors duration-200 resize-none"
                          style={{ backgroundColor: 'rgba(11,31,58,0.8)' }}
                        />
                      </div>

                      <div className="flex items-start gap-3 pt-1">
                        <div className="w-4 h-4 rounded-sm border border-[rgba(200,163,95,0.3)] mt-0.5 shrink-0 flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                          <div className="w-2 h-2 rounded-full bg-[#C8A35F]" />
                        </div>
                        <span className="font-golos text-xs text-[#8A9AB5] leading-relaxed">
                          Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности и даёте согласие на обработку персональных данных
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="btn-gold w-full py-4 rounded text-[#081629] font-golos font-semibold text-base mt-2"
                      >
                        Отправить заявку
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

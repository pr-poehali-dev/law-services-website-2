import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const approach = [
  { icon: 'Target', title: 'Правовая позиция прежде всего', desc: 'Каждое дело начинается с формирования чёткой правовой позиции — до того, как сделан первый шаг' },
  { icon: 'BarChart2', title: 'Оценка перспектив', desc: 'Честно говорим, если дело бесперспективно. Не тратим ваше время и деньги впустую' },
  { icon: 'Users', title: 'Личное ведение дел', desc: 'Ваше дело ведёт конкретный юрист, а не передаётся помощникам' },
  { icon: 'Repeat', title: 'Работаем на результат', desc: 'Оплата привязана к реальным действиям, а не к количеству встреч' },
];

const experience = [
  { area: 'Судебные споры', count: '300+', years: 'дел в судах' },
  { area: 'Страховые выплаты', count: '150+', years: 'дел по ОСАГО и КАСКО' },
  { area: 'Банкротство', count: '80+', years: 'процедур завершено' },
  { area: 'Взыскание долгов', count: '200+', years: 'возвращённых долгов' },
];

const guarantees = [
  { icon: 'FileCheck', title: 'Договор на каждую услугу', desc: 'Все условия, сроки и стоимость зафиксированы документально до начала работы' },
  { icon: 'Shield', title: 'Адвокатская тайна', desc: 'Любые сведения, переданные нам, охраняются законом и не могут быть раскрыты' },
  { icon: 'RefreshCw', title: 'Промежуточные отчёты', desc: 'Регулярно информируем о ходе дела — вы всегда в курсе ситуации' },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#081629' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#C8A35F]" />
                <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">О компании</span>
              </div>
              <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Право Привилегия
              </h1>
              <p className="font-golos text-[#C9D4E3] text-base leading-relaxed mb-4">
                Юридическая практика, специализирующаяся на защите интересов предпринимателей, фрилансеров и частных лиц в Таганроге и по всей России.
              </p>
              <p className="font-golos text-[#8A9AB5] text-sm leading-relaxed mb-10">
                Более 12 лет мы помогаем клиентам разрешать споры со страховыми компаниями, взыскивать долги, проходить процедуру банкротства и защищать свои права в суде. Наш подход — это чёткая правовая позиция, документальная прозрачность и ориентация на реальный результат.
              </p>
              <div className="flex gap-4">
                <Link to="/contacts" className="btn-gold px-7 py-3.5 rounded text-[#081629] font-golos font-semibold text-sm">
                  Разобрать ситуацию
                </Link>
                <Link to="/services" className="btn-outline-gold px-7 py-3.5 rounded font-golos font-semibold text-sm">
                  Наши услуги
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '12+', label: 'лет практики' },
                { val: '94%', label: 'выигранных дел' },
                { val: '1500+', label: 'довольных клиентов' },
                { val: '730+', label: 'дел завершено' },
              ].map((stat) => (
                <div key={stat.label} className="border border-[rgba(200,163,95,0.2)] rounded-sm p-7"
                  style={{ backgroundColor: '#0B1F3A' }}>
                  <div className="font-cormorant text-4xl font-bold text-[#C8A35F] mb-2">{stat.val}</div>
                  <div className="font-golos text-xs text-[#8A9AB5] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Философия</span>
            </div>
            <h2 className="font-cormorant text-4xl font-semibold text-white">Наш подход к работе</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="border border-[rgba(200,163,95,0.2)] rounded-sm p-7"
                style={{ backgroundColor: '#0F2847' }}>
                <Icon name={item.icon} size={22} className="text-[#C8A35F] mb-5" />
                <h3 className="font-cormorant text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="font-golos text-xs text-[#8A9AB5] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Опыт</span>
            </div>
            <h2 className="font-cormorant text-4xl font-semibold text-white">Практический опыт</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {experience.map((e) => (
              <div key={e.area} className="border-l-2 border-[#C8A35F] pl-6 py-2">
                <div className="font-cormorant text-4xl font-bold text-[#C8A35F] mb-1">{e.count}</div>
                <div className="font-golos text-sm text-[#C9D4E3] mb-1">{e.years}</div>
                <div className="font-golos text-xs text-[#8A9AB5]">{e.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty */}
      <section className="py-24" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#C8A35F]" />
                <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Программа лояльности</span>
              </div>
              <h2 className="font-cormorant text-4xl font-semibold text-white mb-6">Особые условия для постоянных клиентов</h2>
              <p className="font-golos text-[#C9D4E3] text-base leading-relaxed mb-6">
                Мы ценим долгосрочные отношения. Клиенты, обращающиеся повторно, получают приоритетное рассмотрение, скидки на абонентское обслуживание и персонального юриста.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Скидка 15% на повторные обращения',
                  'Приоритетная запись без очереди',
                  'Персональный юрист-куратор',
                  'Бесплатные экстренные консультации',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A35F] shrink-0" />
                    <span className="font-golos text-sm text-[#C9D4E3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[rgba(200,163,95,0.2)] rounded-sm p-10"
              style={{ backgroundColor: '#0F2847' }}>
              <Icon name="Star" size={32} className="text-[#C8A35F] mb-6" />
              <h3 className="font-cormorant text-2xl font-semibold text-white mb-4">Статус «Привилегия»</h3>
              <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed mb-6">
                Присваивается клиентам после второго обращения. Включает расширенный пакет льгот и индивидуальное обслуживание.
              </p>
              <Link to="/contacts" className="btn-gold px-6 py-3 rounded text-[#081629] font-golos font-semibold text-sm inline-block">
                Узнать подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Гарантии</span>
            </div>
            <h2 className="font-cormorant text-4xl font-semibold text-white">Гарантии и конфиденциальность</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="border border-[rgba(200,163,95,0.2)] rounded-sm p-8"
                style={{ backgroundColor: '#0B1F3A' }}>
                <Icon name={g.icon} size={24} className="text-[#C8A35F] mb-5" />
                <h3 className="font-cormorant text-xl font-semibold text-white mb-3">{g.title}</h3>
                <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="border border-[rgba(200,163,95,0.2)] rounded-sm p-12" style={{ backgroundColor: '#0F2847' }}>
            <h2 className="font-cormorant text-4xl font-semibold text-white mb-4">Готовы поработать вместе?</h2>
            <p className="font-golos text-[#C9D4E3] text-sm mb-8">Первичная консультация бесплатна</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold">
                Разобрать ситуацию
              </Link>
              <Link to="/contacts" className="btn-outline-gold px-8 py-4 rounded font-golos font-semibold">
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

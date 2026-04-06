import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const G = '#C8A35F';
const DEEP = '#081629';
const NAVY = '#0B1F3A';
const LIGHT = '#0F2847';
const PROSE = '#C9D4E3';
const MUTED = '#8A9AB5';
const BORDER = 'rgba(200,163,95,0.18)';

const plans = [
  {
    title: 'Консультация',
    price: 'Бесплатно',
    priceNote: 'Первичная',
    desc: 'Разбираем ситуацию, оцениваем перспективы, даём рекомендации',
    items: [
      'До 60 минут',
      'Оценка правовых рисков',
      'Ответы на вопросы',
      'Предварительный прогноз',
      'Рекомендации по документам',
    ],
    cta: 'Записаться на консультацию',
    featured: false,
  },
  {
    title: 'Разовые услуги',
    price: 'от 5 000 ₽',
    priceNote: 'За конкретную задачу',
    desc: 'Работа под одну конкретную задачу: документ, претензия, иск, заседание',
    items: [
      'Составление претензии',
      'Подготовка иска / ответа',
      'Участие в одном заседании',
      'Анализ договора',
      'Правовое заключение',
    ],
    cta: 'Разобрать мою ситуацию',
    featured: true,
  },
  {
    title: 'Ведение дела',
    price: 'от 30 000 ₽',
    priceNote: 'До результата',
    desc: 'Полное сопровождение от анализа до получения исполнительного листа',
    items: [
      'Формирование позиции',
      'Все процессуальные документы',
      'Неограниченные заседания',
      'Апелляция при необходимости',
      'Исполнительное производство',
    ],
    cta: 'Обсудить дело',
    featured: false,
  },
  {
    title: 'Абонентское обслуживание',
    price: 'от 20 000 ₽/мес',
    priceNote: 'Для бизнеса',
    desc: 'Постоянная юридическая поддержка по фиксированной ставке',
    items: [
      'Консультации без ограничений',
      'Проверка договоров',
      'Претензионная работа',
      'Представительство в судах',
      'Персональный юрист',
    ],
    cta: 'Узнать подробнее',
    featured: false,
  },
];

const services = [
  { name: 'Первичная консультация', price: 'Бесплатно' },
  { name: 'Расширенная консультация (до 2 часов)', price: 'от 3 000 ₽' },
  { name: 'Анализ договора', price: 'от 5 000 ₽' },
  { name: 'Составление претензии', price: 'от 5 000 ₽' },
  { name: 'Составление иска / заявления', price: 'от 8 000 ₽' },
  { name: 'Участие в одном заседании', price: 'от 10 000 ₽' },
  { name: 'Ведение дела (страховой спор)', price: 'от 15 000 ₽' },
  { name: 'Ведение дела (общегражданский спор)', price: 'от 30 000 ₽' },
  { name: 'Банкротство физического лица', price: 'от 90 000 ₽' },
  { name: 'Юридическое сопровождение бизнеса', price: 'от 20 000 ₽/мес' },
];

const paymentModels = [
  { icon: 'Wallet', title: 'Фиксированная оплата', desc: 'Стоимость определяется заранее в договоре. Без скрытых платежей.' },
  { icon: 'TrendingUp', title: 'Процент от взысканного', desc: 'Актуально для страховых споров и взыскания долгов. Оплата — после получения денег.' },
  { icon: 'CreditCard', title: 'Рассрочка', desc: 'Возможность оплаты частями по согласованию. Условия — индивидуально.' },
  { icon: 'RefreshCw', title: 'Абонентская модель', desc: 'Фиксированный ежемесячный платёж за постоянную юридическую поддержку.' },
];

export default function Pricing() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: DEEP }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Цены</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Стоимость
          </h1>
          <p className="font-golos text-[15px] max-w-2xl leading-relaxed" style={{ color: PROSE }}>
            Прозрачное ценообразование. Стоимость фиксируется в договоре до начала работы — никаких неожиданных счетов.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((p) => (
              <div
                key={p.title}
                className="border rounded-sm p-8 flex flex-col"
                style={{
                  backgroundColor: p.featured ? 'rgba(200,163,95,0.07)' : LIGHT,
                  borderColor: p.featured ? 'rgba(200,163,95,0.5)' : BORDER,
                  position: 'relative',
                }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="font-golos text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: G, color: DEEP }}>
                      Популярный
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-cormorant font-semibold text-white text-xl mb-1">{p.title}</h3>
                  <span className="font-golos text-[11px]" style={{ color: MUTED }}>{p.priceNote}</span>
                </div>
                <div className="mb-5">
                  <div className="font-cormorant font-bold mb-1" style={{ fontSize: '28px', color: G }}>{p.price}</div>
                </div>
                <p className="font-golos text-[12px] leading-relaxed mb-6" style={{ color: MUTED }}>{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Icon name="Check" size={12} style={{ color: G }} />
                      <span className="font-golos text-[12px]" style={{ color: PROSE }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className={p.featured ? 'btn-gold text-center py-3 rounded font-golos font-semibold text-[13px]' : 'btn-outline-gold text-center py-3 rounded font-golos font-semibold text-[13px]'}
                  style={p.featured ? { color: DEEP } : {}}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-16" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Прайс-лист</span>
          </div>
          <h2 className="font-cormorant font-semibold text-white mb-10" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
            Цены на услуги
          </h2>
          <div className="border rounded-sm overflow-hidden" style={{ borderColor: BORDER }}>
            {services.map((s, i) => (
              <div
                key={s.name}
                className="flex justify-between items-center px-7 py-4 gap-6"
                style={{
                  backgroundColor: i % 2 === 0 ? LIGHT : 'rgba(15,40,71,0.5)',
                  borderBottom: i < services.length - 1 ? `1px solid ${BORDER}` : 'none',
                }}
              >
                <span className="font-golos text-[14px]" style={{ color: PROSE }}>{s.name}</span>
                <span className="font-cormorant text-[18px] font-semibold shrink-0" style={{ color: G }}>{s.price}</span>
              </div>
            ))}
          </div>
          <p className="font-golos text-[12px] mt-4" style={{ color: MUTED }}>
            * Цены указаны ориентировочно. Точная стоимость определяется после анализа вашей ситуации.
          </p>
        </div>
      </section>

      {/* Payment models */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Оплата</span>
          </div>
          <h2 className="font-cormorant font-semibold text-white mb-10" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
            Модели оплаты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentModels.map((m) => (
              <div key={m.title} className="border rounded-sm p-7" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <Icon name={m.icon} size={22} className="mb-4" style={{ color: G }} />
                <h3 className="font-cormorant text-[18px] font-semibold text-white mb-2">{m.title}</h3>
                <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
            Точная стоимость — после анализа
          </h2>
          <p className="font-golos text-[14px] leading-relaxed mb-8" style={{ color: PROSE }}>
            Опишите ситуацию — определим стоимость конкретно под ваш случай
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts" className="btn-gold inline-block px-8 py-4 rounded font-golos font-semibold" style={{ color: DEEP }}>
              Разобрать мою ситуацию
            </Link>
            <Link to="/contacts" className="btn-outline-gold inline-block px-8 py-4 rounded font-golos font-semibold">
              Узнать стоимость
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

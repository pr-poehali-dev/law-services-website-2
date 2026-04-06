import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const G = '#C8A35F';
const DEEP = '#081629';
const NAVY = '#0B1F3A';
const LIGHT = '#0F2847';
const PROSE = '#C9D4E3';
const MUTED = '#8A9AB5';
const BORDER = 'rgba(200,163,95,0.18)';

const stages = [
  {
    num: '01',
    icon: 'MessageSquare',
    title: 'Анализ ситуации',
    duration: '1–2 дня',
    format: 'Онлайн или очно',
    desc: 'Изучаем документы, выслушиваем детали, задаём уточняющие вопросы. Честно оцениваем перспективы.',
    items: [
      'Бесплатная первичная консультация',
      'Изучение имеющихся документов',
      'Оценка правовых рисков',
      'Предварительный прогноз исхода',
    ],
  },
  {
    num: '02',
    icon: 'Target',
    title: 'Формирование стратегии',
    duration: '2–3 дня',
    format: 'Документально',
    desc: 'Выстраиваем правовую позицию, определяем оптимальный путь решения задачи — досудебный или судебный.',
    items: [
      'Разработка правовой позиции',
      'Определение стратегии защиты',
      'Оценка рисков и альтернатив',
      'Согласование условий работы',
    ],
  },
  {
    num: '03',
    icon: 'FileCheck',
    title: 'Подготовка документов',
    duration: '3–7 дней',
    format: 'Письменно',
    desc: 'Готовим претензии, исковые заявления, жалобы, ходатайства и иные процессуальные документы.',
    items: [
      'Досудебная претензия',
      'Исковое заявление',
      'Ходатайства и возражения',
      'Жалобы в надзорные органы',
    ],
  },
  {
    num: '04',
    icon: 'Gavel',
    title: 'Ведение дела',
    duration: 'По ситуации',
    format: 'Суд / переговоры',
    desc: 'Представляем интересы в суде или переговорах. Оперативно реагируем на действия противоположной стороны.',
    items: [
      'Участие в судебных заседаниях',
      'Переговоры с оппонентом',
      'Сбор и представление доказательств',
      'Промежуточные отчёты клиенту',
    ],
  },
  {
    num: '05',
    icon: 'Award',
    title: 'Получение результата',
    duration: 'По итогу',
    format: 'Исполнение решения',
    desc: 'Доводим дело до реального результата — не просто получаем решение суда, но и обеспечиваем его исполнение.',
    items: [
      'Получение исполнительного листа',
      'Работа с приставами',
      'Арест счетов и имущества',
      'Реальное взыскание денег',
    ],
  },
];

const formats = [
  { icon: 'Users', title: 'Очно', desc: 'Встреча в офисе в Таганроге. Подходит для разбора сложных ситуаций с документами.' },
  { icon: 'Video', title: 'Видеозвонок', desc: 'Zoom, Telegram, WhatsApp — удобный формат для клиентов из других городов.' },
  { icon: 'MessageSquare', title: 'Мессенджер', desc: 'Telegram, WhatsApp — оперативная связь и передача документов.' },
  { icon: 'FileSignature', title: 'ЭДО', desc: 'Электронный документооборот — подписание договора и документов онлайн.' },
];

export default function HowWeWork() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: DEEP }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Процесс</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Как мы работаем
          </h1>
          <p className="font-golos text-[15px] max-w-2xl leading-relaxed" style={{ color: PROSE }}>
            Прозрачный процесс от первого звонка до получения результата. Вы всегда знаете, что происходит по вашему делу.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-5">
            {stages.map((s) => (
              <div key={s.num} className="border rounded-sm" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="font-cormorant text-[42px] font-semibold" style={{ color: 'rgba(200,163,95,0.3)' }}>
                          {s.num}
                        </span>
                        <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                          <Icon name={s.icon} size={20} style={{ color: G }} />
                        </div>
                      </div>
                      <h2 className="font-cormorant font-semibold text-white mb-3" style={{ fontSize: '22px' }}>{s.title}</h2>
                      <p className="font-golos text-[13px] leading-relaxed mb-4" style={{ color: PROSE }}>{s.desc}</p>
                      <div className="flex gap-4">
                        <div>
                          <div className="font-golos text-[10px] tracking-widest uppercase mb-1" style={{ color: MUTED }}>Срок</div>
                          <div className="font-golos text-[13px]" style={{ color: G }}>{s.duration}</div>
                        </div>
                        <div>
                          <div className="font-golos text-[10px] tracking-widest uppercase mb-1" style={{ color: MUTED }}>Формат</div>
                          <div className="font-golos text-[13px]" style={{ color: G }}>{s.format}</div>
                        </div>
                      </div>
                    </div>
                    {/* Right */}
                    <div className="lg:col-span-8">
                      <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: MUTED }}>
                        Что входит
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.items.map((item) => (
                          <div key={item} className="flex items-center gap-3 p-3.5 rounded-sm" style={{ backgroundColor: 'rgba(200,163,95,0.04)', border: `1px solid ${BORDER}` }}>
                            <Icon name="Check" size={13} style={{ color: G }} />
                            <span className="font-golos text-[13px]" style={{ color: PROSE }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Удобно везде</span>
          </div>
          <h2 className="font-cormorant font-semibold text-white mb-10" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
            Работаем онлайн по всей России
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f) => (
              <div key={f.title} className="border rounded-sm p-6" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <Icon name={f.icon} size={20} className="mb-4" style={{ color: G }} />
                <h3 className="font-cormorant text-[18px] font-semibold text-white mb-2">{f.title}</h3>
                <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border rounded-sm p-10 md:p-14 text-center" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
            <Icon name="ShieldCheck" size={36} className="mx-auto mb-5" style={{ color: G }} />
            <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(26px,3vw,40px)' }}>
              Вы всегда в курсе ситуации
            </h2>
            <p className="font-golos text-[14px] leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: PROSE }}>
              Промежуточные отчёты, доступ к материалам дела, оперативная связь с юристом. Никаких «мы занимаемся, ждите».
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacts" className="btn-gold inline-block px-8 py-4 rounded font-golos font-semibold" style={{ color: DEEP }}>
                Получить консультацию
              </Link>
              <Link to="/contacts" className="btn-outline-gold inline-block px-8 py-4 rounded font-golos font-semibold">
                Разобрать мою ситуацию
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

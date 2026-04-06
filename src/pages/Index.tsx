import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const G = '#C8A35F';
const NAVY = '#0B1F3A';
const DEEP = '#081629';
const LIGHT = '#0F2847';
const PROSE = '#C9D4E3';
const MUTED = '#8A9AB5';
const BORDER = 'rgba(200,163,95,0.18)';

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-px" style={{ backgroundColor: G }} />
      <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>{label}</span>
    </div>
  );
}

function BtnPrimary({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="btn-gold inline-block px-7 py-3.5 rounded font-golos font-semibold text-[14px]" style={{ color: DEEP }}>
      {children}
    </Link>
  );
}

function BtnSecondary({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="btn-outline-gold inline-block px-7 py-3.5 rounded font-golos font-semibold text-[14px]">
      {children}
    </Link>
  );
}

const practices = [
  { icon: 'Car', title: 'Страховые споры', sub: 'ОСАГО, КАСКО, занижение выплат' },
  { icon: 'AlertOctagon', title: 'Споры по ДТП', sub: 'Возмещение ущерба, вред здоровью' },
  { icon: 'ShieldCheck', title: 'Защита прав потребителей', sub: 'Магазины, застройщики, банки' },
  { icon: 'Scale', title: 'Судебное представительство', sub: 'Суды общей юрисдикции, арбитраж' },
  { icon: 'FileText', title: 'Договорная работа', sub: 'Разработка, анализ, претензии' },
  { icon: 'Briefcase', title: 'Сопровождение бизнеса', sub: 'Юридическая поддержка под задачу' },
  { icon: 'Heart', title: 'Семейные споры', sub: 'Раздел имущества, алименты' },
  { icon: 'Landmark', title: 'Административные споры', sub: 'КАС РФ, обжалование действий органов' },
];

const serviceStages = [
  { icon: 'MessageSquare', title: 'Консультация', desc: 'Разбираем ситуацию, оцениваем риски' },
  { icon: 'Search', title: 'Анализ документов', desc: 'Изучаем материалы и формируем позицию' },
  { icon: 'PenLine', title: 'Подготовка иска', desc: 'Составляем претензии, исковые заявления' },
  { icon: 'Gavel', title: 'Ведение дела', desc: 'Представляем интересы в суде' },
  { icon: 'RefreshCw', title: 'Апелляция', desc: 'Обжалуем невыгодные решения' },
];

const advantages = [
  { icon: 'Target', title: 'Анализ до начала работы', desc: 'Оцениваем ситуацию честно, до подписания договора' },
  { icon: 'Ban', title: 'Не берём дела без перспективы', desc: 'Если шансов нет — скажем об этом прямо' },
  { icon: 'ClipboardList', title: 'Прозрачные условия', desc: 'Договор, фиксированная стоимость, никаких сюрпризов' },
  { icon: 'Lock', title: 'Конфиденциальность', desc: 'Полная тайна клиента на всех этапах работы' },
];

const cases = [
  { tag: 'ОСАГО', title: 'Взыскание 840 000 ₽', result: '+840 000 ₽', desc: 'Страховая отказала. Взыскали полную сумму + штраф + неустойку через суд.' },
  { tag: 'Банкротство', title: 'Списание долгов 3,2 млн ₽', result: '−3 200 000 ₽', desc: 'Признали должника банкротом. Все долги перед банками списаны.' },
  { tag: 'Взыскание', title: 'Возврат долга 1,1 млн ₽', result: '+1 100 000 ₽', desc: 'Взыскали долг по договору поставки с процентами по ст. 395 ГК РФ.' },
];

const steps = [
  { n: '01', title: 'Анализ', desc: 'Изучаем документы' },
  { n: '02', title: 'Стратегия', desc: 'Строим позицию' },
  { n: '03', title: 'Документы', desc: 'Иски, претензии' },
  { n: '04', title: 'Ведение дела', desc: 'Суд, переговоры' },
  { n: '05', title: 'Результат', desc: 'Реальный итог' },
];

export default function Index() {
  return (
    <main>
      {/* БЛОК 1: HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 55%, #102240 100%)` }}
      >
        <div className="absolute top-0 bottom-0 left-[10%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.12), transparent)' }} />
        <div className="absolute top-0 bottom-0 right-[8%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.07), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <SectionTag label="Таганрог · Ростовская область · Вся Россия" />
            <h1 className="font-cormorant font-semibold text-white leading-[1.08] mb-6" style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}>
              Оказываем юридическую помощь бизнесу и гражданам в Таганроге и по всей России с формированием правовой позиции и доведением до результата
            </h1>
            <p className="font-golos leading-relaxed mb-8" style={{ color: PROSE, fontSize: '16px' }}>
              Суды, споры, договоры, банкротство, защита от убытков и взыскание задолженности.<br />
              Работаем под задачу: <span style={{ color: G }}>анализ → стратегия → результат</span>
            </p>
            <ul className="flex flex-col gap-2.5 mb-10">
              {[
                'Работаем по Таганрогу, Ростовской области и РФ',
                'Чёткая правовая позиция до начала работы',
                'Ведём дело до результата, а не процесса ради процесса',
                'Прозрачные условия и договор',
              ].map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: G }} />
                  <span className="font-golos text-[14px]" style={{ color: PROSE }}>{m}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary to="/contacts">Получить консультацию</BtnPrimary>
              <BtnSecondary to="/contacts">Разобрать мою ситуацию</BtnSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2: СЕГМЕНТАЦИЯ */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Кому нужна помощь" />
          <h2 className="font-cormorant font-semibold text-white mb-10" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>
            Работаем с бизнесом и гражданами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-sm p-8 border" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: 'rgba(200,163,95,0.12)' }}>
                  <Icon name="Briefcase" size={20} style={{ color: G }} />
                </div>
                <span className="font-cormorant text-xl font-semibold text-white">Бизнесу</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-6">
                {['Корпоративные споры', 'Договорная работа', 'Взыскание дебиторской задолженности', 'Защита в административных делах', 'Юридическое сопровождение'].map((i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: G }} />
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>{i}</span>
                  </li>
                ))}
              </ul>
              <BtnSecondary to="/practice">Практика для бизнеса</BtnSecondary>
            </div>
            <div className="rounded-sm p-8 border" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: 'rgba(200,163,95,0.12)' }}>
                  <Icon name="User" size={20} style={{ color: G }} />
                </div>
                <span className="font-cormorant text-xl font-semibold text-white">Физическим лицам</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-6">
                {['Страховые споры (ОСАГО, КАСКО)', 'Защита прав потребителей', 'Семейные споры', 'Банкротство физических лиц', 'Споры с застройщиком'].map((i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: G }} />
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>{i}</span>
                  </li>
                ))}
              </ul>
              <BtnSecondary to="/practice">Практика для граждан</BtnSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 3: ПРАКТИКА */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Направления" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>Практика</h2>
            <Link to="/practice" className="font-golos text-[13px] flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: G }}>
              Перейти в практику <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {practices.map((p) => (
              <div key={p.title} className="card-hover border rounded-sm p-6" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <Icon name={p.icon} size={20} className="mb-4" style={{ color: G }} />
                <h3 className="font-cormorant text-[17px] font-semibold text-white mb-1.5 leading-snug">{p.title}</h3>
                <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{p.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <BtnPrimary to="/practice">Перейти в практику</BtnPrimary>
          </div>
        </div>
      </section>

      {/* БЛОК 4: УСЛУГИ */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Формат работы" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>Услуги</h2>
            <Link to="/services" className="font-golos text-[13px] flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: G }}>
              Смотреть услуги <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceStages.map((s, i) => (
              <div key={s.title} className="border rounded-sm p-6" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <span className="font-cormorant text-[11px] tracking-widest block mb-3" style={{ color: G }}>0{i + 1}</span>
                <Icon name={s.icon} size={18} className="mb-3" style={{ color: G }} />
                <h3 className="font-cormorant text-[17px] font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <BtnSecondary to="/services">Смотреть услуги</BtnSecondary>
          </div>
        </div>
      </section>

      {/* БЛОК 5: ПРЕИМУЩЕСТВА */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTag label="Наш подход" />
              <h2 className="font-cormorant font-semibold text-white mb-5" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>
                Почему выбирают нас
              </h2>
              <p className="font-golos text-[14px] leading-relaxed mb-8" style={{ color: PROSE }}>
                Мы не обещаем невозможного. Оцениваем ситуацию честно — и беремся только за дела, в которых видим реальный путь к результату.
              </p>
              <BtnPrimary to="/contacts">Разобрать мою ситуацию</BtnPrimary>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a.title} className="border rounded-sm p-6" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                  <Icon name={a.icon} size={18} className="mb-4" style={{ color: G }} />
                  <h4 className="font-cormorant text-[17px] font-semibold text-white mb-1.5">{a.title}</h4>
                  <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6: КЕЙСЫ */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Результаты" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>Кейсы</h2>
            <Link to="/cases" className="font-golos text-[13px] flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: G }}>
              Смотреть кейсы <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <div key={c.title} className="card-hover border rounded-sm p-7" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <span className="inline-block font-golos text-[11px] border rounded-full px-3 py-1 mb-4"
                  style={{ color: G, borderColor: 'rgba(200,163,95,0.3)' }}>
                  {c.tag}
                </span>
                <h3 className="font-cormorant text-xl font-semibold text-white mb-3">{c.title}</h3>
                <p className="font-golos text-[13px] leading-relaxed mb-5" style={{ color: MUTED }}>{c.desc}</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-[3px] h-8 rounded-full" style={{ backgroundColor: G }} />
                  <span className="font-cormorant text-2xl font-bold" style={{ color: G }}>{c.result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <BtnSecondary to="/cases">Смотреть кейсы</BtnSecondary>
          </div>
        </div>
      </section>

      {/* БЛОК 7: КАК МЫ РАБОТАЕМ */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Процесс" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>Как мы работаем</h2>
            <Link to="/how-we-work" className="font-golos text-[13px] flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: G }}>
              Подробнее <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-10">
            {steps.map((s) => (
              <div key={s.n} className="border rounded-sm p-6 flex flex-col" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
                <span className="font-cormorant text-[28px] font-semibold mb-3" style={{ color: 'rgba(200,163,95,0.35)' }}>{s.n}</span>
                <h4 className="font-cormorant text-[17px] font-semibold text-white mb-1">{s.title}</h4>
                <p className="font-golos text-[12px]" style={{ color: MUTED }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <BtnPrimary to="/contacts">Получить консультацию</BtnPrimary>
        </div>
      </section>

      {/* БЛОК 8: СТОИМОСТЬ */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTag label="Цены" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>Стоимость</h2>
            <Link to="/pricing" className="font-golos text-[13px] flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: G }}>
              Узнать стоимость <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { title: 'Консультация', price: 'Бесплатно', desc: 'Первичный разбор ситуации', items: ['Оценка перспектив', 'Ответы на вопросы', 'Рекомендации'], featured: false },
              { title: 'Разовые услуги', price: 'от 5 000 ₽', desc: 'Под конкретную задачу', items: ['Подготовка документов', 'Представительство', 'Анализ договора'], featured: true },
              { title: 'Сопровождение', price: 'от 20 000 ₽/мес', desc: 'Постоянная поддержка', items: ['Консультации без ограничений', 'Договорная работа', 'Претензии и иски'], featured: false },
            ].map((p) => (
              <div key={p.title} className="border rounded-sm p-8"
                style={{
                  backgroundColor: p.featured ? 'rgba(200,163,95,0.07)' : LIGHT,
                  borderColor: p.featured ? 'rgba(200,163,95,0.45)' : BORDER,
                }}>
                {p.featured && (
                  <div className="inline-block font-golos text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: 'rgba(200,163,95,0.15)', color: G }}>
                    Популярный
                  </div>
                )}
                <h3 className="font-cormorant text-xl font-semibold text-white mb-1">{p.title}</h3>
                <div className="font-cormorant text-3xl font-bold mb-1" style={{ color: G }}>{p.price}</div>
                <p className="font-golos text-[12px] mb-5" style={{ color: MUTED }}>{p.desc}</p>
                <ul className="flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Icon name="Check" size={13} style={{ color: G }} />
                      <span className="font-golos text-[13px]" style={{ color: PROSE }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <BtnSecondary to="/pricing">Узнать стоимость</BtnSecondary>
        </div>
      </section>

      {/* БЛОК 9: ФИНАЛЬНЫЙ CTA */}
      <section className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${DEEP} 0%, ${NAVY} 100%)` }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.2), transparent)' }} />
        <div className="absolute top-0 bottom-0 left-[15%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.08), transparent)' }} />
        <div className="absolute top-0 bottom-0 right-[15%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.08), transparent)' }} />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="w-10 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.45)' }} />
            <Icon name="Scale" size={18} style={{ color: G }} />
            <div className="w-10 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.45)' }} />
          </div>
          <h2 className="font-cormorant font-semibold text-white mb-5 leading-tight" style={{ fontSize: 'clamp(32px,4vw,58px)' }}>
            Опишите ситуацию — предложим решение
          </h2>
          <p className="font-golos text-[14px] leading-relaxed mb-10" style={{ color: PROSE }}>
            Первичная консультация бесплатна. Честно оцениваем перспективы до начала работы.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BtnPrimary to="/contacts">Разобрать мою ситуацию</BtnPrimary>
            <BtnSecondary to="/contacts">Получить консультацию</BtnSecondary>
          </div>
        </div>
      </section>
    </main>
  );
}

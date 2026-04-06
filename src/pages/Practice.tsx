import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const G = '#C8A35F';
const DEEP = '#081629';
const NAVY = '#0B1F3A';
const LIGHT = '#0F2847';
const PROSE = '#C9D4E3';
const MUTED = '#8A9AB5';
const BORDER = 'rgba(200,163,95,0.18)';

const areas = [
  {
    icon: 'Car',
    title: 'Страховые споры (ОСАГО, КАСКО)',
    problem: 'Страховая компания занижает выплату, затягивает сроки или отказывает в возмещении без законных оснований.',
    action: 'Проводим независимую экспертизу, направляем досудебную претензию, при необходимости подаём иск. Взыскиваем ущерб, штраф 50% и неустойку.',
    result: 'Клиент получает полную страховую выплату + штраф за незаконный отказ + неустойку за просрочку.',
  },
  {
    icon: 'AlertOctagon',
    title: 'Споры по ДТП и возмещению ущерба',
    problem: 'Виновник скрылся, страховая недоплатила, или причинён вред здоровью без компенсации.',
    action: 'Устанавливаем виновника, формируем доказательную базу, ведём переговоры и судебное взыскание.',
    result: 'Возмещение материального ущерба, вреда здоровью, утраченного заработка и морального вреда.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита прав потребителей',
    problem: 'Продавец отказал в возврате, застройщик нарушил сроки, банк списал деньги незаконно.',
    action: 'Составляем претензию, собираем доказательства, подаём иск с требованием неустойки, штрафа и компенсации.',
    result: 'Возврат денег, неустойка за просрочку, штраф 50% в пользу потребителя по Закону о защите прав потребителей.',
  },
  {
    icon: 'Scale',
    title: 'Судебное представительство',
    problem: 'Нужен профессиональный представитель в суде общей юрисдикции или арбитражном суде.',
    action: 'Изучаем материалы дела, формируем правовую позицию, готовим документы, участвуем в заседаниях.',
    result: 'Профессиональная защита интересов на всех стадиях судебного процесса — от подачи иска до исполнения решения.',
  },
  {
    icon: 'FileText',
    title: 'Договорная работа и претензии',
    problem: 'Контрагент нарушил договор, нужно составить претензию или защититься от необоснованных требований.',
    action: 'Анализируем договор, выявляем нарушения, готовим претензию или правовую позицию для ответа.',
    result: 'Урегулирование спора в досудебном порядке или сформированная база для судебного взыскания.',
  },
  {
    icon: 'Briefcase',
    title: 'Юридическое сопровождение бизнеса',
    problem: 'Бизнесу нужна системная юридическая поддержка без содержания штатного юриста.',
    action: 'Ведём договорную работу, даём консультации, представляем интересы в спорах, проверяем контрагентов.',
    result: 'Защита бизнеса от правовых рисков, снижение претензионной нагрузки, уверенность в каждом решении.',
  },
  {
    icon: 'Heart',
    title: 'Семейные споры',
    problem: 'Развод, раздел совместно нажитого имущества, споры об алиментах или воспитании детей.',
    action: 'Оцениваем состав имущества, формируем позицию, ведём переговоры или судебный процесс.',
    result: 'Справедливый раздел имущества, установление алиментов, защита интересов детей.',
  },
  {
    icon: 'Landmark',
    title: 'Административные споры (КАС РФ)',
    problem: 'Незаконные действия или бездействие государственных органов, нарушение прав граждан.',
    action: 'Подаём административный иск, обжалуем решения органов власти, представляем интересы в суде.',
    result: 'Признание действий органов незаконными, восстановление нарушенных прав, взыскание компенсации.',
  },
];

export default function Practice() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: DEEP }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>Направления</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Практика
          </h1>
          <p className="font-golos text-[15px] max-w-2xl leading-relaxed" style={{ color: PROSE }}>
            Работаем только в тех областях, где накоплен реальный опыт. Для каждого направления — чёткая стратегия и измеримый результат.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-5">
          {areas.map((a, i) => (
            <div key={a.title} className="border rounded-sm overflow-hidden" style={{ backgroundColor: LIGHT, borderColor: BORDER }}>
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-5 mb-7">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                    <Icon name={a.icon} size={22} style={{ color: G }} />
                  </div>
                  <div>
                    <span className="font-cormorant text-[11px] tracking-widest block mb-1" style={{ color: 'rgba(200,163,95,0.5)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: '22px' }}>{a.title}</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="pl-4" style={{ borderLeft: `2px solid ${BORDER}` }}>
                    <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: G }}>Проблема</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.problem}</p>
                  </div>
                  <div className="pl-4" style={{ borderLeft: `2px solid ${BORDER}` }}>
                    <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: G }}>Действия юриста</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.action}</p>
                  </div>
                  <div className="pl-4" style={{ borderLeft: `2px solid ${G}` }}>
                    <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: G }}>Результат</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.result}</p>
                  </div>
                </div>
                <div className="mt-7">
                  <Link to="/contacts"
                    className="btn-gold inline-block px-6 py-2.5 rounded font-golos font-semibold text-[13px]"
                    style={{ color: DEEP }}>
                    Разобрать мою ситуацию
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: DEEP }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
            Не нашли своё направление?
          </h2>
          <p className="font-golos text-[14px] leading-relaxed mb-8" style={{ color: PROSE }}>
            Опишите ситуацию — оценим, можем ли помочь
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts" className="btn-gold inline-block px-8 py-4 rounded font-golos font-semibold" style={{ color: DEEP }}>
              Разобрать мою ситуацию
            </Link>
            <Link to="/contacts" className="btn-outline-gold inline-block px-8 py-4 rounded font-golos font-semibold">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

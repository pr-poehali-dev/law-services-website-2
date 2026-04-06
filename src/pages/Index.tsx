import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const services = [
  { icon: 'Scale', title: 'Судебные споры', desc: 'Ведение дел в судах общей юрисдикции и арбитражных судах' },
  { icon: 'Car', title: 'Споры со страховыми', desc: 'ОСАГО, КАСКО — добиваемся полной выплаты' },
  { icon: 'FileText', title: 'Договорная работа', desc: 'Разработка, проверка и сопровождение договоров' },
  { icon: 'TrendingDown', title: 'Взыскание задолженности', desc: 'Возврат долгов в досудебном и судебном порядке' },
  { icon: 'AlertTriangle', title: 'Банкротство', desc: 'Процедура банкротства физических и юридических лиц' },
  { icon: 'ShieldCheck', title: 'Защита прав потребителей', desc: 'Споры с магазинами, застройщиками, сервисами' },
];

const advantages = [
  { icon: 'Search', title: 'Работаем от анализа', desc: 'Сначала изучаем ситуацию, затем предлагаем стратегию' },
  { icon: 'Ban', title: 'Не берём дела без перспективы', desc: 'Честно оцениваем шансы до начала работы' },
  { icon: 'ClipboardCheck', title: 'Фиксируем условия в договоре', desc: 'Прозрачные условия, никаких устных договорённостей' },
  { icon: 'Lock', title: 'Обеспечиваем конфиденциальность', desc: 'Полная тайна клиента на всех этапах работы' },
];

const cases = [
  {
    tag: 'Страховые споры',
    title: 'Взыскание 840 000 ₽ по ОСАГО',
    result: '+840 000 ₽',
    desc: 'Клиент получил отказ. Через суд взыскали полную стоимость + штраф + неустойку.',
  },
  {
    tag: 'Банкротство',
    title: 'Списание долгов на 3,2 млн ₽',
    result: '−3 200 000 ₽',
    desc: 'Признали должника банкротом, все задолженности перед банками списаны.',
  },
  {
    tag: 'Взыскание',
    title: 'Возврат 1,1 млн ₽ от контрагента',
    result: '+1 100 000 ₽',
    desc: 'Взыскали долг по договору поставки, включая проценты за пользование чужими деньгами.',
  },
];

const steps = [
  { num: '01', title: 'Анализ ситуации', desc: 'Изучаем документы, оцениваем перспективы' },
  { num: '02', title: 'Формирование позиции', desc: 'Выстраиваем правовую стратегию защиты' },
  { num: '03', title: 'Подготовка документов', desc: 'Иски, претензии, ответы, жалобы' },
  { num: '04', title: 'Ведение дела', desc: 'Представляем интересы в судах и переговорах' },
  { num: '05', title: 'Получение результата', desc: 'Исполнение решения, реальные деньги' },
];

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center noise-overlay overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #081629 0%, #0B1F3A 50%, #0F2847 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/0d134cb7-7343-460d-aae4-64c5093bf8df/files/6e3bb7ef-284a-4658-8175-e2e8a0f3b52d.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C8A35F33] to-transparent" />
        <div className="absolute top-0 right-24 w-px h-full bg-gradient-to-b from-transparent via-[#C8A35F1A] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.25em] uppercase">
                Таганрог · Ростовская область · Вся Россия
              </span>
            </div>

            <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-white leading-[1.1] mb-6">
              Решаем юридические задачи бизнеса и граждан
            </h1>

            <p className="font-golos text-[#C9D4E3] text-lg md:text-xl leading-relaxed mb-10">
              Формируем правовую позицию и доводим дело до результата
            </p>

            <div className="flex flex-wrap gap-10 mb-12">
              {[
                { val: '12+', label: 'лет практики' },
                { val: '94%', label: 'выигранных дел' },
                { val: '1500+', label: 'клиентов' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-cormorant text-4xl font-bold text-[#C8A35F]">{stat.val}</div>
                  <div className="font-golos text-[#8A9AB5] text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold text-base">
                Разобрать ситуацию
              </Link>
              <Link to="/contacts" className="btn-outline-gold px-8 py-4 rounded font-golos font-semibold text-base">
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Что мы делаем</span>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white">Направления практики</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-hover border border-[rgba(200,163,95,0.2)] rounded-sm p-8 group cursor-pointer"
                style={{ backgroundColor: '#0F2847' }}
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                  <Icon name={s.icon} size={22} className="text-[#C8A35F]" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline-gold px-8 py-3.5 rounded font-golos text-sm font-semibold inline-block">
              Смотреть все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#C8A35F]" />
                <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Наш подход</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-6">
                Почему выбирают нас
              </h2>
              <p className="font-golos text-[#C9D4E3] text-base leading-relaxed mb-10">
                Мы не берёмся за всё подряд — только за те дела, в которых видим реальную перспективу для клиента.
              </p>
              <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold inline-block">
                Разобрать ситуацию
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((a) => (
                <div key={a.title} className="border border-[rgba(200,163,95,0.2)] rounded-sm p-6"
                  style={{ backgroundColor: 'rgba(15,40,71,0.5)' }}>
                  <Icon name={a.icon} size={20} className="text-[#C8A35F] mb-4" />
                  <h4 className="font-cormorant text-lg font-semibold text-white mb-2">{a.title}</h4>
                  <p className="font-golos text-xs text-[#8A9AB5] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Реальные результаты</span>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white">Кейсы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <div key={c.title} className="card-hover border border-[rgba(200,163,95,0.2)] rounded-sm overflow-hidden"
                style={{ backgroundColor: '#0F2847' }}>
                <div className="p-8">
                  <span className="inline-block font-golos text-xs text-[#C8A35F] border border-[rgba(200,163,95,0.3)] px-3 py-1 rounded-full mb-5">
                    {c.tag}
                  </span>
                  <h3 className="font-cormorant text-xl font-semibold text-white mb-3">{c.title}</h3>
                  <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed mb-6">{c.desc}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: '#C8A35F' }} />
                    <span className="font-cormorant text-2xl font-bold text-[#C8A35F]">{c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/cases" className="btn-outline-gold px-8 py-3.5 rounded font-golos text-sm font-semibold inline-block">
              Смотреть все кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C8A35F]" />
              <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Процесс</span>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white">Как мы работаем</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-14">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col">
                <div className="w-16 h-16 rounded-sm border border-[rgba(200,163,95,0.4)] flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#0B1F3A' }}>
                  <span className="font-cormorant text-lg font-semibold text-[#C8A35F]">{step.num}</span>
                </div>
                <h4 className="font-cormorant text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="font-golos text-xs text-[#8A9AB5] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold inline-block">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #081629 0%, #0B1F3A 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/0d134cb7-7343-460d-aae4-64c5093bf8df/files/6e3bb7ef-284a-4658-8175-e2e8a0f3b52d.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F33] to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.5)' }} />
            <Icon name="Scale" size={20} className="text-[#C8A35F]" />
            <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.5)' }} />
          </div>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            Опишите ситуацию — предложим решение
          </h2>
          <p className="font-golos text-[#C9D4E3] text-base mb-10 leading-relaxed">
            Первичная консультация бесплатна. Анализируем ситуацию и честно говорим о перспективах.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold">
              Разобрать ситуацию
            </Link>
            <Link to="/contacts" className="btn-outline-gold px-8 py-4 rounded font-golos font-semibold">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
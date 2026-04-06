import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Scale',
    title: 'Судебные споры',
    desc: 'Представляем интересы в судах общей юрисдикции и арбитражных судах. Ведём дело от подачи иска до получения исполнительного листа.',
    price: 'от 15 000 ₽',
    items: ['Подготовка искового заявления', 'Участие в судебных заседаниях', 'Обжалование решений', 'Исполнительное производство'],
  },
  {
    icon: 'Car',
    title: 'Споры со страховыми',
    desc: 'ОСАГО, КАСКО — добиваемся полной страховой выплаты. Работаем с отказами, занижениями, затягиванием сроков.',
    price: 'от 10 000 ₽',
    items: ['Досудебная претензия', 'Экспертиза ущерба', 'Судебное взыскание', 'Штраф 50% за незаконный отказ'],
  },
  {
    icon: 'FileText',
    title: 'Договорная работа',
    desc: 'Разрабатываем, проверяем и сопровождаем договоры любой сложности для бизнеса и физических лиц.',
    price: 'от 5 000 ₽',
    items: ['Разработка договора с нуля', 'Юридическая экспертиза', 'Согласование условий', 'Сопровождение сделки'],
  },
  {
    icon: 'TrendingDown',
    title: 'Взыскание задолженности',
    desc: 'Возвращаем долги в досудебном и судебном порядке. Работаем с физическими лицами, ИП и организациями.',
    price: 'от 12 000 ₽',
    items: ['Досудебная претензия', 'Приказное производство', 'Судебное взыскание', 'Работа с судебными приставами'],
  },
  {
    icon: 'AlertTriangle',
    title: 'Банкротство',
    desc: 'Процедура банкротства физических и юридических лиц. Законное списание долгов с минимальными потерями.',
    price: 'от 90 000 ₽',
    items: ['Анализ финансового состояния', 'Подготовка документов', 'Ведение процедуры', 'Списание долгов'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита прав потребителей',
    desc: 'Споры с магазинами, застройщиками, сервисными центрами, банками и другими организациями.',
    price: 'от 8 000 ₽',
    items: ['Возврат товара', 'Споры с застройщиком', 'Возврат средств', 'Компенсация морального вреда'],
  },
  {
    icon: 'Briefcase',
    title: 'Юридическое сопровождение бизнеса',
    desc: 'Абонентское юридическое обслуживание для предпринимателей. Регулярная правовая поддержка по фиксированной стоимости.',
    price: 'от 20 000 ₽/мес',
    items: ['Консультации без ограничений', 'Проверка договоров', 'Претензионная работа', 'Представительство в судах'],
  },
  {
    icon: 'Home',
    title: 'Жилищные споры',
    desc: 'Раздел имущества, выселение, споры с управляющими компаниями, регистрация права собственности.',
    price: 'от 18 000 ₽',
    items: ['Раздел имущества', 'Признание права собственности', 'Споры с УК/ТСЖ', 'Регистрационные действия'],
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: '#081629' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C8A35F]" />
            <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Что мы делаем</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">
            Услуги
          </h1>
          <p className="font-golos text-[#C9D4E3] text-base max-w-2xl leading-relaxed">
            Работаем только в тех областях, где накоплен реальный опыт и результаты. Каждая услуга — это конкретный процесс с понятной стоимостью.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover border border-[rgba(200,163,95,0.2)] rounded-sm overflow-hidden group"
                style={{ backgroundColor: '#0F2847' }}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name={s.icon} size={22} className="text-[#C8A35F]" />
                    </div>
                    <span className="font-cormorant text-lg font-semibold text-[#C8A35F]">{s.price}</span>
                  </div>
                  <h2 className="font-cormorant text-2xl font-semibold text-white mb-3">{s.title}</h2>
                  <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed mb-6">{s.desc}</p>

                  <div className="border-t border-[rgba(200,163,95,0.1)] pt-5 mb-6">
                    <ul className="grid grid-cols-2 gap-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#C8A35F] shrink-0" />
                          <span className="font-golos text-xs text-[#C9D4E3]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contacts" className="btn-gold px-5 py-2.5 rounded text-[#081629] font-golos font-semibold text-sm inline-block">
                    Получить консультацию
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-semibold text-white mb-4">Не нашли нужную услугу?</h2>
          <p className="font-golos text-[#C9D4E3] text-sm mb-8 leading-relaxed">
            Опишите ситуацию — разберём и предложим оптимальное решение
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

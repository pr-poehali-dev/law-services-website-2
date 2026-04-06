import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const articles = [
  {
    category: 'Страховые споры',
    date: '28 марта 2024',
    readTime: '5 мин',
    title: 'Как получить выплату по ОСАГО, если страховая занижает сумму',
    desc: 'Разбираем пошаговую схему: от независимой экспертизы до взыскания через суд. Реальные цифры и судебная практика.',
    icon: 'Car',
  },
  {
    category: 'Законодательство',
    date: '15 марта 2024',
    readTime: '7 мин',
    title: 'Изменения в законе о банкротстве физических лиц в 2024 году',
    desc: 'Что изменилось в процедуре банкротства граждан, новые требования и возможности для должников.',
    icon: 'BookOpen',
  },
  {
    category: 'Взыскание долгов',
    date: '5 марта 2024',
    readTime: '4 мин',
    title: 'Судебный приказ: быстро и без лишних расходов',
    desc: 'Когда можно использовать упрощённый порядок взыскания и как не дать должнику его отменить.',
    icon: 'FileText',
  },
  {
    category: 'Кейсы',
    date: '22 февраля 2024',
    readTime: '6 мин',
    title: 'Как мы отстояли 2,8 млн рублей: дело о безденежной расписке',
    desc: 'Разбор реального дела: как доказать, что деньги по расписке фактически не передавались.',
    icon: 'Scale',
  },
  {
    category: 'Права потребителей',
    date: '10 февраля 2024',
    readTime: '5 мин',
    title: 'Застройщик задержал сдачу: как взыскать неустойку по ДДУ',
    desc: 'Пошаговая инструкция по взысканию неустойки с застройщика. Формулы расчёта, суммы, сроки.',
    icon: 'Home',
  },
  {
    category: 'Бизнес',
    date: '1 февраля 2024',
    readTime: '8 мин',
    title: '5 ошибок в договорах, которые стоят предпринимателям миллионы',
    desc: 'Типичные ловушки в договорах поставки, аренды и услуг. Как защитить бизнес до подписания.',
    icon: 'Briefcase',
  },
];

const categories = ['Все', 'Страховые споры', 'Законодательство', 'Взыскание долгов', 'Кейсы', 'Права потребителей', 'Бизнес'];

export default function Blog() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: '#081629' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C8A35F]" />
            <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Знания</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">Блог</h1>
          <p className="font-golos text-[#C9D4E3] text-base max-w-2xl leading-relaxed">
            Разборы дел, изменения законодательства и полезные статьи для тех, кто хочет защитить свои права
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[rgba(200,163,95,0.1)]" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-golos text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  i === 0
                    ? 'border-[#C8A35F] text-[#C8A35F] bg-[rgba(200,163,95,0.1)]'
                    : 'border-[rgba(200,163,95,0.2)] text-[#8A9AB5] hover:text-[#C8A35F] hover:border-[#C8A35F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Featured */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {articles.slice(0, 2).map((article) => (
              <div key={article.title} className="card-hover border border-[rgba(200,163,95,0.2)] rounded-sm cursor-pointer group"
                style={{ backgroundColor: '#0F2847' }}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block font-golos text-xs text-[#C8A35F] border border-[rgba(200,163,95,0.3)] px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <Icon name={article.icon} size={18} className="text-[#C8A35F] opacity-60" />
                  </div>
                  <h2 className="font-cormorant text-2xl font-semibold text-white mb-3 group-hover:text-[#C8A35F] transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="font-golos text-sm text-[#8A9AB5] leading-relaxed mb-6">{article.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-golos text-xs text-[#8A9AB5]">{article.date}</span>
                      <span className="font-golos text-xs text-[#8A9AB5]">· {article.readTime}</span>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-[#C8A35F] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.slice(2).map((article) => (
              <div key={article.title} className="card-hover border border-[rgba(200,163,95,0.2)] rounded-sm cursor-pointer group"
                style={{ backgroundColor: '#0F2847' }}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block font-golos text-xs text-[#C8A35F] border border-[rgba(200,163,95,0.3)] px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-lg font-semibold text-white mb-3 group-hover:text-[#C8A35F] transition-colors duration-200 leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-golos text-xs text-[#8A9AB5] leading-relaxed mb-4 line-clamp-3">{article.desc}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-golos text-xs text-[#8A9AB5]">{article.date}</span>
                    <span className="font-golos text-xs text-[#8A9AB5]">· {article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#081629' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-semibold text-white mb-4">Нужна личная консультация?</h2>
          <p className="font-golos text-[#C9D4E3] text-sm mb-8">Статьи — это общее. Ваша ситуация требует индивидуального разбора</p>
          <Link to="/contacts" className="btn-gold px-8 py-4 rounded text-[#081629] font-golos font-semibold inline-block">
            Разобрать ситуацию
          </Link>
        </div>
      </section>
    </main>
  );
}

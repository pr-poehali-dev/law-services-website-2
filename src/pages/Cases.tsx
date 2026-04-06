import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const cases = [
  {
    tag: 'Страховые споры',
    title: 'Взыскание 840 000 ₽ по ОСАГО',
    result: '+840 000 ₽',
    problem: 'Страховая компания отказала в выплате, ссылаясь на нарушение условий договора. Клиент получил официальный отказ.',
    action: 'Провели независимую экспертизу, составили досудебную претензию, подали иск в районный суд с требованием взыскать полную сумму ущерба, штраф 50% и неустойку.',
    outcome: 'Суд полностью удовлетворил исковые требования. Взыскано: 420 000 ₽ ущерб + 210 000 ₽ штраф + 130 000 ₽ неустойка + 80 000 ₽ расходы.',
  },
  {
    tag: 'Банкротство',
    title: 'Списание долгов на 3,2 млн ₽',
    result: '−3 200 000 ₽',
    problem: 'Клиент — физическое лицо с долгами перед тремя банками и МФО. Общий долг — 3,2 млн ₽. Поступали угрозы коллекторов.',
    action: 'Подготовили заявление о банкротстве, собрали необходимый пакет документов, прошли процедуру реализации имущества через арбитражный суд.',
    outcome: 'Процедура завершена за 8 месяцев. Все долги перед банками и МФО на 3 200 000 ₽ полностью списаны по решению суда.',
  },
  {
    tag: 'Взыскание',
    title: 'Возврат 1,1 млн ₽ от контрагента',
    result: '+1 100 000 ₽',
    problem: 'ИП заключил договор поставки, оплатил товар, но поставщик не выполнил обязательства и отказывался возвращать деньги.',
    action: 'Направили претензию, получили отказ. Подали иск в арбитражный суд с требованием взыскать сумму долга, проценты по ст. 395 ГК РФ и судебные расходы.',
    outcome: 'Арбитражный суд взыскал 1 100 000 ₽, включая основной долг 950 000 ₽ и проценты за пользование чужими денежными средствами.',
  },
  {
    tag: 'Защита потребителей',
    title: 'Возврат 580 000 ₽ от застройщика',
    result: '+580 000 ₽',
    problem: 'Застройщик задержал сдачу квартиры на 14 месяцев. Клиент нёс расходы на аренду жилья и требовал компенсации.',
    action: 'Подали досудебную претензию с расчётом неустойки по ДДУ, составили иск с требованием взыскать неустойку и компенсацию морального вреда.',
    outcome: 'Взыскана неустойка 420 000 ₽, компенсация морального вреда 50 000 ₽, штраф потребителя 110 000 ₽. Итого: 580 000 ₽.',
  },
  {
    tag: 'Судебные споры',
    title: 'Отмена долга 2,8 млн ₽ по расписке',
    result: '−2 800 000 ₽',
    problem: 'Клиент подписал расписку под давлением. Взыскатель подал иск в суд с требованием вернуть 2,8 млн ₽.',
    action: 'Собрали доказательства безденежности расписки, привлекли свидетелей, заявили о недействительности договора займа.',
    outcome: 'Суд отказал во взыскании. Расписка признана безденежной. Клиент освобождён от обязательства на 2 800 000 ₽.',
  },
  {
    tag: 'КАСКО',
    title: 'Взыскание полной суммы по КАСКО',
    result: '+1 350 000 ₽',
    problem: 'Страховая компания выплатила 320 000 ₽ вместо 1 350 000 ₽ рыночной стоимости автомобиля, признанного тотально погибшим.',
    action: 'Провели независимую оценку, доказали занижение выплаты. Подали иск о взыскании недоплаченной суммы с учётом штрафа и неустойки.',
    outcome: 'Взысканы: 1 030 000 ₽ доплата + 165 000 ₽ штраф + 155 000 ₽ неустойка. Суд удовлетворил требования в полном объёме.',
  },
];

export default function Cases() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: '#081629' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A35F4D] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C8A35F]" />
            <span className="font-golos text-[#C8A35F] text-xs tracking-[0.2em] uppercase">Реальные результаты</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">Кейсы</h1>
          <p className="font-golos text-[#C9D4E3] text-base max-w-2xl leading-relaxed">
            Реальные дела и результаты нашей работы. Никаких выдуманных историй — только факты.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-6">
            {cases.map((c, i) => (
              <div key={c.title} className="border border-[rgba(200,163,95,0.2)] rounded-sm overflow-hidden"
                style={{ backgroundColor: '#0F2847' }}>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block font-golos text-xs text-[#C8A35F] border border-[rgba(200,163,95,0.3)] px-3 py-1 rounded-full mb-3">
                        {c.tag}
                      </span>
                      <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-white">{c.title}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-10 rounded-full" style={{ backgroundColor: '#C8A35F' }} />
                      <span className="font-cormorant text-3xl font-bold text-[#C8A35F]">{c.result}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-2 border-[rgba(200,163,95,0.3)] pl-4">
                      <div className="font-golos text-xs text-[#C8A35F] uppercase tracking-widest mb-2">Проблема</div>
                      <p className="font-golos text-sm text-[#C9D4E3] leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="border-l-2 border-[rgba(200,163,95,0.3)] pl-4">
                      <div className="font-golos text-xs text-[#C8A35F] uppercase tracking-widest mb-2">Действия</div>
                      <p className="font-golos text-sm text-[#C9D4E3] leading-relaxed">{c.action}</p>
                    </div>
                    <div className="border-l-2 border-[#C8A35F] pl-4">
                      <div className="font-golos text-xs text-[#C8A35F] uppercase tracking-widest mb-2">Результат</div>
                      <p className="font-golos text-sm text-[#C9D4E3] leading-relaxed">{c.outcome}</p>
                    </div>
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
          <h2 className="font-cormorant text-4xl font-semibold text-white mb-4">Ваша ситуация может стать следующим кейсом</h2>
          <p className="font-golos text-[#C9D4E3] text-sm mb-8">Расскажите — оценим перспективы бесплатно</p>
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

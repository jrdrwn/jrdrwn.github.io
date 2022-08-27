import { BiTask, BiHappy, BiMedal } from 'react-icons/bi';

function StatisticsWrapper({ children }) {
  return (
    <div className="stats stats-vertical shadow-md sm:stats-horizontal">
      {children}
    </div>
  );
}

function Statistic({ figure, title, value, desc }) {
  return (
    <div className="stat cursor-pointer place-items-start hover:bg-secondary hover:text-secondary-content">
      <div className="stat-figure">{figure}</div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="mb-12">
      <div className="container px-4 text-center">
        <StatisticsWrapper>
          <Statistic
            figure={<BiTask size={36} />}
            title="Project Complete"
            value="100+"
            desc="1-3 projects per day"
          />
          <Statistic
            figure={<BiHappy size={36} />}
            title="Client"
            value="50+"
            desc="Satisfied with the result"
          />
          <Statistic
            figure={<BiMedal size={36} />}
            title="Years of Experience"
            value="2+"
            desc="Python & JavaScript"
          />
        </StatisticsWrapper>
      </div>
    </section>
  );
}

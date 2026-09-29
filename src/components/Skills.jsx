const SKILLS = [
  {
    title: 'Red team operations',
    body: 'Planning and executing controlled assessments of web applications, networks, and infrastructure. Delivering findings with reproduction steps and remediation guidance.',
  },
  {
    title: 'Blue team & infrastructure',
    body: 'Hardening Linux and containerised environments, building SIEM pipelines, and designing segregated lab networks to simulate real-world attack surfaces.',
  },
];

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title">
    <h2
      id="skills-title"
      className="font-heading text-xl font-bold uppercase tracking-tight md:text-2xl"
    >
      How I work
    </h2>

    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {SKILLS.map((skill) => (
        <div key={skill.title} className="shell">
          <div className="shell-core h-full p-6">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              {skill.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {skill.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
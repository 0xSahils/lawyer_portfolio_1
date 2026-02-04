import { Award, Users, Briefcase, Trophy } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: "500+",
    label: "Cases Won",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Trophy,
    value: "50+",
    label: "Awards Won",
  },
]

const experience = [
  {
    year: "2020 - Present",
    title: "Senior Partner",
    company: "Private Practice",
    description: "Leading my own legal practice specializing in corporate law, civil litigation, and family matters.",
  },
  {
    year: "2015 - 2020",
    title: "Associate Attorney",
    company: "Morrison & Partners LLP",
    description: "Handled complex corporate cases and civil litigation matters for high-profile clients.",
  },
  {
    year: "2010 - 2015",
    title: "Junior Associate",
    company: "Baker Legal Group",
    description: "Started my legal career focusing on family law and estate planning matters.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-white font-serif mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-2">--- My Journey ---</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              Professional Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold/30" />

            {experience.map((item, index) => (
              <div key={item.title} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-navy z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className="text-gold text-sm font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white font-serif mt-1">{item.title}</h3>
                  <p className="text-gold-light text-sm mb-2">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

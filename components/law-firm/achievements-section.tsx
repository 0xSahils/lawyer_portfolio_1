import { Award, Trophy, Medal, Star, Scale, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    year: "2024",
    title: "Best Criminal Defense Attorney",
    organization: "National Law Association",
  },
  {
    icon: Award,
    year: "2023",
    title: "Excellence in Legal Practice",
    organization: "State Bar Council",
  },
  {
    icon: Medal,
    year: "2022",
    title: "Pro Bono Champion Award",
    organization: "Legal Aid Society",
  },
  {
    icon: Star,
    year: "2021",
    title: "Top 40 Under 40 Lawyers",
    organization: "Legal Weekly Magazine",
  },
  {
    icon: Scale,
    year: "2020",
    title: "Landmark Case Victory",
    organization: "Supreme Court of India",
  },
  {
    icon: BookOpen,
    year: "2019",
    title: "Legal Scholarship Award",
    organization: "Indian Law Institute",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
            — Recognition —
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a2332]">
            Awards & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] p-6 border-l-4 border-[#c9a962] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#1a2332] rounded-full flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <span className="text-[#c9a962] text-sm font-semibold">
                    {achievement.year}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a2332] mt-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {achievement.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

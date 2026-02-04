import Image from "next/image";
import { Heart, Users, BookOpen, Scale } from "lucide-react";

const contributions = [
  {
    icon: Heart,
    title: "Free Legal Aid Camps",
    description:
      "Organized over 50 free legal aid camps in rural areas, providing legal assistance to 5000+ underprivileged individuals.",
    stats: "5000+ People Helped",
  },
  {
    icon: Users,
    title: "Women Empowerment Initiative",
    description:
      "Founded a legal awareness program for women, educating them about their rights and providing free legal counsel.",
    stats: "200+ Women Trained",
  },
  {
    icon: BookOpen,
    title: "Legal Education Scholarships",
    description:
      "Established scholarship fund for aspiring law students from economically weaker sections of society.",
    stats: "25 Scholarships Awarded",
  },
  {
    icon: Scale,
    title: "Pro Bono Cases",
    description:
      "Dedicated 20% of practice time to pro bono cases, fighting for justice for those who cannot afford legal representation.",
    stats: "100+ Pro Bono Cases",
  },
];

export function ContributionSection() {
  return (
    <section id="contribution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/contribution.jpg"
                alt="Community Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-[#c9a962] p-6">
              <p className="text-[#1a2332] font-serif text-xl italic">
                &ldquo;Justice is not just a profession for me, it&apos;s a responsibility
                towards society.&rdquo;
              </p>
              <p className="text-[#1a2332]/70 mt-2">— John Mehta</p>
            </div>
          </div>

          <div>
            <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
              — Giving Back —
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a2332] mb-6">
              Contribution to Society
            </h2>
            <p className="text-gray-600 mb-8">
              Beyond the courtroom, I am deeply committed to making legal
              services accessible to all. Through various initiatives, I strive
              to create a more just and equitable society.
            </p>

            <div className="space-y-6">
              {contributions.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 bg-[#1a2332] rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2332] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <span className="text-[#c9a962] text-sm font-semibold">
                      {item.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

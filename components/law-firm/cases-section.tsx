import { CheckCircle, Scale, Briefcase, Users, Building, Heart } from "lucide-react";

const cases = [
  {
    icon: Scale,
    category: "Criminal Defense",
    title: "State vs. Kumar",
    result: "Full Acquittal",
    description:
      "Successfully defended client against wrongful murder charges with complete acquittal after 3-year trial.",
    value: "Life sentence avoided",
  },
  {
    icon: Building,
    category: "Corporate Law",
    title: "Tech Merger Deal",
    result: "Deal Closed",
    description:
      "Led legal negotiations for a major tech company merger valued at over Rs. 500 crore.",
    value: "Rs. 500+ Cr Deal",
  },
  {
    icon: Users,
    category: "Civil Rights",
    title: "Wrongful Termination",
    result: "Landmark Victory",
    description:
      "Won precedent-setting case for wrongful termination resulting in policy changes across the industry.",
    value: "Rs. 2 Cr Compensation",
  },
  {
    icon: Heart,
    category: "Family Law",
    title: "Child Custody Case",
    result: "Full Custody",
    description:
      "Secured full custody rights for parent in complex international custody dispute.",
    value: "100% Custody Rights",
  },
  {
    icon: Briefcase,
    category: "Property Dispute",
    title: "Land Acquisition Case",
    result: "Fair Compensation",
    description:
      "Fought against unfair land acquisition and secured 3x the original compensation offered.",
    value: "Rs. 15 Cr Settlement",
  },
  {
    icon: Scale,
    category: "Constitutional Law",
    title: "PIL Victory",
    result: "Policy Change",
    description:
      "Filed and won Public Interest Litigation leading to significant environmental protection measures.",
    value: "State-wide Impact",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="py-20 bg-[#1a2332]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
            — Track Record —
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Notable Cases
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of significant cases that showcase my commitment to justice and excellence in legal practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-[#243044] p-6 border border-[#374151] hover:border-[#c9a962] transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                  <caseItem.icon className="w-6 h-6 text-[#c9a962]" />
                </div>
                <span className="text-xs text-[#c9a962] font-semibold uppercase tracking-wider">
                  {caseItem.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {caseItem.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-400 text-sm font-medium">
                  {caseItem.result}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{caseItem.description}</p>
              <div className="pt-4 border-t border-[#374151]">
                <span className="text-[#c9a962] font-semibold">
                  {caseItem.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

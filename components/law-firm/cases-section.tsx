import { CheckCircle, Scale, Briefcase, Users, Building, Heart, Shield, FileText, GraduationCap } from "lucide-react";
import { sql } from "@/lib/db";

const iconMap: Record<string, any> = {
  shield: Shield,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  scale: Scale,
  users: Users,
  briefcase: Briefcase,
};

async function getCaseResults() {
  try {
    const results = await sql`
      SELECT 
        cr.*, 
        pa.title as practice_area_title,
        pa.icon as practice_area_icon
      FROM case_results cr
      LEFT JOIN practice_areas pa ON cr.practice_area_id = pa.id
      ORDER BY cr.year DESC, cr.created_at DESC
      LIMIT 6
    `;
    return results;
  } catch (error) {
    console.error("Error fetching case results:", error);
    return [];
  }
}

export async function CasesSection() {
  const cases = await getCaseResults();

  if (cases.length === 0) {
    return null; // Don't show section if no cases
  }

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
          {cases.map((caseItem) => {
            const Icon = caseItem.practice_area_icon ? iconMap[caseItem.practice_area_icon] || Scale : Scale;
            
            return (
              <div
                key={caseItem.id}
                className="bg-[#243044] p-6 border border-[#374151] hover:border-[#c9a962] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <span className="text-xs text-[#c9a962] font-semibold uppercase tracking-wider">
                    {caseItem.practice_area_title || "Legal Case"}
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
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{caseItem.description}</p>
                <div className="pt-4 border-t border-[#374151] flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Year: {caseItem.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

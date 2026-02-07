import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export default function SkillCategory({ title, icon: Icon, skills, color }: SkillCategoryProps) {
  const colorClasses: Record<string, { bg: string; border: string; icon: string }> = {
    blue: {
      bg: "bg-linear-to-br from-blue-900 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20",
      border: "border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400"
    },
    purple: {
      bg: "bg-linear-to-br from-purple-900 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/20",
      border: "border-purple-200 dark:border-purple-800",
      icon: "text-purple-600 dark:text-purple-400"
    },
    emerald: {
      bg: "bg-linear-to-br from-emerald-900 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/20",
      border: "border-emerald-200 dark:border-emerald-800",
      icon: "text-emerald-600 dark:text-emerald-400"
    },
    amber: {
      bg: "bg-linear-to-br from-amber-900 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20",
      border: "border-amber-200 dark:border-amber-800",
      icon: "text-amber-600 dark:text-amber-400"
    },
    gray: {
      bg: "bg-linear-to-br from-gray-900 to-gray-50 dark:from-gray-800/20 dark:to-gray-700/20",
      border: "border-gray-200 dark:border-gray-700",
      icon: "text-gray-600 dark:text-gray-400"
    },
  };

  const selectedColor = colorClasses[color] || colorClasses.gray;

  return (
    <div className={`rounded-2xl border ${selectedColor.border} ${selectedColor.bg} p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 ${selectedColor.icon}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
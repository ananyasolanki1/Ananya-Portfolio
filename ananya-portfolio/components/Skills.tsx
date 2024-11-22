import { Badge } from '@/components/ui/badge'

export default function Skills() {
  const skills = [
    "Python", "C", "Java", "MySQL", "Django", "ReactJS", "HTML", "CSS", "JavaScript",
    "Git", "GitHub", "Unity", "AutoCAD", "Adobe Illustrator", "Power BI",
    "Project management", "Graphic designing", "Data analysis"
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  )
}


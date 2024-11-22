import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Projects() {
  const projects = [
    {
      title: "Interpretation of learning levels using Bloom's Taxonomy",
      description: "2nd year project focused on educational assessment.",
      year: "2nd Year"
    },
    {
      title: "E-commerce platform for plant nursery with virtual green space customizer",
      description: "3rd year project combining e-commerce with virtual design.",
      year: "3rd Year"
    }
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


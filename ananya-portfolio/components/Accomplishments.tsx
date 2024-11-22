import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Accomplishments() {
  const accomplishments = [
    {
      title: "Internship at Adani Electricity",
      description: "Customer Call Forecast Modelling in Power BI",
      date: "June 2024 – July 2024"
    },
    {
      title: "ResCon 2024 project competition",
      description: "Plant E-commerce project selected at IIT Bombay",
      date: "Jan 2024"
    },
    {
      title: "3rd prize in InnoQuest project competition",
      description: "For Plant E-commerce project",
      date: "Nov 2023"
    },
    {
      title: "Design head of ACM-DBIT",
      date: "July 2023 – June 2024"
    },
    {
      title: "Second Prize in AR filter making competition",
      date: "March 2023"
    },
    {
      title: "Developed a game for Teknack 2023",
      date: "Dec 2022 – Feb 2023"
    },
    {
      title: "Assistant design head of ACM",
      date: "Sept 2022 – June 2023"
    },
    {
      title: "Passed SC-900 Microsoft exam",
      description: "Score: 832/1000",
      date: "Sept 2022"
    },
    {
      title: "3rd prize in Technical Paper presentation",
      date: "April 2022"
    }
  ]

  return (
    <section id="accomplishments" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Accomplishments</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accomplishments.map((accomplishment, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{accomplishment.title}</CardTitle>
                <CardDescription>{accomplishment.date}</CardDescription>
              </CardHeader>
              {accomplishment.description && (
                <CardContent>
                  <p>{accomplishment.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


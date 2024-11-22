import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/in/ananya-solanki-b56a84245" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ananyasolanki1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:ananya.solanki10@gmail.com" className="text-blue-600 hover:underline">
                Email: ananya.solanki10@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}


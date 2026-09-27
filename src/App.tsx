import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Publications } from './components/Publications'
import { Contact } from './components/Contact'
import { profile } from './content'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Publications />
        <Contact />
      </main>
      <footer className="container footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

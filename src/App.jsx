import Header from "./components/Header"
import Hero from "./sections/Hero"
import Technologies from "./sections/Technologies"
import WorldSkills from "./sections/WorldSkills"
import Team from "./sections/Team"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <WorldSkills />
      <Technologies />   {/* LOGOS E TECNOLOGIAS = impacto rápido */}
      <Team />           {/* confiança humana */}
      <Contact />
    </>
  )
}

  
import { Linkedin, Instagram, MessageCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="
      fixed top-0 w-full z-50
      bg-black/80 backdrop-blur
      border-b border-[#1BC6E8]/20
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-bold text-xl tracking-wide">
          ANX<span className="text-[#1BC6E8]">.</span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
           <a
            href="#portfolio"
            className="hover:text-[#1BC6E8] transition"
          >
            Projetos
          </a>
          <a
            href="#team"
            className="hover:text-[#1BC6E8] transition"
          >
            Nosso time
          </a>
          <a
            href="#worldskills"
            className="hover:text-[#1BC6E8] transition"
          >
            WorldSkills
          </a>
          <a
            href="#contato"
            className="hover:text-[#1BC6E8] transition"
          >
            Contato
          </a>
        </nav>

        {/* REDES */}
        <div className="flex items-center gap-4 text-gray-300">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#1BC6E8] transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-[#1BC6E8] transition"
          >
            <Instagram size={18} />
          </a>

         <a
            href="https://wa.me/5541997143996"
            target="_blank"
            className="hover:text-anx-light transition text-xl"
          >
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
    </header>
  )
}

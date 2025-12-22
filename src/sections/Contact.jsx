import { MessageCircle, Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contato"
      className="
        scroll-mt-24 py-24 px-6
        bg-gradient-to-b from-anx-dark to-black
        text-white
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em{" "}
            <span className="text-anx-light">
              contato
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Quer desenvolver bancadas didáticas, kits WorldSkills,
            provas técnicas ou treinamentos especializados?
            Fale diretamente com a ANX Consultoria.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5541997143996"
            target="_blank"
            className="
              group bg-anx-dark/80
              border border-anx-blue/40
              rounded-2xl p-8
              transition-all duration-300
              hover:border-anx-light
              hover:-translate-y-1
            "
          >
          <h3 className="flex items-center gap-3 text-2xl font-semibold mb-3">
            <i className="bi bi-whatsapp text-anx-light text-2xl" />
            WhatsApp
          </h3>


            <p className="text-gray-300 group-hover:text-white">
              Atendimento rápido para projetos e orçamentos.
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:anxconsultoriaindustrial@gmail.com"
            className="
              group bg-anx-dark/80
              border border-anx-blue/40
              rounded-2xl p-8
              transition-all duration-300
              hover:border-anx-light
              hover:-translate-y-1
            "
          >
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-3">
              <Mail
                size={26}
                className="text-anx-light"
              />
              E-mail
            </h3>

            <p className="text-gray-300 group-hover:text-white">
              Ideal para propostas formais e parcerias.
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/andre-victor-xavier-pires/"
            target="_blank"
            className="
              group bg-anx-dark/80
              border border-anx-blue/40
              rounded-2xl p-8
              transition-all duration-300
              hover:border-anx-light
              hover:-translate-y-1
            "
          >
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-3">
              <Linkedin
                size={26}
                className="text-anx-light"
              />
              LinkedIn
            </h3>

            <p className="text-gray-300 group-hover:text-white">
              Conheça nossos projetos e equipe técnica.
            </p>
          </a>
        </div>

        {/* RODAPÉ */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} ANX Consultoria e Soluções Industriais
        </div>

      </div>
    </section>
  )
}

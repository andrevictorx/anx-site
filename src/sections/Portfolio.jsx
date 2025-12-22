export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 text-white"
      style={{ backgroundColor: "#0A2A43" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-lg text-gray-200">
            Um resumo prático das soluções técnicas, bancadas didáticas,
            projetos de automação e treinamentos desenvolvidos pela ANX
            Consultoria em parceria com indústria e educação técnica.
          </p>
        </div>

        {/* VÍDEO */}
        <div
          className="
            relative w-full max-w-6xl mx-auto
            aspect-video rounded-3xl overflow-hidden
            shadow-2xl mb-16
          "
          style={{
            border: "1px solid rgba(15,76,117,0.6)",
            backgroundColor: "#0A2A43",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/qBUVxkVi33w"
            title="Portfólio ANX Consultoria"
            className="w-full h-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>

        {/* TEXTO DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#1BC6E8" }}
            >
              O que desenvolvemos
            </h3>

            <p className="text-gray-200 mb-4">
              Atuamos no desenvolvimento de soluções técnicas completas para
              automação industrial, educação profissional e competições
              WorldSkills, unindo projeto, execução e metodologia.
            </p>

            <p className="text-gray-300">
              Nossos projetos são baseados em padrões industriais reais,
              priorizando confiabilidade, clareza didática e alto desempenho
              técnico.
            </p>
          </div>

          <div
            className="
              rounded-3xl p-8
              border
            "
            style={{
              backgroundColor: "rgba(10,42,67,0.8)",
              borderColor: "rgba(15,76,117,0.6)",
            }}
          >
            <ul className="space-y-3 text-gray-200">
              <li>• Bancadas didáticas industriais e educacionais</li>
              <li>• Kits de treinamento técnico e WorldSkills</li>
              <li>• Projetos de automação, robótica e CLP</li>
              <li>• Desenvolvimento de provas práticas e simulados técnicos</li>
              <li>• Treinamentos especializados e capacitação técnica</li>
              <li>• Consultoria em padronização e soluções industriais</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

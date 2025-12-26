export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-16 flex items-center overflow-hidden text-white"
      style={{ backgroundColor: "#0A2A43" }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />


      {/* OVERLAY AZUL (legibilidade) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10,42,67,0.6)" }}
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Excelência Técnica em{" "}
          <span
            className="inline-block"
            style={{ color: "#1BC6E8" }}
          >
            Automação
          </span>
        </h1>


          <p className="text-lg mb-8 text-blue-100">
            Instrutores com experiência prática, ex-competidores e treinadores WorldSkills,
            levando qualidade para a indústria e educação técnica.
          </p>

          <div className="flex gap-4">
            <a
              href="#contato"
              className="px-6 py-3 rounded-xl font-semibold transition"
              style={{
                backgroundColor: "#1BC6E8",
                color: "#0A2A43",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#17b2d1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1BC6E8")
              }
            >
              Solicitar Orçamento
            </a>

            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl font-semibold transition border"
              style={{
                borderColor: "#1BC6E8",
                color: "#1BC6E8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1BC6E8"
                e.currentTarget.style.color = "#0A2A43"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = "#1BC6E8"
              }}
            >
              Ver Projetos
            </a>
          </div>
        </div>

      

      </div>
    </section>
  )
}
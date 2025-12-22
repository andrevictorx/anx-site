export default function Technologies() {
  const items = [
    "CLPs Siemens", "CLPs WEG", "CLPs Mitsubishi",
    "Robôs KUKA", "Robôs OMRON", "Robôs YASKAWA",
    "KEBA Automation", "Instrumentação MINIPA",
    "Sistemas Supervisórios",
    "Node-RED", "Redes Industriais",
    "Eletrônica Analógica e Digital"
  ]

  return (
    <section
      className="
        scroll-mt-20 py-24
        bg-gradient-to-b from-anx-dark to-black
        text-white border-t border-anx-light/20
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Tecnologias &{" "}
          <span className="text-anx-light">
            Plataformas
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-anx-dark/80
                border border-anx-blue/40
                rounded-2xl px-4 py-6
                text-center text-sm font-medium
                text-gray-200
                transition-all duration-300
                hover:border-anx-light
                hover:text-anx-light
                hover:-translate-y-1
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* TEXTO */}
        <p className="text-gray-400 text-sm mt-10 max-w-4xl leading-relaxed">
          Atuamos com tecnologias amplamente utilizadas na indústria nacional
          e internacional, aplicando boas práticas de automação, segurança,
          padronização e excelência técnica.
        </p>

      </div>
    </section>
  )
}

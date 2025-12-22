export default function WorldSkills() {
  return (
    <section
      id="worldskills"
      className="
        py-24
        bg-gradient-to-b
        from-[#050B12]
        via-[#081A2B]
        to-[#0A2A43]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4FA3E3]">
            Soluções WorldSkills
          </h2>
          <p className="text-blue-200/80 text-lg">
            Desenvolvemos kits, bancadas didáticas e provas técnicas alinhadas
            aos padrões nacionais e internacionais da WorldSkills, com foco
            em desempenho, confiabilidade e avaliação justa.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            className="
              bg-[#071726]
              border border-[#0F4C81]/40
              rounded-3xl p-8
              hover:border-[#4FA3E3]
              hover:shadow-[0_0_40px_rgba(79,163,227,0.15)]
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-[#4FA3E3]">
              Kits de Treinamento WorldSkills
            </h3>
            <p className="text-blue-200/70 mb-6">
              Kits modulares para treinamento técnico em mecatrônica,
              automação, pneumática, sensores, CLP e integração de sistemas.
            </p>
            <ul className="text-sm text-blue-200/80 space-y-2">
              <li>• Modular e expansível</li>
              <li>• Componentes industriais reais</li>
              <li>• Ideal para treinamento intensivo</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-[#071726]
              border border-[#0F4C81]/40
              rounded-3xl p-8
              hover:border-[#4FA3E3]
              hover:shadow-[0_0_40px_rgba(79,163,227,0.15)]
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-[#4FA3E3]">
              Provas e Simulados Técnicos
            </h3>
            <p className="text-blue-200/70 mb-6">
              Elaboração de provas práticas e simulados completos seguindo
              critérios de avaliação WorldSkills, cronograma e escopo técnico.
            </p>
            <ul className="text-sm text-blue-200/80 space-y-2">
              <li>• Critérios claros de pontuação</li>
              <li>• Nível regional, nacional e internacional</li>
              <li>• Documentação técnica completa</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-[#071726]
              border border-[#0F4C81]/40
              rounded-3xl p-8
              hover:border-[#4FA3E3]
              hover:shadow-[0_0_40px_rgba(79,163,227,0.15)]
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-[#4FA3E3]">
              Bancadas Didáticas Profissionais
            </h3>
            <p className="text-blue-200/70 mb-6">
              Bancadas robustas e industriais para treinamento, provas e
              competições, projetadas para repetibilidade e segurança.
            </p>
            <ul className="text-sm text-blue-200/80 space-y-2">
              <li>• Estrutura industrial</li>
              <li>• Layout otimizado para competição</li>
              <li>• Prontas para customização</li>
            </ul>
          </div>
        </div>

        {/* BLOCO DE AUTORIDADE */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#4FA3E3]">
              Experiência real em competições
            </h3>
            <p className="text-blue-200/80 mb-6">
              Nossa equipe atua diretamente como competidores, avaliadores e
              treinadores WorldSkills, com experiência prática em provas,
              treinamentos intensivos e preparação de alto desempenho.
            </p>
            <p className="text-blue-300/60 text-sm">
              Não vendemos apenas equipamentos — entregamos metodologia,
              padrão técnico e confiabilidade.
            </p>
          </div>

          <div
            className="
              bg-[#071726]
              border border-[#0F4C81]/40
              rounded-3xl p-6
              text-sm text-blue-200/80
            "
          >
            <p className="mb-2">✔ Experiência como competidores</p>
            <p className="mb-2">✔ Experiência como avaliadores</p>
            <p className="mb-2">✔ Treinadores WorldSkills</p>
            <p className="mb-2">✔ Integração com robótica, CLP e mecatrônica</p>
          </div>
        </div>

      </div>
    </section>
  )
}

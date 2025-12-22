export default function Team() {
  const members = [
    {
      name: "André Victor Xavier Pires",
      photo: "/team/andre.jpg",
      description:
        "Atua há mais de 5 anos no desenvolvimento de soluções técnicas e formação profissional. Técnico em Mecânica (IFPR) e Mecatrônica (SENAI), graduando em Engenharia Elétrica (UFPR) com experiência em desenvolvimento de hardware, eletrônica aplicada e sistemas embarcados.",
    },
    {
      name: "Patrick Henrique de Souza Pereira",
      photo: "/team/patrick.jpg",
      description:
        "Treinador e avaliador WorldSkills em Sistemas Robóticos Integrados em nível nacional. Instrutor na formação profissional em Ciber Sistemas e Manufatura Avançada. Técnico em Mecatrônica e Mecânica Automotiva pelo SENAI, graduando em Engenharia Elétrica (UFPR).",
    },
    {
      name: "Lucas Trinoski",
      photo: "/team/lucas.jpg",
      description:
        "Instrutor técnico no SENAI desde 2018, treinador e avaliador WorldSkills, com forte experiência em padronização de provas, treinamento técnico e alto desempenho. Técnico em Mecatrônica e Informática, competidor WorldSkills 2017 na modalidade Mecatrônica.",
    },
  ]

  return (
    <section
      id="team"
      className="
        scroll-mt-40
        py-32
        bg-gradient-to-b from-anx-dark to-black
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Nosso <span className="text-anx-light">Time</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Especialistas com atuação direta em indústria, educação técnica e
            competições WorldSkills, entregando soluções com padrão internacional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="
                bg-anx-dark/80
                border border-anx-blue/40
                rounded-3xl overflow-hidden
                shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-anx-light
              "
            >
              {/* FOTO */}
              <div className="h-80 w-full overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTEÚDO */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-anx-light">
                  {member.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

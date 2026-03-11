export default function EventDescription() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição do evento</h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Roof – 5 Voltas ao Sol | 16 de Maio</h3>
            <p>
              No dia 16 de Maio, os quatro elementos nos chamam para o primeiro ritual do ano.
            </p>
            <p>
              Em meio à natureza, onde a dança é ritual e a música é linguagem sagrada, vivemos a primeira experiência da The Roof em 2026.
            </p>
          </div>

          <div className="border-t pt-4">
            <p>
              É o inicio de um ciclo.
            </p>
            <p>
              A primeira de 2026.
            </p>
            <p>
              Depois disso, Belo Horizonte acordará — até que um novo ano desperte o chamado.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">O Local - ESPAÇO SOLARIS, Nova Lima</h3>

        <div className="space-y-4 text-gray-700">
          <p>
            Localizado em Nova Lima, a apenas 20 minutos do BH Shopping, você será transportado para um verdadeiro paraíso natural.
            Entre árvores e montanhas, vive-se uma experiência ao ar livre, com cenografia mística, temática de Tulum e o equilíbrio perfeito entre
            natureza, sofisticação e arte.
          </p>
          <p>
            Em um ambiente cercado de energia, com performances ao vivo, decoração rústica e experiências sensoriais, o universo The Roof se
            revela em sua forma mais intensa.
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">A Música</h3>

        <div className="space-y-4 text-gray-700">
          <p>A curadoria musical da The Roof sempre foi pensada para surpreender.</p>
          <p>
            E nesta edição especial, pela <span className="font-bold">primeira vez na história do projeto</span>, teremos uma{' '}
            <span className="font-bold">atração internacional</span> no line-up.
          </p>
          <p>
            O Afro House, o Organic e o House serão novamente os guias sonoros deste ritual inesquecível.
          </p>

          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-3">LINE UP:</h4>
            <ul className="space-y-1 font-semibold">
              <li>TIM ENGELHARDT (SCENARIOS)</li>
              <li>TATO</li>
              <li>CAMILA JUN</li>
              <li>OCER</li>
              <li>CACTUNES</li>
              <li>DZKO x FIGUEIREDO</li>
              <li>THEUSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Os Quatro Elementos da Experiência</h3>

        <div className="space-y-4 text-gray-700">
          <p>
            A The Roof é inspirada nos quatro elementos da natureza — Água, Fogo, Terra e Ar.
          </p>
          <p>
            E neste último encontro de 2025, <span className="font-bold">todos os elementos se unem</span> em um chamado único.
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência Premium – Backstage</h3>

        <div className="space-y-4 text-gray-700">
          <p>Eleve sua vivência com o nosso Backstage, que oferece:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Vista privilegiada, bem próximo ao DJ</li>
            <li>Banheiro exclusivo</li>
            <li>Atendimento diferenciado</li>
            <li>Bar exclusivo</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

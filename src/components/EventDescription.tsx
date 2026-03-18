export default function EventDescription() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição do evento</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            Mais um capítulo da Fabric está prestes a ser escrito
          </p>
          <p>
            E dessa vez artbat estarão no comando da pista da Fabric no dia 06 de junho em Porto Alegre.
          </p>
          <p>
            Inovação sonora, energia industrial e uma experiência única que só quem vai SENTE.
          </p>
          <p>
            Nossa próxima edição já tem data e hora marcada, e o local escolhido para realizar mais uma Fabric histórica será o Ferro Velho, localizado na zona industrial de Porto Alegre.
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência Premium – Back King</h3>

        <div className="space-y-4 text-gray-700">
          <p>Eleve sua vivência com o nosso Back King, que oferece:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Área premium exclusiva em cima do palco</li>
            <li>Acesso a pista e backstage</li>
            <li>OPEN BAR + FOOD</li>
            <li>Banheiro exclusivo</li>
            <li>Bar exclusivo</li>
            <li>Lounge de descanso</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

import * as Collapsible from '@radix-ui/react-collapsible'
import { useAtom } from 'jotai'
import { isSidebarOpenAtom } from './atoms/is-sidebar-open'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import { ToC } from './components/ToC'
import './styles/global.css'

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom)

  return (
    <Collapsible.Root
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
      asChild
    >
      <div className="h-screen w-screen bg-rotion-900 text-gray-100 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col max-h-screen">
          <Header />

          <section
            id="content"
            className="flex-1 py-8 px-10 flex gap-8 overflow-y-auto scrollbar-thin scrollbar-thumb-rotion-600 scrollbar-track-rotion-800"
          >
            <aside className="hidden lg:block">
              <strong className="text-rotion-300 uppercase text-xs font-semibold">
                TABLE OF CONTENTS
              </strong>

              <ToC.Root>
                <ToC.Link>Arquitetura back-end</ToC.Link>
                <ToC.Section>
                  <ToC.Link>Banco de dados</ToC.Link>
                  <ToC.Link>Mensageria</ToC.Link>
                </ToC.Section>
                <ToC.Link>Tecnologias</ToC.Link>
                <ToC.Section>
                  <ToC.Link>Nest.js</ToC.Link>
                  <ToC.Link>GraphQL</ToC.Link>
                  <ToC.Link>Prisma</ToC.Link>
                  <ToC.Link>Apache Kafka</ToC.Link>
                </ToC.Section>
                <ToC.Link>Estrutura do código</ToC.Link>
                <ToC.Section>
                  <ToC.Link>Fundamentos</ToC.Link>
                  <ToC.Section>
                    <ToC.Link>Inversão de dependência</ToC.Link>
                    <ToC.Link>Injeção de dependências</ToC.Link>
                    <ToC.Link>Domínio</ToC.Link>
                    <ToC.Link>Entities</ToC.Link>
                    <ToC.Link>Value Objets</ToC.Link>
                    <ToC.Link>AggregateRoots</ToC.Link>
                    <ToC.Link>Eventos de domínio</ToC.Link>
                    <ToC.Link>Watched Lists</ToC.Link>
                  </ToC.Section>
                </ToC.Section>
              </ToC.Root>
            </aside>

            <main className="flex-1 leading-relaxed flex flex-col gap-6">
              <h1 className="font-bold text-3xl">Arquitetura back-end</h1>
              <div className="bg-cyan-300/10 border-l-8 border-cyan-300 py-4 px-6 rounded">
                Esse documento tem como objetivo apresentar detalhadamente a
                estrutura utilizada na construção das aplicações back-end na
                Rocketseat incluindo framework, arquitetura e exemplos de
                implementação.
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Geral</h2>
                <p>
                  As aplicações na Rocketseat são construídas em serviços
                  desacoplados, especializados, independentes e que se
                  comunicam, na maior parte das vezes
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Banco de dados</h2>
                <p>
                  Cada serviço deve possuir tudo que for necessário pra
                  funcionar de forma independente, ou seja, caso qualquer outro
                  serviço saia do ar, isso não deve afetar seu funcionamento.
                </p>
                <p>
                  Para garantir que isso seja possível, cada serviço possui seu
                  banco de dados isolado e mantém TODAS informações necessárias
                  para funcionar, isto é, caso um serviço dependa de informações
                  originadas de outra aplicação, essas informações devem estar
                  replicadas em ambos bancos de dados.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Mensageria</h2>
                <p>
                  Para garantir que os serviços não dependam entre si, na
                  maioria das vezes, utilizamos de mensageria assíncrona para
                  comunicação entre os mesmos.
                </p>
                <p>
                  Exemplo: Se uma aplicação (Serviço A) precisa enviar um e-mail
                  ao usuário ao se cadastrar na plataforma e o envio é feito por
                  outro serviço (Serviço B), então, após realizar o cadastro, o
                  Serviço A envia uma mensagem contendo os dados necessários
                  para envio do e-mail para o Serviço B.
                </p>
                <p>
                  O Serviço B não precisa consumir instantaneamente essa
                  mensagem já que a mesma é armazenada em um banco de dados e
                  consumida assim que possível.
                </p>
              </div>

              <div className="h-8 flex-shrink-0"></div>
            </main>
          </section>
        </div>
      </div>
    </Collapsible.Root>
  )
}

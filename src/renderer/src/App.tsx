import * as Collapsible from '@radix-ui/react-collapsible'
import { useAtom } from 'jotai'
import { isSidebarOpenAtom } from './atoms/is-sidebar-open'
import { Editor } from './components/Editor'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import { ToC } from './components/ToC'
import './styles/global.css'

export function App() {
  const [, setIsSidebarOpen] = useAtom(isSidebarOpenAtom)

  return (
    <Collapsible.Root
      defaultOpen={true}
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

            <main className="flex-1 leading-relaxed flex flex-col items-center gap-6">
              <Editor />
            </main>
          </section>
        </div>
      </div>
    </Collapsible.Root>
  )
}

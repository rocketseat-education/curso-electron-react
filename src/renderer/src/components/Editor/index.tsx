import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    editorProps: {
      attributes: {
        class:
          'prose prose-invert prose-headings:mt-0 focus:outline-none pb-40',
      },
    },
    content: `
      <h1>Arquitetura back-end</h1>
      <blockquote>Esse documento tem como objetivo apresentar detalhadamente a estrutura
      utilizada na construção das aplicações back-end na Rocketseat incluindo
      framework, arquitetura e exemplos de implementação.</blockquote>

      <h2>Geral</h2>
      <p>
        As aplicações na Rocketseat são construídas em serviços desacoplados,
        especializados, independentes e que se comunicam, na maior parte das
        vezes
      </p>

      <h2>Banco de dados</h2>
      <p>
        Cada serviço deve possuir tudo que for necessário pra funcionar de
        forma independente, ou seja, caso qualquer outro serviço saia do ar,
        isso não deve afetar seu funcionamento.
      </p>
      <p>
        Para garantir que isso seja possível, cada serviço possui seu banco de
        dados isolado e mantém TODAS informações necessárias para funcionar,
        isto é, caso um serviço dependa de informações originadas de outra
        aplicação, essas informações devem estar replicadas em ambos bancos de
        dados.
      </p>

      <h2>Mensageria</h2>
      <p>
        Para garantir que os serviços não dependam entre si, na maioria das
        vezes, utilizamos de mensageria assíncrona para comunicação entre os
        mesmos.
      </p>
      <p>
        Exemplo: Se uma aplicação (Serviço A) precisa enviar um e-mail ao
        usuário ao se cadastrar na plataforma e o envio é feito por outro
        serviço (Serviço B), então, após realizar o cadastro, o Serviço A
        envia uma mensagem contendo os dados necessários para envio do e-mail
        para o Serviço B.
      </p>
      <p>
        O Serviço B não precisa consumir instantaneamente essa mensagem já que
        a mesma é armazenada em um banco de dados e consumida assim que
        possível.
      </p>
      <p></p>
    `,
  })

  return <EditorContent editor={editor} />
}

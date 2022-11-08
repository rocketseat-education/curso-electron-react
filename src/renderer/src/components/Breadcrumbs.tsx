import { Code } from 'phosphor-react'

export function Breadcrumbs() {
  return (
    <div className="inline-flex gap-2 text-sm text-gray-200 items-center">
      <span className="inline-flex items-center gap-2">
        <Code weight="bold" className="h-4 w-4 text-pink-500" />
        Estrutura técnica
      </span>
      <span className="text-rotion-500">/</span>
      <span>...</span>
      <span className="text-rotion-500">/</span>
      <span>Back-end</span>
      <span className="text-rotion-500">/</span>
      <span className="text-gray-50">Github Actions</span>
    </div>
  )
}

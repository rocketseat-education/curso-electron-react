import clsx from 'clsx'
import { DotsThree } from 'phosphor-react'
import { ReactNode } from 'react'

interface LinkProps {
  children: ReactNode
}

export function Link({ children }: LinkProps) {
  return (
    <a
      href="#"
      className={clsx(
        'flex items-center text-sm gap-2 text-rotion-100 hover:text-rotion-50 py-1 px-3 rounded group hover:bg-rotion-700',
      )}
    >
      <span className="truncate flex-1">{children}</span>

      <div className="flex items-center h-full group-hover:visible ml-auto text-rotion-100">
        <button className="px-px rounded-sm hover:bg-rotion-500">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </a>
  )
}

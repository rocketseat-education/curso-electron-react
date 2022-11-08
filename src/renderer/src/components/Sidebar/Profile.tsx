import { CaretDown } from 'phosphor-react'

export function Profile() {
  return (
    <button className="text-rotion-50 flex mx-5 items-center gap-2 text-sm font-medium group">
      <img
        className="h-5 w-5 rounded-sm"
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt=""
      />
      Diego Fernandes
      <CaretDown className="w-4 h-4 text-rotion-100 group-hover:text-rotion-50" />
    </button>
  )
}

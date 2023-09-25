import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/lfeliperibeiro.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Felipe Ribeiro
        </span>
        <span className="truncate text-sm text-zinc-500">
          piporibeiro@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-sm p-2 hover:bg-zinc-50">
        <LogOut className="w-05 h-5 text-zinc-500" />
      </button>
    </div>
  )
}

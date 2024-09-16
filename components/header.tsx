import { ChevronLeft } from '@/icons'
import Link from 'next/link'

type HeaderProps = {
  title: string
  back?: boolean
}

export const Header = ({ title, back }: HeaderProps) => (
  <header className="h-14 bg-white flex justify-center items-center border-b-[1px] border-slate-150 fixed top-0 w-full z-10 shadow-sm">
    <h3>{title}</h3>
    {back && (
      <Link
        href="/"
        className="absolute top-3 left-2 p-1 hover:bg-background rounded-full"
      >
        <ChevronLeft />
      </Link>
    )}
  </header>
)

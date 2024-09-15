type HeaderProps = {
  title: string
  back?: boolean
}

export const Header = ({ title }: HeaderProps) => (
  <header className="h-14 bg-white flex justify-center items-center border-b-[1px] border-slate-150 fixed top-0 w-full z-10">
    <h3>{title}</h3>
  </header>
)

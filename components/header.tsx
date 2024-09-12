type HeaderProps = {
  title: string
  back?: boolean
}

export const Header = ({ title }: HeaderProps) => (
  <header className="h-14 bg-white flex justify-center items-center border-b-[1px] border-slate-150 sticky top-0">
    <h3>{title}</h3>
  </header>
)

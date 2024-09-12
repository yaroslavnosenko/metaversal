import Image from 'next/image'

export const ProfileMinCard = () => {
  return (
    <div className="card p-4 flex items-center gap-3">
      <Image
        className="avatar"
        src="/avatar.png"
        alt="avatar"
        width="40"
        height="40"
      />
      <div className="flex-1 min-w-0 flex-col gap-1">
        <h4 className="sm:truncate">Kathryn Murphy Longer Name</h4>
        <p className="small">@emilys</p>
      </div>
    </div>
  )
}

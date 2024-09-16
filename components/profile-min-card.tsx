import { User } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

type ProfileMinCardProps = {
  user: User
}

export const ProfileMinCard = ({
  user: { id, firstName, lastName, username },
}: ProfileMinCardProps) => {
  return (
    <div className="card p-4 flex items-center gap-3 shadow-sm">
      <Link href={'/' + id}>
        <Image
          className="avatar"
          src="/avatar.png"
          alt="avatar"
          width="40"
          height="40"
        />
      </Link>
      <div className="flex-1 min-w-0 flex-col gap-1">
        <Link href={'/' + id}>
          <h4 className="sm:truncate hover:underline">
            {firstName} {lastName}
          </h4>
        </Link>
        <p className="small">@{username}</p>
      </div>
      <button className="btn-outline">Follow</button>
    </div>
  )
}

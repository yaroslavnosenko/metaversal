import { Share, Thumb, Views } from '@/icons'
import { Post, User } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

type PostCardProps = {
  post: Post
  user: User
}

export const PostCard = ({
  post: {
    body,
    views,
    reactions: { dislikes, likes },
    tags,
  },
  user: { id, firstName, lastName, username },
}: PostCardProps) => (
  <article className="card">
    <div className="p-4 flex gap-3">
      <div className="min-w-10">
        <Link href={'/' + id}>
          <Image
            className="avatar"
            src="/avatar.png"
            alt="avatar"
            width="40"
            height="40"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="py-1 flex flex-col gap-1">
          <Link href={'/' + id}>
            <h4 className="hover:underline cursor-pointer">
              {firstName} {lastName}
            </h4>
          </Link>
          <p className="small">@{username}</p>
        </div>
        <p className="medium">{body}</p>
        <div className="flex flex-wrap gap-3 text-accent">
          {tags.map((tag, idx) => (
            <p key={idx} className="small">
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="p-4 border-t-[1px] border-border flex gap-6">
      <div className="flex items-center gap-1">
        <Thumb />
        <p className="medium">{likes}</p>
      </div>
      <div className="flex items-center gap-1">
        <Share />
        <p className="medium">{dislikes}</p>
      </div>
      <div className="flex items-center gap-1">
        <Views />
        <p className="medium">{views}</p>
      </div>
    </div>
  </article>
)

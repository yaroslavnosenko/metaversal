import { Share, Thumb, Views } from '@/icons'
import Image from 'next/image'

export const PostCard = () => (
  <article className="card">
    <div className="p-4 flex gap-3">
      <Image
        className="avatar"
        src="/avatar.png"
        alt="avatar"
        width="40"
        height="40"
      />
      <div className="grid grid-cols-1 gap-3">
        <div className="py-1 flex flex-col gap-1">
          <h4 className="hover:underline underline-offset-2 cursor-pointer">
            Albert Flores Longer Name Unlikely But Can Wrap
          </h4>
          <p className="small">@emilys</p>
        </div>
        <p className="medium">
          Post body lorem ipsum dolor sit amet consectetur. Sem vestibulum massa
          lacus interdum enim fringilla.
        </p>
        <div className="flex flex-wrap gap-3 text-accent">
          <p className="small">#tag</p>
          <p className="small">#tag</p>
        </div>
      </div>
    </div>
    <div className="p-4 border-t-[1px] border-border flex gap-6">
      <div className="flex items-center gap-1">
        <Thumb />
        <p className="medium">20</p>
      </div>
      <div className="flex items-center gap-1">
        <Share />
        <p className="medium">24</p>
      </div>
      <div className="flex items-center gap-1">
        <Views />
        <p className="medium">999</p>
      </div>
    </div>
  </article>
)

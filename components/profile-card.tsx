import { Map } from '@/icons'
import Image from 'next/image'

export const ProfileCard = () => (
  <div className="relative mt-10 sm:mt-0">
    <div className="card !rounded-b-none !border-b-0 h-16 bg-gradient-to-r from-[#ECE9FB] to-[#FDEDE7]" />
    <div className="card !rounded-none !border-t-0 p-6 pt-12 sm:pt-6 sm:pl-[170px]">
      <h1 className="mb-2 text-center sm:text-left">Emily Johnson</h1>
      <div className="flex flex-col gap-3 items-center sm:items-start">
        <div className="flex flex-col gap-3 items-center sm:items-start sm:flex-row">
          <p>@emilys</p>
          <p className="flex items-center gap-1">
            <Map width="16" height="16" />
            New York, United States
          </p>
        </div>
        <div className="bg-[#E5F4FF] py-1.5 px-3 rounded-full">
          <h4 className="text-[#0077CC]">Engineering</h4>
        </div>
      </div>
      <div className="pt-6 flex text-center justify-center gap-6 sm:text-left sm:justify-start">
        <div>
          <h2 className="mb-0.5">24</h2>
          <p className="small">POSTS</p>
        </div>
        <div>
          <h2 className="mb-0.5">532</h2>
          <p className="small">LIKES</p>
        </div>
      </div>
    </div>
    <div className="card !rounded-t-none !border-t-0 px-6 py-4 flex gap-4 justify-center sm:justify-start bg-gradient-to-b from-white to-[#FFFAF5] border-[#F1F3F4]">
      <button className="btn-solid">Follow</button>
      <button className="btn-outline">Message</button>
    </div>
    <div className="absolute top-[-35px] flex justify-center w-full sm:left-[19px] sm:w-[130px] sm:top-[35px]">
      <Image
        className="h-30 w-30 rounded-full border-[5px] border-white box-content"
        src="/avatar.png"
        alt="avatar"
        width="120"
        height="120"
      />
    </div>
  </div>
)

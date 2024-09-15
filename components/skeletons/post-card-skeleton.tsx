export const PostCardSkeleton = () => {
  return (
    <div className="card">
      <div className="flex p-4 gap-4">
        <div className="skeleton w-10 h-10" />
        <div>
          <div className="skeleton w-[157px] h-4 mt-1" />
          <div className="skeleton w-[74px] h-[14px] my-1" />

          <div className="skeleton w-[227px] h-[14px] mt-3" />
          <div className="skeleton w-[178px] h-[14px] mt-1.5" />
          <div className="flex gap-3 mt-3">
            <div className="skeleton w-10 h-[14px]" />
            <div className="skeleton w-10 h-[14px]" />
            <div className="skeleton w-10 h-[14px]" />
          </div>
        </div>
      </div>
      <div className="border-t flex p-4 gap-6">
        <div className="skeleton w-[40px] h-[18px]" />
        <div className="skeleton w-[40px] h-[18px]" />
        <div className="skeleton w-[40px] h-[18px]" />
      </div>
    </div>
  )
}

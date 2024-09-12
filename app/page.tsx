import { Header, PostCard, ProfileMinCard } from '@/components'

export default function Feed() {
  return (
    <>
      <Header title="Feed" />
      <main>
        <section>
          <h2 className="text-black">Suggested posts</h2>
          <PostCard />
          <PostCard />
        </section>
        <section>
          <h2 className="text-black">Who to follow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <ProfileMinCard />
            <ProfileMinCard />
            <ProfileMinCard />
            <ProfileMinCard />
          </div>
        </section>
        <section>
          <h2 className="text-black">Recent</h2>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </main>
    </>
  )
}

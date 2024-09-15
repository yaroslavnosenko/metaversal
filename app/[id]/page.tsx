import { Header, PostCard, ProfileCard } from '@/components'

export default function Profile() {
  return (
    <>
      <Header title="Profile" />
      <main>
        <section>
          <ProfileCard />
        </section>
        <section>
          <h2 className="text-black">Recent</h2>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </main>
    </>
  )
}

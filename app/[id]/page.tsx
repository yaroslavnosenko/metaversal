// SSR

import { Header, PostCard, ProfileCard } from '@/components'
import { Post, User } from '@/types'

type PageProps = {
  params: { id: string }
}

export default async function ProfilePage({ params: { id } }: PageProps) {
  const profile: User = await fetch('https://dummyjson.com/users/' + id).then(
    (res) => res.json()
  )

  const { posts }: { posts: Post[] } = await fetch(
    'https://dummyjson.com/posts/user/' + id
  ).then((res) => res.json())

  const postCounts = posts.length
  const likesCount = posts
    .map((post) => post.reactions.likes)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <>
      <Header title="Profile" />
      <main>
        <section>
          <ProfileCard
            likesCount={likesCount}
            postsCount={postCounts}
            profile={profile}
          />
        </section>
        <section>
          <h2 className="text-black">Recent</h2>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} user={profile} />
          ))}
        </section>
      </main>
    </>
  )
}

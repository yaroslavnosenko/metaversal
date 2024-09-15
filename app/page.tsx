'use client'

import { Error, Header, PostCard, ProfileMinCard } from '@/components'
import { useFollow, useRecent, useSuggested } from '@/hooks'

export default function FeedPage() {
  const {
    data: suggested,
    error: suggestedError,
    isLoading: suggestedLoading,
  } = useSuggested()
  const {
    data: follow,
    isLoading: followLoading,
    error: followError,
  } = useFollow()
  const {
    data: recent,
    isLoading: recentLoading,
    error: recentError,
  } = useRecent()

  return (
    <>
      <Header title="Feed" />
      <main>
        <section>
          <h2 className="text-black">Suggested posts</h2>
          {!suggestedLoading &&
            suggested &&
            suggested.map(([post, user]) => (
              <PostCard key={post.id} post={post} user={user} />
            ))}
          {!suggestedLoading && suggestedError && (
            <Error message="Error loading posts" />
          )}
        </section>
        <section>
          <h2 className="text-black">Who to follow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {!followLoading &&
              follow &&
              follow.map((user) => (
                <ProfileMinCard key={user.id} user={user} />
              ))}
            {!followLoading && followError && (
              <div className="col-span-2">
                <Error message="Error loading users" />
              </div>
            )}
          </div>
        </section>
        <section>
          <h2 className="text-black">Recent</h2>
          {!recentLoading &&
            recent &&
            recent.map(([post, user]) => (
              <PostCard key={user.id} user={user} post={post} />
            ))}
          {!recentLoading && recentError && (
            <Error message="Error loading posts" />
          )}
        </section>
      </main>
    </>
  )
}

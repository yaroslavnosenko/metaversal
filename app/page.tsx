'use client'

import { Error, Header, PostCard, ProfileMinCard } from '@/components'
import { PostCardSkeleton, ProfileMinSkeleton } from '@/components/skeletons'
import { useFollow, useRecent, useScroll, useSuggested } from '@/hooks'

const RECENT_LIMIT = 3

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
    next,
  } = useRecent(RECENT_LIMIT)

  useScroll(100, () => {
    if (!recentLoading) next()
  })

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
          {suggestedLoading && (
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
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
              <div className="sm:col-span-2">
                <Error message="Error loading users" />
              </div>
            )}
            {followLoading && (
              <>
                <ProfileMinSkeleton />
                <ProfileMinSkeleton />
                <ProfileMinSkeleton />
                <ProfileMinSkeleton />
              </>
            )}
          </div>
        </section>
        <section>
          <h2 className="text-black">Recent</h2>
          {recent &&
            recent.map(([post, user]) => (
              <PostCard key={post.id} user={user} post={post} />
            ))}
          {!recentLoading && recentError && (
            <Error message="Error loading posts" />
          )}
          {recentLoading && (
            <>
              {new Array(RECENT_LIMIT).fill(null).map((_, idx) => (
                <PostCardSkeleton key={idx} />
              ))}
            </>
          )}
        </section>
      </main>
    </>
  )
}

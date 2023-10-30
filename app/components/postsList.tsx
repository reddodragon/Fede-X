import PostCard from './postCard'
import { type Post } from '@/app/types/posts'

export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
    <>
    {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}

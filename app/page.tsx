import { AuthButtonServer } from '@/app/components/authButtonServer'
import { PostLists } from '@/app/components/postsList'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { type Database } from './types/database'
import { ComposePost } from './components/composePost'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(user_name, avatar_url)')
    .order('created_at', { ascending: false })
  return (
    <div className=' min-h-screen flex-col items-center justify-between'>
        <AuthButtonServer  />
        <section className='max-w-[800px] w-full mx-auto border-l border-r border-white/30 min-h-screen'>
          <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url}/>
          <PostLists posts={posts}/>
        </section>

    </div>
  )
}

'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

export default function PostCard ({ userName, avatarUrl, content }: { userName: string, avatarUrl: string, content: string }) {
  return (
    <Card className="bg-transparrent shadow-none hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-4">
            <Link href={`/${userName}}`}>
                <Avatar radius="full" size="md" src={avatarUrl}/>

            </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button className='h-5 w-5'>
            <IconMessageCircle className='h-4 w-4'/>
        </button>
        <button >
            <IconHeart className='h-4 w-4'/>
        </button>
        <button>
            <IconRepeat className='h-4 w-4'/>
        </button>
      </CardFooter>
    </Card>
  )
}

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Info } from 'lucide-react'
import Link from 'next/link'

export default function ImageCard({ title, image, description }: { title: string, image: string, description: string }) {
  return (
    <Card className='shadow-lg p-0 h-[584px] max-sm:h-[400px]'>
        <CardHeader className='bg-black py-2 px-4 rounded-t-xl text-center flex items-center justify-center gap-8 max-sm:p-2'>
                <CardTitle className='text-white text-lg font-semibold max-sm:text-sm'>
                    {title}

            </CardTitle>
            <Info className='text-white w-6 h-6 max-sm:w-4 max-sm:h-4' />
        </CardHeader>
        <CardContent className='p-0'>
            <p className='text-sm px-2 text-black mb-4 max-sm:text-xs'><span className='font-semibold'>Description:</span> {description}</p>
            <Link href="https://www.youtube.com/watch?v=0Xr-4PfKVSk" target='_blank'>
            <Image src={image} alt={title} width={2000} height={2000} className='w-full h-full object-cover' />
            </Link>
        </CardContent>
    </Card>
  )
}

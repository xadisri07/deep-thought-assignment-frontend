import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Info } from 'lucide-react'
import { getAssetByContentType } from '@/constants/data'

export default function ImageCard() {
  const videoAsset = getAssetByContentType('video');
  
  if (!videoAsset) return null;

  // Extract YouTube video ID from embed URL
  const videoUrl = videoAsset.asset_content.trim();
  const embedUrl = videoUrl || "https://www.youtube.com/embed/TiMRwri1xJ8";
  
  return (
    <Card className='shadow-lg p-0 h-[584px] max-sm:h-[400px] flex flex-col'>
        <CardHeader className='bg-black py-2 px-4 rounded-t-xl text-center flex items-center justify-center gap-8 max-sm:p-2'>
                <CardTitle className='text-white text-lg font-semibold max-sm:text-sm'>
                    {videoAsset.asset_title}
            </CardTitle>
            <Info className='text-white w-6 h-6 max-sm:w-4 max-sm:h-4' />
        </CardHeader>
        <CardContent className='p-0 flex-1 flex flex-col'>
            <p className='text-sm px-2 text-black mb-4 max-sm:text-xs whitespace-pre-line'>
              <span className='font-semibold'>Description:</span> {videoAsset.asset_description.replace(/\r\n/g, ' ').trim()}
            </p>
            <div className='flex-1 w-full'>
              <iframe
                src={embedUrl}
                className='w-full h-full min-h-[400px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videoAsset.asset_title}
              />
            </div>
        </CardContent>
    </Card>
  )
}

import Image from 'next/image'
import React from 'react'
import { POSTS_CONST } from '../../libs/constants'

export interface IResultCard {
  candidate: any
}

const ResultCard = ({ candidate }: IResultCard) => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-7 overflow-hidden bg-gradient-to-tr from-slate-100 to-primary/10 p-5 text-center shadow-lg">
      <div className="relative h-full w-full">
        <div className="absolute top-0 right-0 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full opacity-10">
          <Image
            src={`/images/logo.png`}
            layout="fill"
            objectFit="cover"
            alt={`${candidate.name} image`}
          />
        </div>
      </div>
      <div className="z-[20] flex flex-col items-center justify-center space-y-3">
        <h4 className="text-xl font-bold">{candidate.name}</h4>
        <h1 className="text-xl font-bold text-primary">
          {candidate.nick_name}
        </h1>
        {/* <p className="text-xs text-gray-400">{candidate.department}</p> */}
        <div className="flex space-x-4 text-2xl font-black text-slate-900">
          <span>Votes:</span>
          <span>{candidate.count}</span>
        </div>
      </div>
    </div>
  )
}

export default ResultCard

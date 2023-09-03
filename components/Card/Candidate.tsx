import Image from 'next/image'
import React from 'react'
import { POSTS_CONST } from '../../libs/constants'
import { TCandidate } from '../../pages/vote'

export interface ICandidate {
  candidate: TCandidate
  type?: 'radio' | 'checkbox'
}

const Candidate = ({ candidate, type = 'radio' }: ICandidate) => {
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
        <h4 className="text-sm">{candidate.name}</h4>
        <h1 className="text-3xl font-bold text-primary">
          {candidate.nick_name}
        </h1>
        {/* <p className="text-xs text-gray-400">{candidate.department}</p> */}
        <input
          type={type}
          className="h-6 w-6 text-primary ring-primary focus:ring-primary"
          value={candidate.matric}
          name={
            candidate.post.includes('SRC') ? candidate.matric : candidate.post
          }
        />
        {/* <button
          type="button"
          className={`cursor-pointer rounded-full border border-primary px-7 py-2 text-primary`}
        >
          VOTE
        </button> */}
      </div>
    </div>
  )
}

export default Candidate

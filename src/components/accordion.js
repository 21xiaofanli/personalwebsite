import { useState } from 'react'
import React from 'react'

export default function Funfacts({ className, children }) {
  const [folded, setFolded] = useState(true)

  let childrenTruncated = <div>{React.Children.toArray(children)[0]}</div>

  const shouldTruncate = children && React.Children.toArray(children).length > 1
  const containerClasses = [
    'w-full', 'rounded-[10px]', 'border-[3px]', 'border-cobalt', 'bg-lightBlue', 'px-10', 'py-5', 'h-fit'
  ]
  if (className) containerClasses.push(className)

  return (
    <div className="w-full rounded-[10px] border-[3px] border-cobalt bg-lightBlue px-4 py-3 h-fit'">
        <div className="mb-2 flex flex-col gap-3">
          {folded ? childrenTruncated : children}
        </div>
      <div className={`flex px-6 ${shouldTruncate ? '' : 'hidden'}`}>
      <div
      className='body-normal ml-auto flex flex-row items-center rounded-full text-center'>
          <button className="italic" onClick={() => setFolded(!folded)}>
            {folded ? 'Click to Reveal' : 'Click to Hide'}
          </button>
    </div>
      </div>
    </div>
  )
}

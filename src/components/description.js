import React from 'react'

export default function Description({ className, children }) {

  let childrenTruncated = <div>{React.Children.toArray(children)[0]}</div>

  const shouldTruncate = children && React.Children.toArray(children).length > 1
  const containerClasses = [
    'w-full', 'rounded-[10px]', 'border-[3px]','px-10', 'py-5', 'h-fit'
  ]
  if (className) containerClasses.push(className)

  return (
    <div className={`w-[100%] rounded-[10px] px-4 h-fit py-3 my-3 ${className}`}>
      <div className="mb-2 flex flex-col gap-1">
        {shouldTruncate ? children : children}
      </div>
    </div>
  )
}

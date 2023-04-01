import React from 'react'

export default function Separator(props : { color?: string, gutter?: number }) {
  return (
    <div 
      className='separator' 
      style={{ 
        borderColor: props.color,
        borderStyle: 'solid',
        borderWidth: '1px 0 0 0',
        opacity: 0.8,
        margin: `${props.gutter}rem 0`,
      }}
    >
    </div>
  )
}

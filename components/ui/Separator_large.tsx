import React from 'react'

export default function Separator_large(props: { color: string, height: number }) {

    return (
        <div
            style={{
                backgroundColor: props.color,
                height: props.height
            }} />
    )
}

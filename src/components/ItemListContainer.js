import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer({greating}) {
    return (
        <div>
             <h2 className ="title">{ greating }</h2>
        </div>
    )
}

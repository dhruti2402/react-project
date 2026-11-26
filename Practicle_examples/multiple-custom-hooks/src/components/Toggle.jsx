import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {

    const {isVisible, toggle}= useToggle(false)

  return (
    <section>

        <h2>Toggle Example</h2>

        <button onClick={toggle}>
            {isVisible  ? 'Hide' : 'Show'}
        </button>

        {isVisible && (
             <h3>Hello! You are Welcome.</h3>
        )}
    </section>
  )
}

export default Toggle
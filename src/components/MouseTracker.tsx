import React from 'react'
const MouseTracker: React.FC = () => {
  const [ positions, setPositions ] = React.useState({x: 0, y: 0})
  React.useEffect(() => {
    console.log('Add Effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('Inner')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('Remove Effect', positions.x)
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  console.log('Before Render', positions.x)
  return (
  <p>X: { positions.x }, Y: { positions.y }</p>
  )
}

export default MouseTracker
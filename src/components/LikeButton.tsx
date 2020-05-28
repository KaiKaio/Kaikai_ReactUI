import React from 'react'

const LikeButton: React.FC = () => {
  const [obj, setObj] = React.useState({like: 0, on: true})

  React.useEffect(() => {
    console.log('Set Title')
    document.title = `点击了${obj.like}次`
  }, [obj.like])

  return (
    <>
    <button onClick={() => {setObj({like: obj.like + 1, on: obj.on})}}>
      { obj.like } 👍🏻
    </button>
    <button onClick={() => {setObj({like: obj.like, on: !obj.on})}}>
      { obj.on ? 'ON' : 'OFF' }
    </button>
    </>
  )
}

export default LikeButton
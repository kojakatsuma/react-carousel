import { Children, ReactNode, useCallback, useState } from 'react'

export const Carousel = ({ children }: { children: ReactNode }) => {
  const [number, setNumber] = useState(0)
  const max = Children.count(children) - 1
  const next = useCallback(
    () => setNumber((pre) => (pre === max ? 0 : pre + 1)),
    [max],
  )
  const prev = useCallback(
    () => setNumber((pre) => (pre === 0 ? max : pre - 1)),
    [max],
  )

  const components = Children.map(children, (child, i) => (
    <div
      style={{
        width: number === i ? 100 : 0,
        margin: 0,
        padding: 0,
        height: 100,
        backgroundColor: 'wheat',
        opacity: number === i ? 1 : 0,
        transition: 'ease-in 0.5s',
      }}
    >
      {child}
    </div>
  ))

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {components}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={prev}>前</button>
        <button onClick={next}>次</button>
      </div>
    </>
  )
}

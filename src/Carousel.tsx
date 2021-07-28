import { Children, ReactNode, useCallback, useState } from 'react'

export const Carousel = ({ children }: { children: ReactNode[] }) => {
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

  const toNumber = (number: number) => {
    setNumber(number)
  }

  const components = children.map((child, i) => (
    <div
      key={i}
      style={{
        width: number === i ? 100 : 0,
        margin: 0,
        padding: 0,
        height: 100,
        backgroundColor: 'wheat',
        opacity: number === i ? 1 : 0,
        transition: 'ease-out 0.2s',
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {components?.map((_, i) => (
          <button key={i} onClick={() => toNumber(i)}>
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

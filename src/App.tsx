import './App.css'
import { Carousel } from './Carousel'

function App() {
  return (
    <div style={{ margin: 100 }}>
      <Carousel>
        <img width={100} height={100} src="/1.jpg" alt="hoge" />
        <img width={100} height={100} src="/2.jpg" alt="hoge" />
        <img width={100} height={100} src="/3.jpg" alt="hoge" />
        <img width={100} height={100} src="/4.jpg" alt="hoge" />
      </Carousel>
    </div>
  )
}

export default App

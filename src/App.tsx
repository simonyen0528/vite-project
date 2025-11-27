import { useState } from 'react'

import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    
      <div className="grid grid-cols-4 gap-4">
  {/* 這裡面的子元素會自動變成 3 欄排列 */}
    <div>%</div>
    <div>CE</div>
    <div>C</div>
    <div>x</div>

    <div>1/X</div>
    <div>x²</div>
    <div>2√x</div>
    <div>/</div>

    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>X</div>

    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>-</div>

    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>+</div>

    <div>+/-</div>
    <div>0</div>
    <div>.</div>
    <div>=</div>
</div>
     </Layout>
  )
}

export default App

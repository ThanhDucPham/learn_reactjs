import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MyComponentTest1 from './components/MyComponentTest1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <button className="btn btn-primary">Click on the Vite and React logos to learn more</button>
      </p>
      <MyComponentTest1 />
    </div>
  )
}

export default App

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       // <>
//       //   <div>
//       //     <a href="https://vite.dev" target="_blank">
//       //       <img src={viteLogo} className="logo" alt="Vite logo" />
//       //     </a>
//       //     <a href="https://react.dev" target="_blank">
//       //       <img src={reactLogo} className="logo react" alt="React logo" />
//       //     </a>
//       //   </div>
//       //   <h1>Vite + React</h1>
//       //   <div className="card">
//       //     <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//       //       count is {this.state.count}
//       //     </button>
//       //     <p>
//       //       Edit <code>src/App.jsx</code> and save to test HMR
//       //     </p>
//       //   </div>
//       //   <p className="read-the-docs">
//       //     Click on the Vite and React logos to learn more
//       //   </p>
//       //   {/* <MyComponentTest1 /> */}
//       // </>
//       <div>
//         Test
//         < MyComponentTest1 ></MyComponentTest1 >
//       </div>
//     );
//   }
// }

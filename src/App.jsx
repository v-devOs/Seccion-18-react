import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import { increment, decrement, incrementBy } from './store/slices/counter'
import './App.css'

function App() {

  const { counter } = useSelector( state => state.counter )

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={ () => { dispatch( increment() )}}>
          increment
        </button>
        <button onClick={ () => { dispatch( decrement() )}}>
          decrement
        </button>
        <button onClick={ () => { dispatch( incrementBy(2) )}}>
          increment by 2
        </button>
        
      </div>
      
    </div>
  )
}

export default App

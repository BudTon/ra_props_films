import Stars from './components/Stars'
import './App.css'

function App() {

  return (
    <>
      <div className={'container'}>
        <h1>3. Props</h1>
        <h2>3.1 Рейтинг фильмов</h2>
      </div>
      <Stars count={1} />
      <Stars count={7} />
      <Stars />
      <Stars count={3} />
      <Stars count={5} />
    </>
  )
}

export default App

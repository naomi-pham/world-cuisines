import './App.css'
import Pages from './pages/Pages'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <div className="lg:w-5/6 mx-auto">
      <Nav />
      <div className='mt-16'>
      <Pages />
      </div>
    </div>
  )
}

export default App

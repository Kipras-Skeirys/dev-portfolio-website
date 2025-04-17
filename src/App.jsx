import HomePage from './HomePage'
import TopBar from './common/TopBar'

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-cont">
        <main>
          <HomePage />
        </main>
      </div>
    </div>
  )
}

export default App

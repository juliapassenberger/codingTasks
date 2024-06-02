import Balance from './components/balance';
import Navigation from './components/navigation';
import TopBar from './components/topBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Components to display on the page */}
        <Navigation></Navigation>

        <div className='main-content'>
          <TopBar></TopBar>
          <Balance></Balance>
        </div>

      </header>
    </div>
  );
}

export default App;

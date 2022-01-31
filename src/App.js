import './App.css';
import { Route } from 'wouter';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <section className="App">
        <Route path="/" component={Home} />
      </section>
    </div>
  );
}

export default App;

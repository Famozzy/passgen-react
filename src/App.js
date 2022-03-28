import Appbar from './components/appbar';
import PassGen from './components/passgen';
import Footer from './components/footer';

function App() {
  return (
    <div
      id="App"
      className="bg-slate-100 text-slate-900 dark:text-slate-300 dark:bg-slate-900"
    >
      <Appbar />
      <PassGen />
      <Footer />
    </div>
  );
}

export default App;

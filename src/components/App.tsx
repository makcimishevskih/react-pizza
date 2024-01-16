import Header from './Header';
import MyRouter from '../router/Router';

// // !important refactor baseicon
function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <MyRouter />
        </div>
      </div>
    </div>
  );
}

export default App;

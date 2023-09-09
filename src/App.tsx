import { Provider } from 'react-redux';
import Sidebar from './components/layout/Sidebar';
import Tickets from './components/layout/Tickets';
import { store } from './store';
import Header from './components/layout/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className=' mx-auto grid max-w-screen-lg grid-cols-7 gap-5 pt-4'>
        <Sidebar />
        <Tickets />
      </div>
    </Provider>
  );
};

export default App;

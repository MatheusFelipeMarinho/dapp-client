import { Provider } from 'react-redux';
import store from './store';
import GamerContainer from './components/GamerContainer';
import {BlockchainProvider} from './blockchain';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BlockchainProvider>
        <div className="App">
          <GamerContainer></GamerContainer>
        </div>
      </BlockchainProvider>
    </Provider>
  );
}

export default App;

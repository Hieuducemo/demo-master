import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GroupPage } from 'pages/GroupPage';
import { GroupPageProvider } from 'pages/GroupPageProvider';
import { AppProvider } from 'pages/AppProvider';

function App() {
  const facility = <GroupPageProvider id = "66275ffa-a7b3-11ed-b76e-0242ac110002"/>
  return (
    <div className="App">     
      <AppProvider facility={facility}>
           {facility}
      </AppProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { Modals} from 'components';
import { Header, NewsList } from 'blocks';
import 'styles/app.scss'

function App() {

  return (
    <div className="app_wrapper">
      <div className="app">
        <Header/>
        <NewsList/>
        <Modals/>
      </div>
    </div>
  );
}


export default App;

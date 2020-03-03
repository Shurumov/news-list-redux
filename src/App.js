import React from 'react';

import {Button, withModals, Modals} from 'components';

import './app.scss'

function App(props) {
  const { showModal } = props;

  return (
    <div className="app-wrapper">
      <Button
        type="primary"
        onClick={() => showModal(<div>1</div>)}
      >
        показать ещё
      </Button>
      <Modals/>
    </div>
  );
}



export default withModals(App);

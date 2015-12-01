import React from 'react';

import AuthenticatedComponent from './utils/AuthenticatedComponent';
import PlansActions from '../actions/PlansActions';
import PlansActionsHandler from '../services/PlansActionsHandler';
import PlansStore from '../stores/PlansStore';

import NavBar from './NavBar';
import Footer from './Footer';

export default AuthenticatedComponent(class Nodes extends React.Component {

  constructor() {
    super();
    this.changeListener = this._planStoreChange.bind(this);
  }

  componentDidMount() {
    PlansActions.listPlans();
  }

  _planStoreChange() {
    PlansActionsHandler.onChange(PlansStore.getState());
  }

  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <div className="wrapper-fixed-body container-fluid">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
});

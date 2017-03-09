import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme/material_ui_raw_theme_file';

import * as BasicActions from '../actions/basicActions';
import RandomPreview from '../components/randomPreview';
import AppBar from 'material-ui/AppBar';

import './App.css';

const App = (props)=> {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <AppBar title="React App Template"  iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <main>
            <h2>START HERE</h2>
            <RandomPreview getNewValue={props.clickHandlers.Load} value={props.value}></RandomPreview>
          </main>
        </div>
    </MuiThemeProvider>
    );
}

function mapDispatchToProps(dispatch) {
  return {
    clickHandlers: bindActionCreators(BasicActions, dispatch)
  };
}

function mapStateToProps(state){
 return {
   value: state.basic.value
 };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

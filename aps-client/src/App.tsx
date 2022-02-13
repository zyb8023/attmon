import React from 'react';
import './App.less';
import { Button } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import { router, RouteView } from './routes';

function App() {
  return (
    <Router>
      <RouteView defaultConfig={router} />
    </Router> 
  );
}

export default App;

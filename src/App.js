import React from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import TourList from './components/tourList/tourList'


export default function App() {
  return (
    <React.Fragment >
      <NavBar />
      <TourList/>
    </React.Fragment>
  )
}


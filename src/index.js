import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'

import './assets/CSS/alert_box.css'
import './assets/CSS/bar_chart.css';
import './assets/CSS/colour_coder.css';
import './assets/CSS/colour_generator.css';
import './assets/CSS/country_generator.css';
import './assets/CSS/event_handling.css';
import './assets/CSS/example_portfolio.css';
import './assets/CSS/general_styling.css';
import './assets/CSS/nav.css';
import './assets/CSS/overlay.css';
import './assets/CSS/seasons.css';
import './assets/CSS/theme.css';
import './assets/CSS/form.css';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render( 
    <BrowserRouter>
    <App />
    </BrowserRouter>);
import React from 'react';
import ReactDOM from "react-dom";
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';
import Header from "./views/Header";
import Footer from "./views/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Navigation />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Navigation />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

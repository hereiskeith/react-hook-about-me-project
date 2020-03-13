import React, {Fragment, useEffect, useState} from 'react';
import MyProfile from "./components/MyProfile";

const App = props => {
  return (
    <MyProfile/>
  );
};

export default App;


// import React from 'react';
// import ThemeContext from './theme-context'
// import ThemedBar from './components/ThemeBar'
// const themes = {
//     light: {
//         classnames: 'btn btn-primary',
//         bgColor: '#eeeeee',
//         color: '#000'
//     },
//     dark: {
//         classnames: 'btn btn-light',
//         bgColor: '#222222',
//         color: '#fff'
//     },
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         theme: 'light'
//     }
//     this.changeTheme = this.changeTheme.bind(this)
//   }
//   changeTheme(theme){
//       this.setState(
//           {theme:theme}
//       )
//   }
//   render() {
//     return (
//         <ThemeContext.Provider value={themes[this.state.theme]}>
//             <div className="App">
//               <header className="App-header">
//                 <h1 className="App-title">Welcome to React</h1>
//                 <a href="#theme-switcher"
//                     className="btn btn-light"
//                    onClick={()=>{this.changeTheme('light')}}
//                 >
//                     Light Theme
//                  </a>
//                  <a href="#theme-switcher"
//                     className="btn btn-secondary"
//                     onClick={()=>{this.changeTheme('dark')}}
//                  >
//                     Dark Theme
//                  </a>
//               </header>
//               <ThemedBar />
//             </div>
//         </ThemeContext.Provider>
//     );
//   }
// }
//
// export default App;

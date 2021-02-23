// import React, { Component } from 'react';
// import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';
// import ReactDOM, { render } from 'react-dom';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// const Home =(props)=>{
//     return <div>Home</div>
// }

// const Test =(props)=>{
//     return <div>Test</div>
// }

// const Check =(props)=>{
//     return <div>Check</div>
// }

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:'React'
//         };
//     }
//     render(){
//         return(
//             <BrowserRouter>
//             <div>Welcome
//                 <Switch>
//             {/* <Route path="/home" component={Home} />
//             <Route path="/test" component={Test} />
//             <Route path="/check" component={Check} /> */}
//             <Route path="/home" exact component={Home}/>
//             <Route path="/test" component={Test}/>
//             <Route path="/check" component={Check}/>
               
//                 </Switch>
//             </div>
//             </BrowserRouter>
//         );
//     }
// }


// export default function BasicExample() {
//  return(
//  <Router>
//     <Route Render={({ location, history }) => (
//         <React.Fragment>
            
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="home">
//                     <NavItem eventKey="home">
//                         <NavIcon>
//                             <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//                         </NavIcon>
//                         <NavText>
//                             Home
//                         </NavText>
//                     </NavItem>
//                     <NavItem eventKey="devices">
//                         <NavIcon>
//                             <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
//                         </NavIcon>
//                         <NavText>
//                             Devices
//                         </NavText>
//                     </NavItem>
//                 </SideNav.Nav>
           
//         </React.Fragment>
//     )}
//     />
// </Router> 
//           );}  

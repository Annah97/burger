import "./App.css";
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function TopBread() {
  return <div className="Burger-top" />;
}
function Tomato() {
  return <div className="Burger-tomato">Tomato</div>;
}
function Meat() {
  return <div className="Burger-meat">Meat</div>;
}
function Lettuce() {
  return <div className="Burger-lettuce">Lettuce</div>;
}
function BaseBread() {
  return <div className="Burger-base" />;
}
export default function Burger() {
  return (
    <section>
      <TopBread />
      <Tomato />
      <Meat />
      <Lettuce />
      <BaseBread />
    </section>
  );
}

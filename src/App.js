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

const top = {
  backgroundColor: "#f1a93b",
  height: "50px",
  borderRadius: "25px 25px 0px 0px",
  marginBottom: "5px",
};
const base = {
  backgroundColor: "#f1a93b",
  height: "50px",
  borderRadius: "0px 0px 25px 25px",
};
const tomato = {
  backgroundColor: "#ea3323",
  color: "#faf8ec",
  height: "50px",
  marginBottom: "5px",
  textAlign: "center",
  paddingTop: "15px",
};
const meat = {
  backgroundColor: "#814233",
  color: "#faf8ec",
  height: "50px",
  marginBottom: "5px",
  textAlign: "center",
  paddingTop: "15px",
};
const lettuce = {
  backgroundColor: "#407931",
  color: "#faf8ec",
  height: "30px",
  marginBottom: "5px",
  textAlign: "center",
  paddingTop: "8px",
};
const container = {
  marginLeft: "200px",
  width: "50%",
};

function TopBread() {
  return <div style={top} />;
}
function Tomato() {
  return <div style={tomato}>Tomato</div>;
}
function Meat() {
  return <div style={meat}>Meat</div>;
}
function Lettuce() {
  return <div style={lettuce}>Lettuce</div>;
}
function BaseBread() {
  return <div style={base} />;
}
export default function Burger() {
  return (
    <section style={container}>
      <TopBread />
      <Tomato />
      <Meat />
      <Lettuce />
      <BaseBread />
    </section>
  );
}

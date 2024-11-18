import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.scss"

 function App() {

	return (
		<div className="App">
		<Header/>
		<Main/>
		<Footer/>
		</div>
	);
}

// function App() {
//   return (
//     <div>
//       <header>
//         <h1>Header</h1>
//       </header>
//       <main style={{ height: '200vh', backgroundColor: '#f0f0f0' }}>
//         <p>Contenu qui dépasse la hauteur de l'écran</p>
//       </main>
//     </div>
//   );
// }


export default App;

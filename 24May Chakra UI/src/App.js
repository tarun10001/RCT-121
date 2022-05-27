import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import Layout3 from "./components/Layout3";


function App() {
  return (
    <>
    <h2 style={{fontSize:"25px", textAlign:"center"}}>Chakra UI</h2>
    <h2 style={{fontSize:"20px", textAlign:"center"}}>Scroll down to see all the three Layouts</h2>
    <Layout1/>
    <br/>
     <Layout2 />
     <br/>
    <Layout3 />
    </>
  );
}

export default App;
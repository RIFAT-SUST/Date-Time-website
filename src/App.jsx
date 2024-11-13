import Heading from "./component/heading";
import Heading2 from "./component/heading-2";
import Intro from "./component/Introduction";
import Time from "./component/Time";
import Footer from "./component/footer";

function App() {
  return (
    <center className="whole-container">
      <Heading></Heading>
      <Intro></Intro>
      <Heading2></Heading2>
      <Time></Time>
      <Footer></Footer>
    </center>
  );
}

export default App;

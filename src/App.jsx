import "./App.css";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main-content">
        <h1 className="main-content__title">We're launching soon</h1>
        <Timer />
      </main>
      <Footer />
    </>
  );
}

export default App;

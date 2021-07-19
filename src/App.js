import './App.css';
import Table from './components/product_table'
import Payment from "./components/paymentInfo";
function App() {
  return (
    <div className="root-main">
      <div className="left-container">
        <Table />
      </div>
      <div className="right-container">
        <Payment />
      </div>
    </div>
  );
}

export default App;

import QrCodeGenerator from "../QRGenerator";
import "./styles.scss";

function Home() {
  return (
    <div className="home">
      <h1>QR Code Generator</h1>
      <QrCodeGenerator />
    </div>
  );
}

export default Home;

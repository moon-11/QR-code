import QRCode from "qrcode.react";
import React, { useState } from "react";
import "./styles.scss";

const QrCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("Enter text");
  const [size, setSize] = useState<number>(150);
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [fgColor, setFgColor] = useState<string>("#000000");

  return (
    <div className="qr-code-generator">
      <div className="qr-code-container">
        <QRCode value={text} size={size} bgColor={bgColor} fgColor={fgColor} />
      </div>
      <div className="controls">
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Size:
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <label>
          Background Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
        <label>
          Foreground Color:
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default QrCodeGenerator;

import QRCode from "qrcode";
import React, { useEffect, useState } from "react";
import "./styles.scss";

const QrCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("Enter text");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [size, setSize] = useState<number>(150);
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [fgColor, setFgColor] = useState<string>("#000000");

  useEffect(() => {
    const generateQrCode = async () => {
      try {
        const url = await QRCode.toDataURL(text, {
          width: size,
          color: {
            dark: fgColor,
            light: bgColor,
          },
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Erro ao gerar QR Code:", error);
      }
    };

    generateQrCode();
  }, [text, size, bgColor, fgColor]);

  return (
    <div className="qr-code-generator">
      <div className="qr-code-container">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
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

import React, { useState } from 'react';
import { Button } from '@mui/material';
import QRCode from 'qrcode';

const QrCode = () => {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          // dark: '#335383FF',
          light: '#EEEEEEFF',
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQr(url);
      }
    );
  };

  console.log(qr);

  return (
    <div className='app'>
      <h1>QR Generator</h1>
      <input
        type='text'
        placeholder='www.google.com'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant='contained' onClick={generateQRCode}>
        Generate
      </Button>
      {qr && (
        <>
          <img src={qr} alt='qrcode' />
          <Button
            variant='contained'
            color='success'
            href={qr}
            download='qrcode.png'
          >
            Download
          </Button>
        </>
      )}
    </div>
  );
};

export default QrCode;

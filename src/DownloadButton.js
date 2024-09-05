import React from 'react';

function DownloadButton() {
  return (
    <div>
      <a href="assets/rameshres.pdf" download>
        <button className="btn btn-primary">Download Cv</button>
      </a>
    </div>
  );
}

export default DownloadButton;

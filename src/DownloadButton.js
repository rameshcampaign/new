import React from 'react';

function DownloadButton() {
  return (
    <div>
      <a href="assets/rameshresume.pdf" download>
        <button className="btn btn-primary">Download Cv</button>
      </a>
    </div>
  );
}

export default DownloadButton;

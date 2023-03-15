import React from 'react';

function Empty({ message }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        color: '#cae962',
        fontSize: '32px',
        height: '400px',
      }}
    >
      {message}
    </div>
  );
}

export default Empty;

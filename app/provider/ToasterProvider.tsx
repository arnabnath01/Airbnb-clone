'use client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <div>
        <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        }}
        />   
    </div>
  )
}

export default ToasterProvider

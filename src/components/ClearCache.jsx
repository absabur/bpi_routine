// Filename: App.js
import React from 'react';
import serviceWorker from '../serviceWorker'
 
export default function App() {
 
    // Function to clear complete cache data
    const clearCacheData = () => {
        caches.keys().then((names) => {
            names.forEach((name) => {
                caches.delete(name);
            });
        });
        serviceWorker()
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
 
    return (
        <div className='color-sec'>
            <h4 style={{fontSize:"15px"}}>To update routine in offline, click this button.</h4>
            <button style={{padding:'3px', color:"black", cursor:"pointer", fontWeight: '600'}} onClick={() => clearCacheData()} >
                Update Data</button>
        </div>
    );
}
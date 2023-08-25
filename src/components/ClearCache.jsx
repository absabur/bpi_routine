// Filename: App.js
import React from 'react';
 
export default function App() {
 
    // Function to clear complete cache data
    const clearCacheData = () => {
        caches.keys().then((names) => {
            names.forEach((name) => {
                caches.delete(name);
            });
        });
        window.location.reload();
    };
 
    return (
        <div className='color-sec'>
            <h4 style={{fontSize:"15px"}}>To update routine in offline, click this button.</h4>
            <button style={{padding:'3px', color:"black", cursor:"pointer", fontWeight: '600'}} onClick={() => clearCacheData()} >
                Update Data</button>
        </div>
    );
}
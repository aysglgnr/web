import React from 'react';

function Analysis() {
    return (
        <div id='map2' style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
            <iframe
                src="/heatmap.html"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
                title="Harita"
            />
        </div>
    );
}

export default Analysis;

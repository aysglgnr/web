import React, { useState, useEffect } from 'react';

function Analysis() {
    const [selectedMap, setSelectedMap] = useState("");

    const handleSelectChange = (event) => {
        setSelectedMap(event.target.value);
    };

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div id="map" style={{ position: 'relative', width: '100%', height: '100vh', fontFamily: 'Lato, sans-serif' }}>
            <div style={{ marginBottom: '20px', position: 'absolute', top: 32, right: 0, zIndex: 10 }}>
                <label htmlFor="mapSelect" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '16px' }}></label>
                <select
                    id="mapSelect"
                    onChange={handleSelectChange}
                    value={selectedMap}
                    style={{
                        padding: '5px 10px',
                        fontSize: '15px',
                        fontFamily: 'Lato, sans-serif',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f9f9f9',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.target.style.border = '1px solid #007BFF'}
                    onMouseOut={(e) => e.target.style.border = '1px solid #ccc'}
                >
                    <option value="" disabled>Choose Heatmap</option>
                    <option value="advsci">Study Area Heatmap</option>
                    <option value="map2">Map 2</option>
                    <option value="map3">Map 3</option>
                </select>
            </div>

            {selectedMap === "" && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 0,
                    color: '#333',
                    fontSize: '30px'
                }}>
                    <p>You can make a map selection from the menu above.</p>
                </div>
            )}
            <iframe
                src="/advsci.html"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    zIndex: selectedMap === "advsci" ? 1 : 0,
                    display: selectedMap === "advsci" ? 'block' : 'none'
                }}
                title="Study Area Map"
            />
            <iframe
                src="/heatmap.html"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    zIndex: selectedMap === "map2" ? 1 : 0,
                    display: selectedMap === "map2" ? 'block' : 'none'
                }}
                title="Map 2"
            />
            <iframe
                src="/heatmap.html"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    zIndex: selectedMap === "map3" ? 1 : 0,
                    display: selectedMap === "map3" ? 'block' : 'none'
                }}
                title="Map 3"
            />
        </div>
    );
}

export default Analysis;

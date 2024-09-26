import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const Analysis = () => {

    useEffect(() => {
        async function initMap() {
            const microplasticData = await fetchCSVData();
            createHeatmap(microplasticData);
        }

        // Mikroplastik boylamlarını dönüştürme fonksiyonu
        function transformLongitude(longitude) {
            return longitude > 180 ? longitude - 360 : longitude;
        }

        // CSV'den veri çekme fonksiyonu
        async function fetchCSVData() {
            const response = await fetch('microplastic_datalast.csv');
            const text = await response.text();
            const data = parseCSV(text);
            return data;
        }

        function parseCSV(text) {
            const rows = text.split('\n').map(row => row.split(','));
            const header = rows[0];

            const data = rows.slice(1).filter(row => row.length === header.length).map(row => {
                const entry = {};
                header.forEach((col, index) => {
                    entry[col.trim()] = row[index] ? row[index].trim() : null;
                });
                return entry;
            });

            return data.filter(row => {
                const lat = parseFloat(row.latitude);
                const lon = transformLongitude(parseFloat(row.longitude));
                const concentration = parseFloat(row.mp_concentration);
                return !isNaN(lat) && !isNaN(lon) && !isNaN(concentration);
            });
        }

        function createHeatmap(data) {
            const heatmapData = data.map(row => {
                const lat = parseFloat(row.latitude);
                const lon = transformLongitude(parseFloat(row.longitude));
                const concentration = parseFloat(row.mp_concentration);
                return [lat, lon, concentration];
            });

            const map = L.map('map').setView([0, 0], 2);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18
            }).addTo(map);

            L.heatLayer(heatmapData, {
                radius: 15,
                blur: 10,
                maxZoom: 15,
            }).addTo(map);
        }

        initMap();
    }, []);

    return (
        <div>
            <h1>Microplastic Heatmap</h1>
            <div id="map" style={{ height: "600px", width: "100%" }}></div>
        </div>
    );
};

export default Analysis;

const regionMapping = {
    'nb.server.qingfengawa.top': '宁波',
    'sh.server.qingfengawa.top': '上海'
};

function detectRegion() {
    const hostname = window.location.hostname;

    if (window.location.protocol === 'file:' || hostname === '') {
        return '本地';
    }
    
    if (regionMapping.hasOwnProperty(hostname)) {
        return regionMapping[hostname];
    }

    return '未知';
}

function updateRegionDisplay() {
    const regionElement = document.getElementById('Region');
    if (regionElement) {
        const region = detectRegion();
        regionElement.textContent = region;
        
        regionElement.className = 'region-' + region.toLowerCase();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateRegionDisplay();
});

window.HostnameDetection = {
    detectRegion: detectRegion,
    updateRegionDisplay: updateRegionDisplay,
    regionMapping: regionMapping
};
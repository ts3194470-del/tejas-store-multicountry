let currentLanguage = 'en';
let currentCountry = 'us';

// Initialize the app
window.addEventListener('DOMContentLoaded', function() {
    loadApps();
    updateLanguage();
});

// Switch between tabs
function switchTab(tabId, event) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
    loadApps();
}

// Change country
function changeCountry(country) {
    currentCountry = country;
    localStorage.setItem('country', country);
    updateLanguage();
    loadApps();
}

// Update all UI text based on current language
function updateLanguage() {
    const trans = translations[currentLanguage];
    
    document.getElementById('tagline').textContent = trans.tagline;
    document.getElementById('navStore').textContent = trans.navStore;
    document.getElementById('navScanner').textContent = trans.navScanner;
    document.getElementById('storeTitle').textContent = trans.storeTitle;
    document.getElementById('scannerTitle').textContent = trans.scannerTitle;
    document.getElementById('scannerDesc').textContent = trans.scannerDesc;
    document.getElementById('scanButton').textContent = trans.scanButton;
    document.getElementById('footerText').textContent = trans.footerText;
}

// Load apps dynamically
function loadApps() {
    const container = document.getElementById('appsContainer');
    container.innerHTML = '';
    
    const trans = translations[currentLanguage];
    const country = countryData[currentCountry];
    
    trans.apps.forEach((app, index) => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        
        const appInfo = document.createElement('div');
        const appName = document.createElement('h3');
        appName.textContent = app.name;
        
        const appDesc = document.createElement('p');
        appDesc.textContent = app.desc;
        
        appInfo.appendChild(appName);
        appInfo.appendChild(appDesc);
        
        // Add country-specific features
        if (country.apps.features) {
            const featuresLabel = document.createElement('p');
            featuresLabel.style.fontSize = '0.85em';
            featuresLabel.style.color = '#94a3b8';
            featuresLabel.style.marginTop = '8px';
            featuresLabel.textContent = '✓ ' + country.apps.features[index % country.apps.features.length];
            appInfo.appendChild(featuresLabel);
        }
        
        // Add currency display
        const price = document.createElement('p');
        price.style.fontSize = '1.1em';
        price.style.color = '#60a5fa';
        price.style.marginTop = '8px';
        price.textContent = 'Free • ' + country.currency;
        appInfo.appendChild(price);
        
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'btn';
        downloadBtn.textContent = translations[currentLanguage].navStore === 'Store' ? 'Download' : 
                                   currentLanguage === 'es' ? 'Descargar' :
                                   currentLanguage === 'fr' ? 'Télécharger' :
                                   currentLanguage === 'de' ? 'Herunterladen' :
                                   currentLanguage === 'hi' ? 'डाउनलोड करें' :
                                   currentLanguage === 'zh' ? '下载' : 'Download';
        
        downloadBtn.onclick = function() {
            const downloadMsg = translations[currentLanguage].downloadStarted;
            alert(downloadMsg + ' ' + app.name);
        };
        
        appCard.appendChild(appInfo);
        appCard.appendChild(downloadBtn);
        container.appendChild(appCard);
    });
}

// Scan file for virus
function checkVirus() {
    const fileInput = document.getElementById('fileInput');
    const resultElement = document.getElementById('result');
    const trans = translations[currentLanguage];
    
    // Clear previous result classes
    resultElement.classList.remove('success', 'error', 'warning');
    
    if (fileInput.files.length === 0) {
        resultElement.classList.add('error');
        resultElement.innerHTML = '❌ ' + trans.pleaseSelectFile;
        return;
    }
    
    const fileName = fileInput.files[0].name;
    const fileSize = (fileInput.files[0].size / 1024 / 1024).toFixed(2);
    
    // Simulate scanning
    resultElement.classList.add('warning');
    resultElement.innerHTML = '🔍 Scanning: ' + fileName + ' (' + fileSize + ' MB)...';
    
    setTimeout(() => {
        resultElement.classList.remove('warning');
        resultElement.classList.add('success');
        resultElement.innerHTML = '✓ "' + fileName + '" ' + trans.scanSuccess;
        fileInput.value = '';
    }, 2000);
}

// Load user preferences from localStorage
window.addEventListener('load', function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedCountry = localStorage.getItem('country') || 'us';
    
    currentLanguage = savedLanguage;
    currentCountry = savedCountry;
    
    document.getElementById('languageSelect').value = savedLanguage;
    document.getElementById('countrySelect').value = savedCountry;
    
    updateLanguage();
    loadApps();
});
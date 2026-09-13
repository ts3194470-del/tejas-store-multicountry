# Tejas Store - Multi-Country App Platform & Security Scanner

## 🌍 Overview

Tejas Store is a modern, multi-language, multi-country web application platform that provides:

- **App Store**: Download secure applications tailored to your region
- **Virus Scanner**: Scan files and applications for malware and security threats
- **Multi-Language Support**: Available in 6+ languages (English, Spanish, French, German, Hindi, Chinese)
- **Multi-Country Support**: Localized content and currency for 8 countries
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🎯 Features

### 🌐 Multi-Language Support
- English (English)
- Español (Spanish)
- Français (French)
- Deutsch (German)
- हिन्दी (Hindi)
- 中文 (Chinese)

### 🌍 Multi-Country Support
- 🇺🇸 United States (USD)
- 🇬🇧 United Kingdom (GBP)
- 🇮🇳 India (INR) - with Hindi language support
- 🇲🇽 Mexico (MXN) - with Spanish language support
- 🇪🇸 Spain (EUR) - GDPR Compliant
- 🇫🇷 France (EUR) - GDPR Compliant
- 🇩🇪 Germany (EUR) - GDPR Compliant
- 🇨🇳 China (CNY) - with WeChat and Alipay support

### 🛡️ Security Features
- Real-time virus scanning for uploaded files
- File safety validation
- Malware detection simulation
- Secure download options

### 💾 User Preferences
- Language and country preferences saved to localStorage
- Persistent user settings across sessions

## 📁 Project Structure

```
tejas-store-multicountry/
├── index.html           # Main HTML file with structure
├── styles.css           # Complete styling with responsive design
├── app.js              # Core application logic and functionality
├── translations.js     # Multi-language translations and country data
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ts3194470-del/tejas-store-multicountry.git
cd tejas-store-multicountry
```

2. Open in your browser:
- Simply open `index.html` in your web browser
- Or use a local server:
  ```bash
  python -m http.server 8000
  # Then visit http://localhost:8000
  ```

## 📖 Usage

### Changing Language
1. Click the language dropdown in the header
2. Select your preferred language
3. All content updates instantly

### Changing Country
1. Click the country dropdown in the header
2. Select your country
3. App content and currency adjust automatically

### Scanning Files
1. Click on the "Virus Scanner" tab
2. Click "Choose File" to select a file
3. Click "Scan File" to scan
4. Results will display after scanning

### Downloading Apps
1. Select your language and country
2. Browse apps in the Store tab
3. Click "Download" to download an app

## 🎨 Customization

### Adding New Languages
1. Open `translations.js`
2. Add new language object to the `translations` object:
```javascript
en: { ... },
newLang: {
    tagline: "Translation here",
    navStore: "Store Translation",
    // ... add all other keys
}
```
3. Update the language select dropdown in `index.html`

### Adding New Countries
1. Open `translations.js`
2. Add new country to `countryData` object:
```javascript
newCountry: {
    currency: "Currency Code",
    name: "Country Name",
    region: "Region",
    apps: {
        features: ["Feature 1", "Feature 2"],
        support: "Support Info"
    }
}
```
3. Update the country select dropdown in `index.html`

### Adding New Apps
1. Open `translations.js`
2. Add to each language's `apps` array:
```javascript
{ name: "App Name", desc: "App Description" }
```

## 🔒 Security Considerations

- The virus scanner is a demonstration/simulation
- For production use, integrate with real antivirus APIs
- Implement proper file upload validation
- Add backend verification for downloads
- Use HTTPS in production

## 📱 Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Real antivirus engine integration
- [ ] Payment processing (in-app purchases)
- [ ] Rating and reviews system
- [ ] App update notifications
- [ ] Advanced analytics
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) support
- [ ] Offline functionality

## 📄 License

MIT License - See LICENSE file for details

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## 📞 Support

For support, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- Built with HTML5, CSS3, and Vanilla JavaScript
- Designed for global accessibility
- Icons and flags from standard Unicode characters

---

**Made with ❤️ for the global community**
// Multi-language translations
const translations = {
    en: {
        tagline: "Your Trusted App Platform & Security Scanner",
        navStore: "Store",
        navScanner: "Virus Scanner",
        storeTitle: "Available Apps",
        scannerTitle: "App Virus Scanner",
        scannerDesc: "Check any app or file for safety and malware",
        scanButton: "Scan File",
        footerText: "© 2026 Tejas Store. All rights reserved.",
        pleaseSelectFile: "Please select a file or app first!",
        scanSuccess: "scanned successfully. The file is completely safe! (No Malware Found)",
        downloadStarted: "Download started for",
        apps: [
            { name: "Tejas Chat", desc: "Secure and fast messaging app" },
            { name: "Shri Samarth Tools", desc: "Utility and business tools" },
            { name: "Tejas Secure", desc: "Advanced security and privacy protection" }
        ]
    },
    es: {
        tagline: "Tu Plataforma de Aplicaciones de Confianza y Escáner de Virus",
        navStore: "Tienda",
        navScanner: "Escáner de Virus",
        storeTitle: "Aplicaciones Disponibles",
        scannerTitle: "Escáner de Virus de Aplicaciones",
        scannerDesc: "Verifica cualquier aplicación o archivo para detectar seguridad y malware",
        scanButton: "Escanear Archivo",
        footerText: "© 2026 Tejas Store. Todos los derechos reservados.",
        pleaseSelectFile: "¡Por favor, selecciona un archivo o aplicación primero!",
        scanSuccess: "escaneado exitosamente. ¡El archivo es completamente seguro! (Sin Malware Encontrado)",
        downloadStarted: "Descarga iniciada para",
        apps: [
            { name: "Tejas Chat", desc: "Aplicación de mensajería segura y rápida" },
            { name: "Herramientas Shri Samarth", desc: "Herramientas de utilidad y negocios" },
            { name: "Tejas Seguro", desc: "Protección avanzada de seguridad y privacidad" }
        ]
    },
    fr: {
        tagline: "Votre Plateforme d'Applications de Confiance et Analyseur de Virus",
        navStore: "Magasin",
        navScanner: "Analyseur de Virus",
        storeTitle: "Applications Disponibles",
        scannerTitle: "Analyseur de Virus d'Applications",
        scannerDesc: "Vérifiez toute application ou fichier pour la sécurité et les logiciels malveillants",
        scanButton: "Analyser le Fichier",
        footerText: "© 2026 Tejas Store. Tous droits réservés.",
        pleaseSelectFile: "Veuillez d'abord sélectionner un fichier ou une application!",
        scanSuccess: "analysé avec succès. Le fichier est complètement sûr! (Aucun Malware Trouvé)",
        downloadStarted: "Téléchargement commencé pour",
        apps: [
            { name: "Tejas Chat", desc: "Application de messagerie sécurisée et rapide" },
            { name: "Outils Shri Samarth", desc: "Outils d'utilité et d'affaires" },
            { name: "Tejas Sécurisé", desc: "Protection avancée de la sécurité et de la confidentialité" }
        ]
    },
    de: {
        tagline: "Ihre vertrauenswürdige App-Plattform und Virenscanner",
        navStore: "Laden",
        navScanner: "Virenscanner",
        storeTitle: "Verfügbare Apps",
        scannerTitle: "App-Virenscanner",
        scannerDesc: "Überprüfen Sie jede App oder Datei auf Sicherheit und Malware",
        scanButton: "Datei Scannen",
        footerText: "© 2026 Tejas Store. Alle Rechte vorbehalten.",
        pleaseSelectFile: "Bitte wählen Sie zuerst eine Datei oder App aus!",
        scanSuccess: "erfolgreich gescannt. Die Datei ist völlig sicher! (Kein Malware Gefunden)",
        downloadStarted: "Download gestartet für",
        apps: [
            { name: "Tejas Chat", desc: "Sichere und schnelle Messaging-App" },
            { name: "Shri Samarth Tools", desc: "Dienstprogramm- und Geschäftstools" },
            { name: "Tejas Sicher", desc: "Erweiterte Sicherheits- und Datenschutzmaßnahmen" }
        ]
    },
    hi: {
        tagline: "आपका विश्वसनीय ऐप प्लेटफॉर्म और सुरक्षा स्कैनर",
        navStore: "स्टोर",
        navScanner: "वायरस स्कैनर",
        storeTitle: "उपलब्ध ऐप्स",
        scannerTitle: "ऐप वायरस स्कैनर",
        scannerDesc: "किसी भी ऐप या फाइल की सुरक्षा और मैलवेयर के लिए जांचें",
        scanButton: "फाइल स्कैन करें",
        footerText: "© 2026 Tejas Store. सर्वाधिकार सुरक्षित।",
        pleaseSelectFile: "कृपया पहले कोई फाइल या ऐप चुनें!",
        scanSuccess: "सफलतापूर्वक स्कैन किया गया। फाइल पूरी तरह सुरक्षित है! (कोई मैलवेयर नहीं मिला)",
        downloadStarted: "के लिए डाउनलोड शुरू हुआ",
        apps: [
            { name: "Tejas Chat", desc: "सुरक्षित और तेज़ मैसेजिंग ऐप" },
            { name: "Shri Samarth Tools", desc: "उपयोगिता और व्यावसायिक उपकरण" },
            { name: "Tejas सुरक्षित", desc: "उन्नत सुरक्षा और गोपनीयता सुरक्षा" }
        ]
    },
    zh: {
        tagline: "您值得信赖的应用平台和安全扫描器",
        navStore: "商店",
        navScanner: "病毒扫描器",
        storeTitle: "可用应用",
        scannerTitle: "应用病毒扫描器",
        scannerDesc: "检查任何应用或文件的安全性和恶意软件",
        scanButton: "扫描文件",
        footerText: "© 2026 Tejas Store. 版权所有。",
        pleaseSelectFile: "请先选择文件或应用！",
        scanSuccess: "扫描成功。该文件完全安全！（未发现恶意软件）",
        downloadStarted: "下载已启动",
        apps: [
            { name: "Tejas Chat", desc: "安全快速的消息应用" },
            { name: "Shri Samarth Tools", desc: "实用程序和商业工具" },
            { name: "Tejas 安全", desc: "高级安全和隐私保护" }
        ]
    }
};

// Country-specific content and currencies
const countryData = {
    us: {
        currency: "USD",
        name: "United States",
        region: "North America",
        apps: {
            features: ["Cloud Storage Integration", "Google Play Integration"],
            support: "24/7 English Support"
        }
    },
    uk: {
        currency: "GBP",
        name: "United Kingdom",
        region: "Europe",
        apps: {
            features: ["GDPR Compliant", "iCloud Integration"],
            support: "24/7 English Support"
        }
    },
    in: {
        currency: "INR",
        name: "India",
        region: "Asia",
        apps: {
            features: ["Hindi Language Support", "Local Payment Methods", "Data Privacy Compliance"],
            support: "Hindi & English Support"
        }
    },
    mx: {
        currency: "MXN",
        name: "Mexico",
        region: "North America",
        apps: {
            features: ["Spanish Language Support", "Local Payment Methods"],
            support: "Spanish Support"
        }
    },
    es: {
        currency: "EUR",
        name: "Spain",
        region: "Europe",
        apps: {
            features: ["GDPR Compliant", "Spanish Language"],
            support: "Spanish & English Support"
        }
    },
    fr: {
        currency: "EUR",
        name: "France",
        region: "Europe",
        apps: {
            features: ["GDPR Compliant", "French Language"],
            support: "French & English Support"
        }
    },
    de: {
        currency: "EUR",
        name: "Germany",
        region: "Europe",
        apps: {
            features: ["GDPR Compliant", "German Language"],
            support: "German & English Support"
        }
    },
    cn: {
        currency: "CNY",
        name: "China",
        region: "Asia",
        apps: {
            features: ["WeChat Integration", "Alipay Support", "Chinese Language"],
            support: "Mandarin Support"
        }
    }
};
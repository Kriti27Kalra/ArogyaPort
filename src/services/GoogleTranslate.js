// services/googleTranslate.js
class GoogleTranslateClass {
  constructor() {
    this.initialized = false;
    this.currentLanguage = 'en';
  }

  // Initialize Google Translate widget
  initGoogleTranslate() {
    if (this.initialized) return;
    
    // Check if already loaded
    if (window.google && window.google.translate) {
      this.setupTranslateElement();
      return;
    }
    
    // Define callback before adding script
    window.googleTranslateElementInit = () => {
      this.setupTranslateElement();
    };
    
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      console.error('Failed to load Google Translate');
    };
    document.head.appendChild(script);
  }

  setupTranslateElement() {
    if (!window.google || !window.google.translate) return;
    
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,ru,es,fr,de,zh-CN,ja,ko,hi,te,ta,ml',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
      this.initialized = true;
      
      // Apply saved language after initialization
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && savedLang !== 'en') {
        setTimeout(() => {
          this.changeLanguage(savedLang);
        }, 1000);
      }
    } catch (error) {
      console.error('Error setting up Google Translate:', error);
    }
  }

  // Change language programmatically
  changeLanguage(langCode) {
    if (!this.initialized || !window.google || !window.google.translate) {
      // Retry after delay
      setTimeout(() => {
        if (window.google && window.google.translate) {
          this.changeLanguage(langCode);
        }
      }, 500);
      return false;
    }

    try {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change'));
        this.currentLanguage = langCode;
        localStorage.setItem('preferredLanguage', langCode);
        return true;
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
    return false;
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

const googleTranslate = new GoogleTranslateClass();
export default googleTranslate;
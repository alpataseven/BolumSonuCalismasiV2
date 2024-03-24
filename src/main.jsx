import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*

- [ ] Default olarak hiçbir görsel seçilmesin ve bu durumda görsel seçilmedi component i ekranda gözüksün
- [ ] products icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)
- [ ] Lorem picsum görselleri imgName içinde ve thumbnail içinde tutulsun
- [ ] Bölüm sonu çalışması v1 layout uygulansın
- [ ] Img thumbnail altında sec butonu olsun ve sec dediğimizde isActive True olsun

*/

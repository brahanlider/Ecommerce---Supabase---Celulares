# [Ecommerce - celulares](https://cineverseelgs.netlify.app) |  [<img src='./public/iconos-redes-personales/github.svg' alt='GitHub' width='20' height='20' class='card__footer-nav-img'/>](https://github.com/brahanlider)     |   [<img src='./public/iconos-redes-personales/linkedin.svg' alt='Linkedin' width='20' height='20' class='card__footer-nav-img' />](https://www.linkedin.com/in/brahan-tunquipa-mamani-bbba23219//)  | [<img src='./public/iconos-redes-personales/favicon.ico' alt='Portafolio' width='20' height='20' class='card__footer-nav-img' />](https://www.instagram.com/brahanlider/)

[![Imagen de fondo - Ecommerce](https://www.adslzone.net/app/uploads-adslzone.net/2019/04/amazon-moviles.jpg?x=480&quality=80)](https://FALTA)

## 📜 Resumen 📜
El proyecto es un ecommerce de celulares desarrollado con React, TypeScript y Vite. Utiliza Supabase como backend para la gestión de datos y autenticación de usuarios. La aplicación permite a los usuarios navegar por una variedad de productos, agregarlos al carrito y realizar compras.

## 💻 Instalación 💻
- Ubicarse en la carpeta que contendrá el proyecto
- Abrir terminal de comandos
  - git clone https://github.com/brahanlider/Ecommerce---Supabase---Celulares.git
  - cd cineverse
  - Crear en '/' el archivo .env.local en base a .env.template
  - npm install
  - npm run dev
    - Levanta un servidor con la aplicación
  - npm run build
    - Genera un paquete para el despliegue en producción

## 👨‍💻 Tecnologías Usadas 👨‍💻
<table>
  <thead>
    <tr>
      <th>TypeScript</th>
      <th>React</th>
      <th>React Router Dom</th>
      <th>Supabase</th>
      <!-- <th>React Slick</th> -->
      <!-- <th>SweetAlert2</th> -->
      <th>Tanstack Query</th>
      <th>zod</th>
      <th>React-Form</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          src='https://cdn-icons-png.flaticon.com/256/5968/5968381.png' width='100%' />
      </td>
      <td>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' width='100%' />
      </td>
      <td>
        <img src='https://iconape.com/wp-content/files/sm/371377/svg/371377.svg' width='100%' />
      </td>
      <td>
        <img src='https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj' width='100%' />
      </td>
      <td>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyqAdJny6dCy56e9xexZ_gsPNc-pTS3zQPQYOD_zT2Dqsy3FIvRo-t9aYElmatzUMqII&usqp=CAU'
          width='100%' />
      </td>
      <td>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo2nCl1E6x0S5ZwA2EVD1n3c6cBnkoShjdw&s'
          width='100%' />
      </td>
      <td>
        <img
          src='https_//FALTA.png' width='100%' />
      </td>
    </tr>
  </tbody>
</table>

## 🤗 Redes sociales 🤗
- 💎 GitHub: https://github.com/brahanlider 💎
- 💎 LinkedIn: https://www.linkedin.com/in/brahan-tunquipa-mamani-bbba23219/ 💎
- 🐭 Portafolio Web: https://portafolio-brahan.netlify.app/ 🐭

---

EJEMPLOS
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


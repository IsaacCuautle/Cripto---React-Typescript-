# Cotizador de Criptomonedas

Aplicación web para consultar en tiempo real la cotización de criptomonedas frente a monedas fiat. Desarrollada con React, TypeScript, Zustand para el manejo de estado global y Zod para la validación de datos. Permite seleccionar una moneda y una criptomoneda, mostrando el valor actualizado con validaciones y manejo de carga y errores.

## Imágenes del proyecto

<div
  class="imagenes"  
  style="
  display: flex;"
>
<img 
  style="
    width: 600px; 
    heigth: 400px; "
  src='https://github.com/user-attachments/assets/cd78df88-105d-41cf-a9cf-ea3f5f526249'
/>
<img 
  style="
    width: 300px; 
    heigth: 400px; "
  src='https://github.com/user-attachments/assets/77f6f90b-e079-4bac-aba9-1675076c037a' 
/>
</div>

## Instrucciones

Para ejecutar el proyecto, sigue estos pasos:

- **Clonar el repositorio**:  
  `git clone https://github.com/IsaacCuautle/Crypto-React-Typescript.git`
- **Instalar dependencias**:  
  `npm install`
- **Ejecutar el proyecto**:  
  `npm run dev`

## Tecnologías utilizadas

- **Frontend**: React con TypeScript
- **Gestión de estado**: Zustand
- **Validación de datos**: Zod
- **Build Tool**: Vite

## APIs utilizadas

- **CoinDesk API**: Para obtener la lista de criptomonedas.
- **CryptoCompare API**: Para obtener los precios actuales de las criptomonedas.

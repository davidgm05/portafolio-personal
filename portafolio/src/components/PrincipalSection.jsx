import React from 'react'

const PrincipalSection = () => {
  return (
    <>
    <div class='container-principar-section'>
    <div class='title-description-contain'>
        <h2>Hola me llamo</h2>
        <h1><b className='david'>David</b> y soy <b className='desarrollador'>Desarrollador Web</b></h1>
        <p>Soy David Gutiérrez, un desarrollador web junior con una pasión por crear soluciones digitales innovadoras, atractivas, funcionales y aprender y ampliar mis habilidades para mantenerme al día con las últimas tendencias y tecnologías.</p>
        <div className='container-buttons'>
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#0dffb4" fill-opacity=".01" d="M0 0h48v48H0z" class="fill-ffffff"></path><path clip-rule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z" fill="#0dffb4" fill-rule="evenodd" class="fill-000000"></path><path clip-rule="evenodd" d="M19.183 45.471c-.193-.25-.193-2.474 0-6.673-2.072.072-3.38-.072-3.927-.431-.82-.54-1.64-2.2-2.367-3.371-.728-1.171-2.343-1.356-2.995-1.618-.652-.262-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.824.514 2.795.29 3.689-.122.893-.412.827-1.944.986-2.551.202-.567-.508-.693-.524-.697-.872 0-5.453-.997-6.712-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.364.46 5.703 2.326.002.01 1.755-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.759.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.313.626.988 3.08 4.128 1.572 8.584-1.005 2.97-2.98 4.781-5.928 5.433-.338.107-.507.281-.507.521 0 .36.457.4 1.115 2.087.439 1.124.47 4.336.095 9.635-.95.242-1.69.404-2.22.488-.937.147-1.954.23-2.954.261-1 .032-1.348.029-2.73-.1a19.798 19.798 0 0 1-2.654-.425Z" fill="#0dffb4" fill-rule="evenodd" class="fill-000000"></path></svg>
        <svg className='linkedin' version="1.0" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" fill="#0dffb4" class="fill-007bb5"></path><g fill="#023535" class="fill-ffffff"><path d="M7 11h4v14H7zM20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z"></path><circle cx="9" cy="8" r="2"></circle></g></svg>
        </div>
        
    </div>
    <div class='my-img-contain'>
        <div class='circle-img'>
          <div className='marco1'>
          </div>
          <div className='marco2'></div>
        </div>
        <div className='container-buttom-img'>
        <div class='my-img'>
        <svg className='logo-html' version="1.0" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path fill="#0dffb4" d="M27.377 28.889 16.001 32 4.625 28.889 2 0h28.002z" class="fill-e44d26"></path><path fill="#68fcd0" d="M16 2v27.75l9.232-2.742L27.688 2z" class="fill-ff6c39"></path><path fill="#023535" d="M24.363 6H7.607L8 10l.619 7h10.884l-.355 3.984L16 21.99l-3.143-1.006L12.648 19H8.803l.459 4.987L16 25.99l6.728-2.004.99-10.986H12.252l-.25-3H24z" class="fill-ffffff"></path></svg>
        <svg className='logo-react' viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="translate(-16.308 4.572) scale(1.25305)"><circle cx="64" cy="47.5" r="9.3" fill="#0dffb4" class="fill-61dafb"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11Zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7ZM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9Zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4Zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1Zm39.1-5.4-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4Zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9Zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5Zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6Zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10ZM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1-1.9 0-3.8 0-5.6.1 1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7ZM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5Zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6Zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5Z" fill="#0dffb4" fill-rule="nonzero" class="fill-61dafb"></path></g></svg>
        <svg className='logo-css' version="1.0" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path fill="#023535" d="M27.377 28.889 16.001 32 4.625 28.889 2 0h28.002z" class="fill-1f62ae fill-0dffb4"></path><path fill="#035354" d="M16 2v27.75l9.232-2.742L27.688 2z" class="fill-347dc6 fill-4efcc8"></path><path fill="#0dffb4" d="M24.363 6H7.607L8 10h8l-7.75 2.99.369 4.01h10.883l-.344 4-3.158.99-3.139-1.006L12.533 19h-3.73l.459 4.987L16 25.99l6.728-2.004.991-10.996h-7.693L24 10z" class="fill-ffffff fill-023535"></path></svg>
        <svg className='logo-js' viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128"><circle cx="64" cy="64" r="50" fill="#023535" class="fill-f0db4f"></circle><path d="M48.4 44.6h8.7v24.5c0 11-5.3 14.9-13.7 14.9-2.1 0-4.7-.3-6.4-.9l1-7.1c1.2.4 2.8.7 4.5.7 3.7 0 6-1.7 6-7.6l-.1-24.5zM64.8 74.4c2.3 1.2 6 2.4 9.7 2.4 4 0 6.1-1.7 6.1-4.3 0-2.4-1.8-3.8-6.5-5.4-6.4-2.3-10.7-5.9-10.7-11.6C63.4 49 69 44 78.1 44c4.4 0 7.6.9 9.9 2l-2 7c-1.5-.7-4.3-1.8-8-1.8-3.8 0-5.6 1.8-5.6 3.7 0 2.5 2.1 3.6 7.2 5.5 6.8 2.5 10 6.1 10 11.6 0 6.5-4.9 12-15.6 12-4.4 0-8.8-1.2-11-2.4l1.8-7.2z" fill="#0dffb4" class="fill-323330"></path></svg>
        <svg className='logo-node' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" fill="#0dffb4" class="fill-000000"></path></svg>
        <svg className='logo-mongo' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 73.12v45.75C448 159.1 347.6 192 224 192S0 159.1 0 118.9V73.12C0 32.88 100.4 0 224 0s224 32.88 224 73.12zM448 176v102.9c0 40.2-100.4 73.1-224 73.1S0 319.1 0 278.9V176c48.12 33.12 136.2 48.62 224 48.62S399.9 209.1 448 176zm0 160v102.9c0 40.2-100.4 73.1-224 73.1S0 479.12 0 438.87V336c48.12 33.13 136.2 48.63 224 48.63S399.9 369.1 448 336z" fill="#023535" class="fill-000000"></path></svg>
        </div>
        <button className='descargar-cv'>descargar cv</button>
        </div>
    </div>
    
    
</div>

    </>
  )
}

export default PrincipalSection
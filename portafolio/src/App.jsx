import Spline from '@splinetool/react-spline';
import './App.css';  // Importa el archivo CSS
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function App() {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1, // Ajuste el umbral según sea necesario
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1, // Ajuste el umbral según sea necesario
  });

  const { ref: proyectosRef, inView: proyectosInView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  });

  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const enviarEmail = (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario

    // Parámetros del correo
    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    };

    emailjs.send('service_f6i3l3k', 'template_uqev4gv', templateParams, 'FvU3j8T-bypIDuMm3')
      .then((response) => {
        console.log('¡Correo enviado con éxito!', response.status, response.text);
        alert("Correo enviado con éxito");
        // Limpia los campos después de enviar el correo
        setMensaje("");
        setNombre("");
        setEmail("");
      }, (error) => {
        console.log('Error al enviar el correo:', error);
        alert("Error al enviar el correo. Inténtalo de nuevo.");
      });
  };
  return (
    <>
      <div className="container"> 
        <Spline style={{width: "100vw",height: "100vh"}} className="spline" scene="https://prod.spline.design/ggYuP7yDIisYhpH8/scene.splinecode" />

        <h1 className="main-heading">
          <span className='flex-span'>
            <span className='me_llamo'>
              <span className="text-normal">Me llamo</span> 
              <span className="text-highlight">David Gutierrez</span> 
            </span>
            <span className='soy'>
              <span className="text-normal-2">Y soy</span>
              <span className="text-bold">Web Developer</span>
            </span>
          </span>
        </h1>
        <div className='contain-buttons'>
        <div>
  <a href="https://github.com/davidgm05?tab=repositories" target="_blank" rel="noopener noreferrer">
    <svg className='github' fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0dffb4" fillOpacity=".01" d="M0 0h48v48H0z" className="fill-ffffff"></path>
      <path clipRule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z" fill="#0dffb4" fillRule="evenodd" className="fill-000000"></path>
      <path clipRule="evenodd" d="M19.183 45.471c-.193-.25-.193-2.474 0-6.673-2.072.072-3.38-.072-3.927-.431-.82-.54-1.64-2.2-2.367-3.371-.728-1.171-2.343-1.356-2.995-1.618-.652-.262-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.824.514 2.795.29 3.689-.122.893-.412.827-1.944.986-2.551.202-.567-.508-.693-.524-.697-.872 0-5.453-.997-6.712-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.364.46 5.703 2.326.002.01 1.755-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.759.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.313.626.988 3.08 4.128 1.572 8.584-1.005 2.97-2.98 4.781-5.928 5.433-.338.107-.507.281-.507.521 0 .36.457.4 1.115 2.087.439 1.124.47 4.336.095 9.635-.95.242-1.69.404-2.22.488-.937.147-1.954.23-2.954.261-1 .032-1.348.029-2.73-.1a19.798 19.798 0 0 1-2.654-.425Z" fill="#0dffb4" fillRule="evenodd" className="fill-000000"></path>
    </svg>
  </a>
</div>

<div>
  <a href="https://www.linkedin.com/in/david-guti%C3%A9rrez-mill%C3%A1n-1b7516247/" target="_blank" rel="noopener noreferrer">
    <svg className='linkedin' version="1.0" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" fill="#0dffb4" className="fill-007bb5"></path>
      <g fill="#023535" className="fill-ffffff">
        <path d="M7 11h4v14H7zM20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z"></path>
        <circle cx="9" cy="8" r="2"></circle>
      </g>
    </svg>
  </a>
</div>


        </div>
      </div>

      <div style={{backgroundColor: "#605E5E"}}>
        <div className='contian-my-info'>
          <div className='imagen-david-text'>
            <div className={`img ${imageInView ? 'animated-image-left' : ''}`} ref={imageRef}></div>
            <div className={`quien-soy ${textInView ? 'animated-text-right' : ''}`} ref={textRef}>
              <h2>Soy una persona extremadamente creativa y disfruto ilustrando mis ideas a través del código. Mi pasión por el desarrollo de software se refleja en mi capacidad para diseñar e implementar soluciones innovadoras y eficientes, con experiencia en tecnologías front-end y back-end, así como en bases de datos. Mi conocimiento abarca una gran variedad de herramientas y tecnologías, incluyendo librerías y frameworks.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='proyectos-destacados-title'>
        <h2 className='proyectos'>Proyectos <span className='destacados'>Destacados</span></h2>
      </div>

      <div ref={proyectosRef} className='proyectos-destacados'>
 
      <div ref={proyectosRef} className='proyectos-destacados'>

  <div className={`proyecto-zoddak ${proyectosInView ? 'animated-up' : ''}`}>
    <div>
      <h2 className='name-proyect'>Proyecto <span>ZODDAK</span></h2>
    </div>
   
    <div className='proyect-card'>
     
      <div className='zoddak-img-card'></div>

      <div className='zoddak-card-text'>

      <h3 className='card-title'>Detalles del Proyecto ZODDAK</h3>
    
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: 'rgba(243, 244, 245, 0.86)', borderRadius: "5px", paddingTop: "5px"}}>
      <div><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#E44D26" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  "/><polygon fill="#FF6C39" points="16,2 16,29.75 25.232,27.008 27.688,2  "/><polygon fill="#FFFFFF" points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12.857,20.984 12.648,19    8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10  "/></g><g/><g/><g/><g/><g/><g/></svg></div>
      <div><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#1F62AE" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  "/><polygon fill="#347DC6" points="16,2 16,29.75 25.232,27.008 27.688,2  "/><polygon fill="#FFFFFF" points="24.363,6 7.607,6 8,10 16,10 8.25,12.99 8.619,17 19.502,17 19.158,21 16,21.99 12.861,20.984    12.533,19 8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.719,12.99 16.026,12.99 24,10  "/></g><g/><g/><g/><g/><g/><g/></svg></div>
      <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg></div>
      <div><svg width="40px" height="40px" viewBox="0 -183.5 512 512" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">

<g fill="#83CD29">

<path d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z"/>

<path d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z"/>

</g>

<path d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z" fill="#404137"/>

<path d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z" fill="#83CD29"/>

</svg></div>
<div><svg height="35px" viewBox="8.738 -5.03622834 17.45992422 39.40619484" width="35px" xmlns="http://www.w3.org/2000/svg">
  <path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/>
  <path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/>
  <path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/>
</svg>
</div>
    </div>

   
      <p className='project-description'>
        ZODDAK es una herramienta que hemos creado para una inmobiliaria que ayuda a comparar la vivienda que quieres compara con viviendas que tienen sus mismas caracteristicas.
      </p>
      </div>
     
    </div>
  </div>

  <div className={`proyecto-nexiad ${proyectosInView ? 'animated-up' : ''}`}>
    <div>
      <h2 className='name-proyect'>Proyecto <span>NEXIAD</span></h2>
    </div>

    <div className='proyect-card-2'>

      <div className='nexiad-img-card'></div>
    <div className='nexid-card-text'>

      <h3 className='card-title'>Detalles del Proyecto NEXIAD</h3>
    
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: 'rgba(243, 244, 245, 0.86)', borderRadius: "5px", paddingTop: "5px"}}>
      <div><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#E44D26" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  "/><polygon fill="#FF6C39" points="16,2 16,29.75 25.232,27.008 27.688,2  "/><polygon fill="#FFFFFF" points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12.857,20.984 12.648,19    8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10  "/></g><g/><g/><g/><g/><g/><g/></svg></div>
      <div><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#1F62AE" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  "/><polygon fill="#347DC6" points="16,2 16,29.75 25.232,27.008 27.688,2  "/><polygon fill="#FFFFFF" points="24.363,6 7.607,6 8,10 16,10 8.25,12.99 8.619,17 19.502,17 19.158,21 16,21.99 12.861,20.984    12.533,19 8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.719,12.99 16.026,12.99 24,10  "/></g><g/><g/><g/><g/><g/><g/></svg></div>
      <div><svg width="32px" height="32px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg></div>
      <div><svg width="40px" height="40px" viewBox="0 -183.5 512 512" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">

<g fill="#83CD29">

<path d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z"/>

<path d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z"/>

</g>

<path d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z" fill="#404137"/>

<path d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z" fill="#83CD29"/>

</svg></div>
<div><svg height="35px" viewBox="8.738 -5.03622834 17.45992422 39.40619484" width="35px" xmlns="http://www.w3.org/2000/svg">
  <path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/>
  <path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/>
  <path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/>
</svg>
</div>
    </div>
     
      <p className='project-description'>
        NEXIAD es un panel administrativo util para modelos de negocios que utilicen subscripciones, puedes gestionar todo lo necesario para el negocio en el panel.
        </p>
    </div>
    </div>
  </div>
</div>

</div>
<div className='container-form'>
  <h2>Contactame</h2>

  <div className="container">
      <input
        type="text"
        placeholder="Tu Nombre"
        value={nombre}
        onChange={handleNombreChange}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Tu Email"
        value={email}
        onChange={handleEmailChange}
        className="input-field"
      />
      <textarea
        placeholder="Escribe tu mensaje aquí..."
        value={mensaje}
        onChange={handleMensajeChange}
        className="textarea-field"
      />
      <button className='button-contact' onClick={enviarEmail}>
        Enviar Mensaje
      </button>
    </div>
    </div>


    </>
  );
}

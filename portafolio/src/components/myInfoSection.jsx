import React from 'react'
import Code3D from './3dModelCode'


const MyInfoSection = () => {
  return (
    <>
    <div className='my-info-section'>
        <div className='model-3d'>
        <Code3D/>
        <div className='container-my-info'>
          <h2 className='title-info-section'>Sobre <b>mi</b></h2>
          <div className='container-icon-david-my-info'>
            <div className='icon-david'></div>
            <div className='container-my-text-info'>
              <div>
                <p className='text-my-info'>Soy una persona extremadamente creativa y disfruto ilustrando mis ideas a través del código. Mi pasión por el desarrollo de software se refleja en mi capacidad para diseñar e implementar soluciones innovadoras y eficientes, con experiencia en tecnologías front-end y back-end, así como en bases de datos. Mi conocimiento abarca una gran variedad de herramientas y tecnologías, incluyendo librerías y frameworks.</p>
              </div>
              <div className='container-tecnology'>
              <div className='icon-html'></div>
              <div className='icon-css'></div>
              <div className='icon-js'></div>
              <div className='icon-node'></div>
              <div className='icon-react'></div>
              <div className='icon-vite'></div>
              <div className='icon-mongo'></div>
              <div className='icon-sql'></div>
              <div className='icon-sass'></div>
              <div className='icon-bootstrap'></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default MyInfoSection
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que nuestros exalumnos dicen sobre freeCodeCamp:</h1>
       <Testimonio 
       nombre='Emma Bostian'
       pais='Suecia'
       imagen='Emma'
       cargo='Ingeniera de Software'
       empresa='Spotify'
       testimonio='Siempre me costó aprender JavaScript. Hice muchos cursos, pero el de freeCodeCamp fue el que me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'/>
       <Testimonio
       nombre='Shawn Wang'
       pais='Singapur'
       imagen='Shawn'
       cargo='Ingeniera de Software'
       empresa='Amazon'
       testimonio='Da miedo cambiar de carrera. Solo adquirí la confianza de que podía programar tras trabajar cientos de horas de lecciones gratuitas en freeCodeCamp. En menos de un año conseguí un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'/>
      <Testimonio
       nombre='Sarah Chima'
       pais='Nigeria'
       imagen='Sarah'
       cargo='Ingeniera de Software'
       empresa='ChatDesk'
       testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel de principiante total a un nivel de mucha confianza. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble'/>
       </div>
    </div>
  );
}

export default App;

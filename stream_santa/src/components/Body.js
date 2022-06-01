import { useContext } from 'react';
import santa from '../assets/santa.png'
import hbo from '../assets/hbo.png'
import hulu from '../assets/hulu.png'
import netflix from '../assets/netflix.png'
import paramount from '../assets/paramount.png'
import disney from '../assets/disney.png'
import prime from '../assets/prim.png'
import './Body.css'
import Prediction from './Prediction';
import { Context } from './Store'

export default function Body() {
  const [service, setService] = useContext(Context)
  const services = [<Prediction path={netflix}/>,
  <Prediction path={prime}/>,
  <Prediction path={hulu}/>,
  <Prediction path={disney}/>,
  <Prediction path={hbo}/>,
  <Prediction path={paramount}/>,<img src={santa} width="450" height="400"/>]
  return (
    <div className='body'>
        <div className='container'>
            <h1 className='h1'>Stream Santa</h1>
            {services[service]}
        </div>
    </div>
  );
}
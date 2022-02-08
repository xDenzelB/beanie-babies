import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map(beanieBaby => <BeanieBaby key={`${beanieBaby.id}${beanieBaby.title}`} beanieBaby={beanieBaby} />)
      }
      {/* render out the beanie babies as a list */}
    </div>);
}

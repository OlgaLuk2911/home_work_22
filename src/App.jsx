import './style/App.css';
import Card from'./components/Card'
import data from './data.json'

function App() {
  return (
    <>
    {data.heros.map((item,index)=>(
      <Card name={item.name} universe={item.universe} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} url={item.url}key={index}/>
    ))}
    </>
  );
}

export default App;

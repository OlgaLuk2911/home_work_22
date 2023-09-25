
export default function Card(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <div className="basic_description">
      <p>Вселенная: {props.universe}</p>
      <p>Альтер эго: {props.alterego}</p>
      <p>Род деятельности: {props.occupation}</p>
      <p>Друзья: {props.friends}</p>
      <p>Суперсилы: {props.superpowers}</p>
      </div>
      <img className="pic" src={props.url}></img>
    </div>
  )
}

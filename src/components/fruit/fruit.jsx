export default function Fruit(props){
    return <div className = 'fruit'>
        {props.fname}
        <p>{props.price}$</p>
        <img src={props.kishur} alt="" />
    </div>
}
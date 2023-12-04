import Fruit from "../fruit/fruit";
export default function PrintFruit(props) {
    return <div>
        <h1>Fruit</h1>
        <div className = 'f'>
        {props.fruits.map(f =><Fruit key = {f[0]} fname={f[0]} price={f[1]} kishur={f[2]} />)}
        </div>
    </div>
}
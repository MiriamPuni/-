import Shop from "../shop/shop";
export default function PrintShop(props){
      return <div>
        <h1>ANIMALS</h1>
        <div  className = 'shop'>
        {props.product.map(p =><Shop key = {p[0]} fname = {p[1]} price = {p[2]} /> )}
        </div>
      </div>
}
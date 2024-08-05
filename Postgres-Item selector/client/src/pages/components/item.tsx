export default function item({ name, amount, price, image }:{ name: string, amount: string, price: string, image: string }) {
  return (
    <div id="comp">
      <img src={image}></img>
      <div id="name">{name}</div>
      <div id="amount">Amount:{amount}</div>
      <div id="price">Price:{price}</div>
    </div>
  )
}
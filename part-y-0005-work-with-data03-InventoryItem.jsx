function InventoryItem({name, quantity, price}) {

    return (
        <div>
            <h3>Product name: {name}</h3>
            <p>Product inventory quantity: {quantity}</p>
            <p>Product per price: {price} ₺</p>
        </div>
    )
}

export default InventoryItem

"use client"
import { useEffect, useState } from "react";
import cartData from "../data/cartData";
import CustomerGuarantees from "./CustomerGuarantees";

export default function CommandRecap({ shippingcost, subtotal, setSubTotal }) {
    const [totalitems, setTotalItems] = useState(0)

    // pour recalculer à chaque fois le total et le sous total 
    useEffect(() => {
        cartData.forEach((item) => {
            setSubTotal(subtotal + (item.price * item.quantity))
            setTotalItems(totalitems + item.quantity)
        })
    }, [cartData])
    return (
        <div className="col-md-5">
            <div className="p-4  ">
                <p className="title">Votre commande</p>
                {cartData.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    cartData.map((item) => (
                        <div className="d-flex justify-content-between image" key={item.id}>
                            <img className="image" src={item.image} width="45" height="45" />
                            <span className="badge">{item.quantity}</span>
                            <p className="article">{item.name}</p>

                            <p className="article">{item.price}€</p>
                        </div>
                    ))
                )}

                <hr />
                <div className="d-flex justify-content-between">
                    <p >Sous-total - {totalitems} items</p>
                    <p>{subtotal}€</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Livraison</p>
                    <p>{shippingcost}€</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Taxes estimées</p>
                    <p>0€</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <p className="total">Total</p>
                    <p className="total">{parseFloat(shippingcost) + parseFloat(subtotal)}€</p>
                </div>
                <CustomerGuarantees />

            </div>
        </div>
    )
}

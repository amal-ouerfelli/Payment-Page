"use client"
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import ShippingMethod from "../components/shippingmethod";
import CommandRecap from "../components/commandRecap";
import BillingForm from "../components/billingForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [adress, setAdress] = useState('')
    const [additionnalAdress, setAddtionnalAdress] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')
    const [shippingcost, setShippingCost] = useState(0)
    const [showBilling, setShowBilling] = useState(false)
    const [subtotal, setSubTotal] = useState(0)

    // Pour que le prix de la livraison revient à 0 à chaque fois qu'on change le pays
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
        setShippingCost(0)
    }
    return (
        <div className="container my-5 bg-secondary bg-opacity-10 ">
            <div className="row justify-content-md-center">
                {/* Formulaire */}
                <div className="col-md-7">
                    <div className="p-4 border rounded bg-white">
                        <p className="title">Contact</p>
                        <p className="text-muted" style={{ fontSize: "12px" }}>Entrez vos informations de contact</p>
                        <div>
                            <label className="form-check-label" htmlFor="email">
                                Email
                            </label>
                            <input type="email" value={email} className="form-control mb-3" placeholder="Indiquez votre email" onChange={(e) => setEmail(e.target.value)} id={"email"} />
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input custom-control-input" type="checkbox" id="newsletter" />
                            <label className="form-check-label" style={{ fontSize: "13px" }} htmlFor="newsletter">
                                J'accepte de recevoir des emails marketing
                            </label>
                        </div>

                        <p className="title">Adresse de Livraison</p>
                        <p className="text-muted" style={{ fontSize: "12px", marginTop: -10 }}>Entrez votre adresse de livraison</p>

                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="firstname">
                                    Prénom
                                </label>
                                <input type="text" value={firstname} className="form-control mb-3" placeholder="Indiquez votre prenom" onChange={(e) => setFirstname(e.target.value)} id='firstname' />
                            </div>
                            <div className="col-md-6">
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="lastname">
                                    Nom
                                </label>
                                <input type="text" value={lastname} className="form-control mb-3" placeholder="Indiquez votre nom" onChange={(e) => setLastname(e.target.value)} id='lastname' />
                            </div>
                        </div>
                        <div>
                            <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="adress">
                                Adresse
                            </label>
                            <input type="text" value={adress} className="form-control mb-3" placeholder="123 rue principale, Ville, Pays" onChange={(e) => setAdress(e.target.value)} id="adress" />
                        </div>
                        <div>
                            <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="additional address">
                                Adresse complémentaire (optionnel)
                            </label>
                            <input type="text" value={additionnalAdress} className="form-control mb-3" placeholder="Adresse complémentaire" onChange={(e) => setAddtionnalAdress(e.target.value)} id="additional address" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="country">
                                Pays
                            </label>
                            <select value={country} className="form-control mb-3" id="country" onChange={(e) => onChangeCountry(e)}>
                                <option disabled value="">
                                    Selectionnez un pays
                                </option>
                                <option value='france'>France</option>
                                <option value='belgique'>Belgique</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="city">
                                    Ville
                                </label>
                                <input type="text" value={city} className="form-control mb-3" placeholder="Indiquez votre ville" id="city" onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="state">
                                    État
                                </label>
                                <input type="text" value={state} className="form-control mb-3" placeholder="Indiquez votre etat" onChange={(e) => setState(e.target.value)} id="state" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="zip code">
                                    Code Postal
                                </label>
                                <input type="text" value={zipcode} className="form-control mb-3" placeholder="Indiquez votre code postal" onChange={(e) => setZipcode(e.target.value)} id="zip code" />
                            </div>
                            <div>
                                <label className="form-check-label" style={{ fontSize: "15px" }} htmlFor="phone">
                                    Téléphone
                                </label>
                                <input type="tel" value={phone} className="form-control mb-3" placeholder="Indiquez votre numero de telephone" onChange={(e) => setPhone(e.target.value)} id="phone" />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input custom-control-input" type="checkbox" id="billingAdress" onChange={() => setShowBilling(!showBilling)} />
                                <label className="form-check-label" style={{ fontSize: "13px" }} htmlFor="billingAdress">
                                    L'adresse de facturation est différente de l'adresse de livraison
                                </label>
                            </div>
                            {showBilling && <BillingForm />}
                        </div>

                        <ShippingMethod country={country} setShippingCost={(cost) => setShippingCost(cost)} />

                        <Elements stripe={stripePromise}>
                            <CheckoutForm firstName={firstname} lastName={lastname} email={email} phone={phone} city={city} country={country} state={state} total={parseFloat(shippingcost) + parseFloat(subtotal)} />
                        </Elements>
                    </div>
                </div>

                {/* Récapitulatif */}
                <CommandRecap shippingcost={shippingcost} subtotal={subtotal} setSubTotal={(e) => setSubTotal(e)} />
            </div>
        </div>
    );
}

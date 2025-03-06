"use client"
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Image from 'next/image';


export default function CheckoutForm({ firstName, lastName, email, phone, city, country, address, state }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const countryCode = country === 'france' ? 'FR' : 'BE'
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        // Vérifie que Stripe et les éléments sont bien chargés
        if (!stripe || !elements) return;


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            // Récupère l'élément de carte bancaire
            card: elements.getElement(CardElement),
            billing_details: {
                name: firstName + " " + lastName,
                email,
                phone,
                address: {
                    city,
                    country: countryCode,
                    line1: address,
                    state
                }
            }
        });

        // Gère les erreurs de création du paiement
        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            console.log("Paiement réussi", paymentMethod);
            setSuccess(true);
        }
        setLoading(false);
    };

    return (
        <div>
            <p className="title">Paiement</p>
            <p className="text-muted" style={{ fontSize: "12px" }}>Sélectionnez votre méthode de paiement ci-dessous. Toutes les transactions sont sécurisées et cryptées</p>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <div className="mb-3">
                    <CardElement className="form-control p-2" />
                </div>
                {error && <p className="text-danger">{error}</p>}
                {success ? (
                    <p className="text-success">Paiement réussi ! 🎉</p>
                ) : (
                    <button type="submit" className="btn btn-warning w-100" disabled={!stripe || loading || firstName === '' || lastName === '' || email === "" || phone === '' || city === '' || country === '' || address === '' || state === ''}>
                        {loading ? "Traitement..." : "Payer"}
                    </button>
                )}
                <div className="text-center mt-3">
                    <p className="text-muted " style={{ fontSize: "12px" }}>Toutes les transactions sont sécurisées et cryptées.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <Image src="/visa.svg" alt="Visa" width={50} height={30} />
                        <Image src="/mastercard.png" alt="Visa" width={50} height={30} />
                    </div>
                </div>
            </form>
        </div>
    );
};
"use client"

import { useEffect, useState } from "react"

export default function ShippingMethod({ country, setShippingCost }) {
    const [cost, setCost] = useState(0)

    // pour recalculer à chaque fois le prix de la livraison
    useEffect(() => {
        setShippingCost(cost)
    },
        [cost])

        // A chaque fois qu'on change le pays, la livraison revient standard et le prix revient 0
    useEffect(() => {
        setCost(0)
    }, [country])
    
    return (
        <div >
            <p className="title">Méthode de Livraison</p>
            <p className="text-muted" style={{ fontSize: "12px" }}>Sélectionner votre méthode de livraison ci-dessous</p>
            {country !== '' && country ?
                <select value={cost} className="form-control mb-3" onChange={(e) => setCost(e.target.value)}>
                    <option value={0}>Standard (gratuite)</option>
                    <option value={country === 'france' ? 5 : 8}>{country === 'france' ? "Express (5€)" : "Express(8€)"}</option>
                </select> :
                <div className="bg-secondary p-2 text-dark bg-opacity-10 rounded">
                    <p className="information">Information</p>
                    <p className="information">
                        Sélectionnez un pays pour voir les méthodes d'expédition disponibles
                    </p>
                </div>}
        </div>
    )
}
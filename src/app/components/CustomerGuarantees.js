"use client"

import Image from "next/image"

export default function CustomerGuarantees() {

    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                    <Image src="/okIcon.png" alt="ok icon" width={35} height={35} />
                </div>
                <div className="col-md-11">
                    <p>Service Client</p>
                    <p className="text-muted" style={{ fontSize: "12px", marginTop: -10 }}>Nous Répondons à vos questions du lundi au vendredi de 9h à 23h</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1">
                    <Image src="/calendar.png" alt="ok icon" width={25} height={25} />
                </div>
                <div className="col-md-11">
                    <p>Satisfait ou remboursé 30 jours</p>
                    <p className="text-muted" style={{ fontSize: "12px", marginTop: -10 }}>Insatisfait? Remboursement facile et sans condition. Votre satisfaction est notre priorité</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1">
                    <Image src="/expedition.png" alt="ok icon" width={30} height={30} />
                </div>
                <div className="col-md-11">
                    <p>Expédition en 48h</p>
                    <p className="text-muted" style={{ fontSize: "12px", marginTop: -10 }}>Benéficiez d'une expédition ultra-rapide avec suivi en seulement 48 heures </p>
                </div>
            </div>

        </div>
    )
}
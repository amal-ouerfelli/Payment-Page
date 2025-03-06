"use client"

import { useState } from "react"

export default function BillingForm() {
  const [adress, setAdress] = useState('')

  return (
    <div>
      <p className="title">Adresse de facturation</p>
      <p className="text-muted" style={{ fontSize: "12px", marginTop: -10 }}>Entrez votre adresse de facturation</p>
      <input type="text" value={adress} className="form-control mb-3" placeholder="123 rue principale, Ville, Pays" onChange={(e) => setAdress(e.target.value)} id="adress" />
    </div>
  )
}
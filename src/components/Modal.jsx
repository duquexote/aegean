import { useState } from 'react'

export default function Modal({ onClose }) {
    const [form, setForm] = useState({ name: '', phone: '', email: '' })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) onClose()
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Aqui você pode integrar com seu backend / Supabase / WhatsApp API
        onClose()
    }

    return (
        <div className="overlay active" onClick={handleOverlayClick}>
            <div className="modal">
                <button className="modal-close" onClick={onClose} aria-label="Fechar" />
                <span className="modal-label">Comunidade Exclusiva</span>
                <h3 className="modal-title">Solicite seu acesso</h3>
                <p className="modal-sub">
                    Preencha com seus dados. Entraremos em contato pelo WhatsApp para liberar seu acesso ao grupo privado.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome completo</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">WhatsApp</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="form-submit">QUERO MEU ACESSO →</button>
                </form>
            </div>
        </div>
    )
}

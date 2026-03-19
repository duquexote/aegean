import { useState } from 'react'

export default function Hero() {
    const [form, setForm] = useState({ nome: '', telefone: '', relogio: '' })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' })
    }

    function validate() {
        const errs = {}
        if (!form.nome.trim()) errs.nome = 'Nome obrigatório'
        if (!form.telefone.trim()) errs.telefone = 'Telefone obrigatório'
        if (!form.relogio) errs.relogio = 'Selecione uma opção'
        return errs
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            return
        }
        setLoading(true)

        try {
            await fetch('https://webhook.takeovers.com.br/webhook/29e9454e-5caa-4d8f-b9df-00366c8d3557', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: form.nome,
                    telefone: form.telefone,
                    relogio: form.relogio
                })
            })

            if (typeof window.fbq === 'function') {
                window.fbq('track', 'Lead')
            }

            window.location.href = 'https://chat.whatsapp.com/KOGuUGX5BGm9cAYgXMIh2h'
        } catch (error) {
            console.error('Erro ao enviar lead:', error)
            setLoading(false)
        }
    }

    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-content">
                <div className="logo-area">
                    <img src="/images/logo-aegean-azul.webp" alt="Aegean Watches &amp; Jewelry" className="logo-img" style={{ maxWidth: '100%', height: 'auto', maxHeight: '90px' }} />
                </div>
                <h1>
                    As peças mais <em>raras do Brasil</em><br />estão em um único lugar.
                </h1>
                <p className="hero-sub">
                    Modelos raros. Preços exclusivos. Autenticidade garantida — para quem leva coleção a sério.
                </p>

                {/* Container do formulário */}
                <div className="hero-form-container">
                    <form className="hero-form" onSubmit={handleSubmit} noValidate>
                        <div className="hero-form-group">
                            <label htmlFor="hero-nome">Nome completo</label>
                            <input
                                id="hero-nome"
                                name="nome"
                                type="text"
                                placeholder="Seu nome completo"
                                value={form.nome}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                            {errors.nome && <span className="hero-form-error">{errors.nome}</span>}
                        </div>

                        <div className="hero-form-group">
                            <label htmlFor="hero-telefone">Telefone (WhatsApp)</label>
                            <input
                                id="hero-telefone"
                                name="telefone"
                                type="tel"
                                placeholder="(11) 99999-9999"
                                value={form.telefone}
                                onChange={handleChange}
                                autoComplete="tel"
                            />
                            {errors.telefone && <span className="hero-form-error">{errors.telefone}</span>}
                        </div>

                        <div className="hero-form-group">
                            <label>Você já possui algum relógio de luxo?</label>
                            <div className="hero-radio-group">
                                {['Sim, tenho', 'Não tenho ainda', 'Já tive, mas vendi'].map(opt => (
                                    <label key={opt} className="hero-radio-label">
                                        <input
                                            type="radio"
                                            name="relogio"
                                            value={opt}
                                            checked={form.relogio === opt}
                                            onChange={handleChange}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.relogio && <span className="hero-form-error">{errors.relogio}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary hero-form-btn"
                            disabled={loading}
                        >
                            {loading ? 'Aguarde…' : 'QUERO MEU ACESSO'}
                        </button>
                    </form>

                    <div className="hero-badge">Vagas limitadas · Acesso por aprovação</div>
                </div>
            </div>
        </section>
    )
}

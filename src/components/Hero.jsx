export default function Hero({ onOpenModal }) {
    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-content">
                <div className="logo-area">
                    <img src="/images/logo-aegean-azul.webp" alt="Aegean Watches & Jewelry" className="logo-img" style={{ maxWidth: '100%', height: 'auto', maxHeight: '90px' }} />
                </div>
                <div className="hero-divider" />
                <h1>
                    As peças mais <em>raras do Brasil</em><br />estão em um único lugar.
                </h1>
                <p className="hero-sub">
                    Modelos raros. Preços exclusivos. Autenticidade garantida — para quem leva coleção a sério.
                </p>
                <div className="hero-badge">Vagas limitadas · Acesso por aprovação</div>
                <div className="hero-cta">
                    <button className="btn-primary" onClick={onOpenModal}>QUERO MEU ACESSO</button>
                </div>
            </div>
            <div className="scroll-hint">
                <span>Descubra</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}

import useReveal from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', children }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </Tag>
    )
}

const benefits = [
    {
        title: 'Acesso a Peças Raras',
        desc: 'Modelos descontinuados, edições limitadas e peças que não chegam ao mercado aberto.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <circle cx="18" cy="18" r="14" />
                <circle cx="18" cy="18" r="8" />
                <line x1="18" y1="4" x2="18" y2="8" />
                <line x1="18" y1="28" x2="18" y2="32" />
                <line x1="4" y1="18" x2="8" y2="18" />
                <line x1="28" y1="18" x2="32" y2="18" />
            </svg>
        ),
    },
    {
        title: 'Ofertas Privadas',
        desc: 'Preços negociados diretamente — sem markup de vitrine, sem intermediário desnecessário.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <path d="M6 18 L18 6 L30 18 L18 30 Z" />
                <path d="M12 18 L18 12 L24 18 L18 24 Z" fill="#1a2535" opacity="0.08" />
            </svg>
        ),
    },
    {
        title: 'Rotatividade de Estoque',
        desc: 'Novas peças chegando constantemente. Quem está na comunidade vê primeiro.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <path d="M4 28 L12 16 L20 22 L28 8" />
                <circle cx="28" cy="8" r="3" />
            </svg>
        ),
    },
    {
        title: 'Certificação e Garantia',
        desc: 'Cada peça verificada antes de ser anunciada. Procedência comprovada, documentação completa.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <path d="M8 8 H28 V26 L18 32 L8 26 Z" />
                <path d="M14 18 L17 21 L22 15" />
            </svg>
        ),
    },
    {
        title: 'Negociação Facilitada',
        desc: 'Compra e venda com suporte direto — do primeiro contato até a entrega na sua porta.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <path d="M6 12 Q18 4 30 12 L30 26 Q18 34 6 26 Z" />
                <circle cx="18" cy="19" r="4" />
            </svg>
        ),
    },
    {
        title: 'Entrega Segura em Todo Brasil',
        desc: 'Embalagem discreta, rastreamento completo e seguro do início ao fim.',
        icon: (
            <svg className="benefit-icon" viewBox="0 0 36 36" fill="none" stroke="#1a2535" strokeWidth="1.2">
                <rect x="6" y="10" width="24" height="18" rx="1" />
                <path d="M12 10 V7 Q18 4 24 7 V10" />
                <line x1="18" y1="17" x2="18" y2="21" />
                <circle cx="18" cy="16" r="1.5" fill="#1a2535" />
            </svg>
        ),
    },
]

export default function Benefits() {
    return (
        <section className="benefits">
            <div className="benefits-header">
                <div>
                    <Reveal as="span" className="section-label">Benefícios</Reveal>
                    <Reveal as="h2" className="section-title">
                        O que você<br />encontra <em>dentro.</em>
                    </Reveal>
                </div>
                <Reveal as="p" className="benefits-intro">
                    A Aegean não é uma loja. É um ecossistema privado onde compradores e vendedores sérios têm acesso
                    a peças que simplesmente não aparecem em nenhum outro lugar.
                </Reveal>
            </div>
            <div className="benefits-grid">
                {benefits.map((b) => (
                    <Reveal key={b.title} className="benefit-item">
                        {b.icon}
                        <div className="benefit-title">{b.title}</div>
                        <p className="benefit-desc">{b.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

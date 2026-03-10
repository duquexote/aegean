import useReveal from '../hooks/useReveal'
import './SocialProof.css'

function Reveal({ as: Tag = 'div', className = '', children, style }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`} style={style}>
            {children}
        </Tag>
    )
}

const proofs = [
    { src: '/images/prova-1.webp', alt: 'Prova social 1' },
    { src: '/images/prova-2.webp', alt: 'Prova social 2' },
    { src: '/images/prova-3.webp', alt: 'Prova social 3' },
]

export default function SocialProof() {
    return (
        <section className="social-proof">
            <div className="social-proof-bg" />
            <div className="social-proof-header">
                <Reveal as="span" className="section-label">Comunidade</Reveal>
                <Reveal as="h2" className="section-title">
                    O que dizem os que<br /><em>já estão dentro.</em>
                </Reveal>
            </div>

            <div className="evidence-grid">
                {proofs.map((proof, i) => (
                    <Reveal key={i} className="print-card print-card--image">
                        <img
                            src={proof.src}
                            alt={proof.alt}
                            className="proof-img"
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

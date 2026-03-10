import useReveal from '../hooks/useReveal'

function RevealEl({ as: Tag = 'div', className = '', children, style }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`} style={style}>
            {children}
        </Tag>
    )
}

export default function About() {
    return (
        <section className="about">
            <div className="about-image">
                <img src="/images/eduardo.webp" alt="Eduardo Dourado — Aegean" />
                <div className="about-image-overlay" />
            </div>
            <div className="about-content">
                <RevealEl as="span" className="section-label">Fundador</RevealEl>
                <RevealEl as="h2" className="section-title">
                    Sou Eduardo<br /><em>Dourado.</em>
                </RevealEl>
                <RevealEl as="p" className="about-text">
                    Fundador da Aegean Watches &amp; Jewelry. Há anos conecto{' '}
                    <strong>colecionadores, investidores e empresários</strong> às peças mais raras do mercado brasileiro.
                    <br /><br />
                    Cada transação que passa pela Aegean tem procedência verificada, documentação completa e entrega garantida.{' '}
                    <strong>Não construí uma loja — construí uma comunidade onde negócios sérios acontecem entre pessoas sérias.</strong>
                </RevealEl>
                <RevealEl className="about-stat">
                    <div className="stat-item">
                        <div className="stat-num">100+</div>
                        <div className="stat-label">Transações realizadas</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">Zero</div>
                        <div className="stat-label">Dor de cabeça</div>
                    </div>
                </RevealEl>
            </div>
        </section>
    )
}

import useReveal from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', children }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </Tag>
    )
}

export default function CtaFinal({ onOpenModal }) {
    return (
        <section className="cta-final">
            <div className="cta-bg" />
            <div className="cta-content">
                <Reveal as="span" className="section-label">Acesso exclusivo</Reveal>
                <Reveal as="h2" className="cta-title">
                    As melhores peças não ficam<br />disponíveis por <em>muito tempo.</em>
                </Reveal>
                <Reveal as="p" className="cta-sub">
                    As melhores peças saem em horas. Quem está dentro sabe disso primeiro.
                </Reveal>
                <Reveal>
                    <button className="btn-primary" onClick={onOpenModal}>QUERO MEU ACESSO</button>
                </Reveal>
            </div>
        </section>
    )
}

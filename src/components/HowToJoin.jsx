import useReveal from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', children, style }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`} style={style}>
            {children}
        </Tag>
    )
}

const steps = [
    {
        num: '01',
        title: 'Preencha o formulário',
        desc: 'Informe seus dados básicos para iniciar o processo de aprovação.',
    },
    {
        num: '02',
        title: 'Receba o link no WhatsApp',
        desc: 'Após análise, você recebe o acesso direto no seu WhatsApp.',
    },
    {
        num: '03',
        title: 'As ofertas começam',
        desc: 'Dentro do grupo, você vê primeiro. Peças raras. Preços reais. Sem intermediários desnecessários.',
    },
]

export default function HowToJoin({ onOpenModal }) {
    return (
        <section className="how">
            <div className="how-inner">
                <div className="how-content">
                    <Reveal as="span" className="section-label">Como participar</Reveal>
                    <Reveal as="h2" className="section-title" style={{ color: 'var(--ivory)' }}>
                        Três passos para<br /><em>estar dentro.</em>
                    </Reveal>
                    <Reveal as="p" className="how-text">
                        O processo é simples. O acesso é gratuito. O que está dentro, não tem preço.
                    </Reveal>
                    <Reveal style={{ marginTop: '40px' }}>
                        <button className="btn-primary" onClick={onOpenModal}>SOLICITAR ACESSO</button>
                    </Reveal>
                </div>
                <div className="steps">
                    {steps.map((s) => (
                        <Reveal key={s.num} className="step">
                            <div className="step-num">{s.num}</div>
                            <div className="step-body">
                                <div className="step-title">{s.title}</div>
                                <p className="step-desc">{s.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

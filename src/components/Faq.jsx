import { useState } from 'react'
import useReveal from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', children }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </Tag>
    )
}

const faqs = [
    {
        q: 'Preciso pagar para entrar na comunidade?',
        a: 'Não. O acesso à comunidade é completamente gratuito. Você paga apenas pelas peças que decidir adquirir — sem taxa de entrada, sem mensalidade.',
    },
    {
        q: 'As peças são originais e com procedência?',
        a: 'Sim. Todas as peças anunciadas passam por verificação rigorosa antes de entrar na comunidade. Documentação completa e garantia incluídas em cada transação.',
    },
    {
        q: 'Como são feitas as entregas?',
        a: 'Entregamos em todo o Brasil. De preferência, a entrega é feita sempre em mãos ao comprador via portadores de confiança. Eventualmente utilizamos transportadora, com seguro e rastreamento completo.',
    },
    {
        q: 'Quem pode participar da comunidade?',
        a: 'O acesso é por aprovação. Buscamos empresários, colecionadores e investidores que levam o mercado de relojoaria e joias a sério. O formulário é o primeiro passo.',
    },
]

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`faq-item${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
            <div className="faq-question">
                <span className="faq-q-text">{q}</span>
                <span className="faq-icon" />
            </div>
            <div className="faq-answer">
                <p className="faq-a-text">{a}</p>
            </div>
        </div>
    )
}

export default function Faq() {
    return (
        <section className="faq">
            <div className="faq-inner">
                <div className="faq-header">
                    <Reveal as="span" className="section-label">Dúvidas</Reveal>
                    <Reveal as="h2" className="section-title">
                        Perguntas<br /><em>frequentes.</em>
                    </Reveal>
                    <Reveal as="p">Transparência é parte da nossa entrega. Se restar alguma dúvida, estamos disponíveis.</Reveal>
                </div>
                <Reveal className="faq-list">
                    {faqs.map((item) => (
                        <FaqItem key={item.q} q={item.q} a={item.a} />
                    ))}
                </Reveal>
            </div>
        </section>
    )
}

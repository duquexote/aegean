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
    {
        avatar: 'A',
        name: 'Advogado SP',
        initialTime: '10:42',
        replyTime: '10:45',
        receivedMsg: 'Eduardo, fala meu velho! Aquele Daytona que você postou hoje cedo ainda tá na mão? Tenho interesse.',
        sentMsg: 'Opa, bom dia! Cara, esse foi rápido, segurei pra um cliente faz 10 minutos. Mas consigo outro na mesma condição até o fim da semana. Te aviso primeiro?',
        receivedMsg2: 'Pode avisar! Confio na sua curadoria.',
        time2: '10:46'
    },
    {
        avatar: 'E',
        name: 'Empresário PR',
        initialTime: '14:20',
        replyTime: '14:22',
        receivedMsg: 'Fala meu querido! Peça recebida aqui. Condição absurda, impecável como você falou. Deu tudo certo com o seguro também.',
        sentMsg: 'Excelente! Fico muito feliz. Qualquer coisa que precisar pra coleção, já sabe.',
        receivedMsg2: 'Cereteza. Aquilo lá que comentamos do Patek, se pintar algo no radar, me dá um toque.',
        time2: '14:25'
    },
    {
        avatar: 'M',
        name: 'Médico RJ',
        initialTime: '18:15',
        replyTime: '18:18',
        receivedMsg: 'Irmão, passando pra agradecer a paciência. Primeira peça de alto valor que pego fora da boutique, tava com receio.',
        sentMsg: 'Que isso, normal! A gente preza justamente por essa paz de espírito. Aproveita o relógio!',
        receivedMsg2: 'Pode deixar! Já tô de olho nos próximos do grupo haha',
        time2: '18:19'
    }
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
                    <Reveal key={i} className="print-card">
                        <div className="print-header">
                            <div className="print-avatar">{proof.avatar}</div>
                            <div className="print-header-info">
                                <span className="print-header-title">{proof.name}</span>
                                <span className="print-header-status">Online</span>
                            </div>
                        </div>

                        <div className="print-body">
                            <div className="msg-bubble msg-received">
                                {proof.receivedMsg}
                                <span className="msg-time">{proof.initialTime}</span>
                            </div>

                            <div className="msg-bubble msg-sent">
                                {proof.sentMsg}
                                <span className="msg-time">{proof.replyTime}</span>
                            </div>

                            <div className="msg-bubble msg-received">
                                {proof.receivedMsg2}
                                <span className="msg-time">{proof.time2}</span>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

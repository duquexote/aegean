import useReveal from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', children }) {
    const [ref, visible] = useReveal()
    return (
        <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </Tag>
    )
}

const profiles = [
    {
        key: 'executive',
        num: '01',
        title: 'Empresários',
        desc: 'Que sabem que o relógio certo comunica antes mesmo de você falar. É presença. É o detalhe que separa quem chegou de quem sempre esteve.',
    },
    {
        key: 'collector',
        num: '02',
        title: 'Colecionadores',
        desc: 'Que buscam peças raras, edições limitadas e modelos descontinuados — sem depender do mercado aberto ou de sorte.',
    },
    {
        key: 'investor',
        num: '03',
        title: 'Investidores',
        desc: 'Que enxergam valor onde poucos veem. Certos relógios valorizaram mais que ações nos últimos 5 anos — e eles sabem disso.',
    },
]

export default function ForWhom() {
    return (
        <section className="forwhom">
            <Reveal className="forwhom-header">
                <span className="section-label">Para quem é</span>
                <h2 className="section-title">
                    A comunidade foi feita<br />para quem <em>entende valor.</em>
                </h2>
            </Reveal>
            <div className="profiles-grid">
                {profiles.map((p) => (
                    <Reveal key={p.key} className="profile-card">
                        <div className={`profile-card-bg ${p.key}`} />
                        <div className="profile-card-content">
                            <div className="profile-num">{p.num}</div>
                            <div className="profile-title">{p.title}</div>
                            <p className="profile-desc">{p.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

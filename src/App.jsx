import { useState } from 'react'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import About from './components/About'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import HowToJoin from './components/HowToJoin'
import CtaFinal from './components/CtaFinal'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Hero onOpenModal={() => setModalOpen(true)} />
            <ForWhom />
            <About />
            <Benefits />
            <SocialProof />
            <HowToJoin onOpenModal={() => setModalOpen(true)} />
            <CtaFinal onOpenModal={() => setModalOpen(true)} />
            <Faq />
            <Footer />
            {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </>
    )
}

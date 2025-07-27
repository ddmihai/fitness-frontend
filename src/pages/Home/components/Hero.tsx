import PrimaryHeader from "../../../components/typography/PrimaryHeader"
import SecondaryHeader from "../../../components/typography/SecondaryHeader"
import HeroImage from '/images/hero.svg'
import { Link } from "react-router-dom"




const Hero = () => {
    return (
        <section className="flex flex-row items-center justify-center flex-wrap max-w-6xl mx-auto mt-10">
            <aside className="flex-1 basis-sm px-4">
                <PrimaryHeader colour="primary" title="Welcome to FitGo!" />
                <div className="mt-2">
                    <SecondaryHeader colour="primary" title="Where every goal has a starting point. Explore training, progress, and support — all in one place." />

                    <div className="mt-8">
                        <Link to='/signup' className="text-white bg-primary py-3 px-6 rounded-lg hover:bg-primary-dark hover:text-white" >Join us</Link>
                    </div>
                </div>
            </aside>



            <aside className="flex-1 basis-sm max-w-md">
                <img src={HeroImage} alt="Hero" className="w-full h-auto" />
            </aside>
        </section>
    )
}

export default Hero

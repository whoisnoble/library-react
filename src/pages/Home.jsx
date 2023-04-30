import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Features'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    )
}

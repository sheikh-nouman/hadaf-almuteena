import { ServiceSummary } from './home/serviceSummary'
import FixedFooter from './home/footer'
import NavBar from './home/navbar'

export default function Home() {
  return (
    <div>
        <NavBar />
        <ServiceSummary />
        <FixedFooter />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Join thousands of satisfied customers who trust ServiceHub for their
            home service needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Book a Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/provider/dashboard">Become a Provider</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA

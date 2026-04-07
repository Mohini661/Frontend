import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Trusted by 50,000+ customers
              </Badge>
              <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                Book Trusted Local Services{" "}
                <span className="text-primary">Instantly</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with verified professionals for all your home service
                needs. From plumbing to electrical, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/services">
                    Browse Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/provider/dashboard">Become a Provider</Link>
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Quick Booking</h3>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm">Service Type</label>
                    <select className="w-full rounded-lg border bg-background px-4 py-2">
                      <option>Select a service</option>
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>HVAC</option>
                      <option>Carpentry</option>
                      <option>Painting</option>
                      <option>Cleaning</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm">Your Location</label>
                    <input
                      type="text"
                      placeholder="Enter your zip code"
                      className="w-full rounded-lg border bg-background px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full rounded-lg border bg-background px-4 py-2"
                    />
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/services">Find Services</Link>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

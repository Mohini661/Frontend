import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Wrench, Zap, Droplet, PaintBucket, Wind, Hammer } from "lucide-react"

const Categories = () => {
  const categories = [
    { name: "Plumbing", icon: Droplet, color: "text-blue-500" },
    { name: "Electrical", icon: Zap, color: "text-yellow-500" },
    { name: "HVAC", icon: Wind, color: "text-cyan-500" },
    { name: "Carpentry", icon: Hammer, color: "text-amber-700" },
    { name: "Painting", icon: PaintBucket, color: "text-purple-500" },
    { name: "Cleaning", icon: Wrench, color: "text-green-500" },
  ]
  return (
    <>
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Popular Services</h2>
            <p className="text-muted-foreground">
              Browse our most requested service categories
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link key={category.name} to="/services">
                <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <category.icon
                      className={`mx-auto mb-3 h-12 w-12 ${category.color}`}
                    />
                    <h4 className="text-sm">{category.name}</h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories

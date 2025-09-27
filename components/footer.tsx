import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kenteng Magic</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Spesialis body repair profesional dengan pengalaman lebih dari 10 tahun. Kepercayaan dan kualitas adalah
              komitmen kami.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Layanan</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Perbaikan Denting</li>
              <li>Cat & Finishing</li>
              <li>Body Restoration</li>
              <li>Express Service</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Tegal Mraen, Sleman, Yogyakarta</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <div className="text-sm">
                  <div>+62 815 693 3499</div>
                  <div>+62 812 2579 8699</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sudarmanto499@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Kenteng Magic. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}

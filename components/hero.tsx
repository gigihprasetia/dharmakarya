import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Kenteng Magic "Dharma Karya"
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Spesialis Body Repair Profesional
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Kami menghadirkan solusi terbaik untuk perbaikan body kendaraan
              Anda dengan pengalaman bertahun-tahun. Kepercayaan dan kualitas
              adalah prioritas utama kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#gallery">
                <Button variant="outline" size="lg">
                  Lihat Portfolio
                </Button>
              </a>
            </div>

            <div className="flex justify-between max-w-[100%]  lg:max-w-[80%] mt-10">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-muted-foreground">Garansi Resmi</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-muted-foreground">Berpengalaman</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-muted-foreground">
                  Pengerjaan Cepat
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                // src="/professional-automotive-body-repair-workshop-with-.jpg"
                src="/16.jpg"
                alt="Kenteng Magic Workshop"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

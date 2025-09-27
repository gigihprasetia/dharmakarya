import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Clock, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Pelanggan Puas" },
  { icon: Trophy, value: "10+", label: "Tahun Pengalaman" },
  { icon: Clock, value: "24/7", label: "Konsultasi" },
  { icon: Star, value: "4.9", label: "Rating Pelanggan" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Mengapa Memilih Kenteng Magic Dharma Karya?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun di industri body repair,
                kami telah membantu ratusan pelanggan mengembalikan kendaraan
                mereka ke kondisi sempurna.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <div>
                  <h3 className="font-semibold mb-1">Tim Berpengalaman</h3>
                  <p className="text-muted-foreground">
                    Teknisi dengan keahlian tinggi di bidangnya
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <div>
                  <h3 className="font-semibold mb-1">Garansi Terpercaya</h3>
                  <p className="text-muted-foreground">
                    Memberikan garansi untuk setiap pekerjaan yang kami lakukan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

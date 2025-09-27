import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Paintbrush, Car, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Perbaikan Denting",
    description:
      "Mengembalikan bentuk body kendaraan yang penyok atau rusak dengan teknik profesional dan hasil sempurna.",
    features: ["Denting ringan hingga berat", "Hasil seperti baru"],
  },
  {
    icon: Paintbrush,
    title: "Cat & Finishing",
    description:
      "Layanan pengecatan berkualitas tinggi dengan warna yang presisi dan finishing yang tahan lama.",
    features: ["Cat Premium", "Color matching", "Finishing premium"],
  },
  {
    icon: Car,
    title: "Body Restoration",
    description:
      "Restorasi menyeluruh untuk kendaraan yang mengalami kerusakan parah atau ingin diperbaharui.",
    features: ["Restorasi total", "Bergaransi"],
  },
  {
    icon: Zap,
    title: "Express Service",
    description:
      "Layanan cepat untuk perbaikan ringan yang dapat diselesaikan dalam waktu singkat.",
    features: ["Same day service", "Booking", "Harga transparan"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Layanan Unggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan body repair dengan standar
            kualitas tinggi dan teknologi terdepan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

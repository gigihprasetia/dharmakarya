"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Lokasi",
    details: ["Tegal Mraen, Sleman", "Yogyakarta, Indonesia"],
  },
  {
    icon: Phone,
    title: "Telepon",
    details: ["+62 815 693 3499", "+62 812 2579 8699"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sudarmanto499@gmail.com"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Sabtu: 08:00 - 17:00", "Minggu: Tutup"],
  },
];

export function Contact() {
  const [message, setMessage] = useState({
    Nama: "",
    Telephone: "",
    Email: "",
    JenisKendaraan: "",
    Pesan: "",
  });

  function generateWhatsAppLink(phone: string, msg: typeof message): string {
    const text = `
Halo Dharma Karya,
Saya ingin menghubungi Anda dengan detail sebagai berikut:

Nama: ${msg.Nama || "-"}
Telepon: ${msg.Telephone || "-"}
Email: ${msg.Email || "-"}
Jenis Kendaraan: ${msg.JenisKendaraan || "-"}
Pesan: ${msg.Pesan || "-"}
    `;
    const encodedMessage = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }

  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openWa("628156933499");
  };

  const openWa = (phone: string) => {
    const waLink = generateWhatsAppLink(phone, message);
    window.open(waLink, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap membantu Anda dengan layanan body repair terbaik. Konsultasi
            gratis untuk semua kebutuhan perbaikan kendaraan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => {
                      if (info.title === "Telepon") {
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-5 my-2"
                          >
                            <p
                              className="text-muted-foreground text-sm cursor-pointer"
                              onClick={() => {
                                const extractTelephone = detail.replace(
                                  /[^a-zA-Z0-9]/g,
                                  ""
                                );

                                const waLink = generateWhatsAppLink(
                                  extractTelephone,
                                  message
                                );
                                window.open(waLink, "_blank");
                              }}
                            >
                              {detail}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <p
                          key={idx}
                          className="text-muted-foreground text-sm my-2"
                        >
                          {detail}
                        </p>
                      );
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan Kilat</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={Submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nama</label>
                    <Input
                      required
                      value={message.Nama}
                      onChange={(e) => {
                        setMessage((prev) => {
                          return { ...prev, Nama: e.target.value };
                        });
                      }}
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telepon</label>
                    <Input
                      required
                      value={message.Telephone}
                      onChange={(e) => {
                        setMessage((prev) => {
                          return { ...prev, Telephone: e.target.value };
                        });
                      }}
                      type="tel"
                      placeholder="Nomor telepon"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={message.Email}
                    onChange={(e) => {
                      setMessage((prev) => {
                        return { ...prev, Email: e.target.value };
                      });
                    }}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Jenis Kendaraan</label>
                  <Input
                    required
                    value={message.JenisKendaraan}
                    onChange={(e) => {
                      setMessage((prev) => {
                        return { ...prev, JenisKendaraan: e.target.value };
                      });
                    }}
                    placeholder="Mobil, Motor, dll."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pesan</label>
                  <Textarea
                    value={message.Pesan}
                    onChange={(e) => {
                      setMessage((prev) => {
                        return { ...prev, Pesan: e.target.value };
                      });
                    }}
                    placeholder="Ceritakan kerusakan atau kebutuhan perbaikan kendaraan Anda..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

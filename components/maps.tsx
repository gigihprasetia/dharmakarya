"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Clock, Star } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { icon: Users, value: "500+", label: "Pelanggan Puas" },
  { icon: Trophy, value: "10+", label: "Tahun Pengalaman" },
  { icon: Clock, value: "24/7", label: "Konsultasi" },
  { icon: Star, value: "4.9", label: "Rating Pelanggan" },
];

export function Maps() {
  return (
    <section id="maps" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Lokasi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami Tunggu Kehadirannya
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <a target="_blank" href="https://maps.app.goo.gl/7JhTHPzfCWx229tCA">
          <Button className="mb-5">Go Maps</Button>
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.412294608432!2d110.35846047455328!3d-7.746017876793638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58ee3cd1f787%3A0x2f140ec5b15fcb68!2sKenteng%20magic!5e0!3m2!1sid!2sid!4v1758952227122!5m2!1sid!2sid"
        width="100%"
        height="600"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

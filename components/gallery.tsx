"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Clock, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gallery Kenteng Magic Dharma Karya
          </p>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {Array.from({ length: 15 }, (_, i) => i + 1).map((e, i) => {
          return (
            <div key={i} className="flex-1">
              <img
                src={`/${e}.jpg`}
                className="w-full min-w-[250px] h-96  object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

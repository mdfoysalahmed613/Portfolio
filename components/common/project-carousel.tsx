"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
   images: string[];
   title: string;
   /** Show navigation arrows on hover */
   showArrows?: boolean;
   /** Enable autoplay */
   autoplay?: boolean;
   /** Autoplay delay in ms */
   autoplayDelay?: number;
   /** Additional class for the container */
   className?: string;
   /** Image sizes for responsive loading */
   sizes?: string;
   /** Priority loading for LCP images */
   priority?: boolean;
}

export default function ProjectCarousel({
   images,
   title,
   showArrows = false,
   autoplay = true,
   autoplayDelay = 3000,
   className,
   sizes = "(max-width: 768px) 100vw, 50vw",
   priority = false,
}: ProjectCarouselProps) {
   const plugins = autoplay
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]
      : [];

   if (images.length === 0) {
      return (
         <div className={cn("relative aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground", className)}>
            No image available
         </div>
      );
   }

   if (images.length === 1) {
      return (
         <div className={cn("relative aspect-video rounded-xl overflow-hidden border border-border", className)}>
            <Image
               src={images[0]}
               alt={title}
               fill
               className="object-cover"
               sizes={sizes}
               priority={priority}
            />
         </div>
      );
   }

   return (
      <div className={cn("relative aspect-video rounded-xl overflow-hidden border border-border group", className)}>
         <Carousel className="w-full h-full" plugins={plugins}>
            <CarouselContent>
               {images.map((image, index) => (
                  <CarouselItem key={index} className="relative aspect-video">
                     <Image
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes={sizes}
                        priority={priority && index === 0}
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            {showArrows && (
               <>
                  <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background" />
                  <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background" />
               </>
            )}
         </Carousel>
         {/* Dots indicator */}
         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
               <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-white/50"
               />
            ))}
         </div>
      </div>
   );
}

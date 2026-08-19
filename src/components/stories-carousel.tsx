import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

type Story = { name: string; exam: string; delta: string; quote: string };

export function StoriesCarousel({ stories }: { stories: Story[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-8">
      <CarouselContent className="-ml-4">
        {stories.map((s) => (
          <CarouselItem key={s.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <div className="glass h-full rounded-3xl p-6">
              <Quote className="h-5 w-5 text-gold" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{s.quote}”</p>
              <p className="mt-6 text-sm font-semibold">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.exam}</p>
              <p className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-gold">
                {s.delta}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex gap-2">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}

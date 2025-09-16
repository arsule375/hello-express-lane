import { Card } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "1968",
    title: "Intel Founded",
    description: "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "1971",
    title: "First Microprocessor",
    description: "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "1978",
    title: "8086 Processor",
    description: "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
    imageUrl: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "1985",
    title: "386 Processor",
    description: "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "2006",
    title: "Peak GHG Emissions",
    description: "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "2020",
    title: "RISE Strategy",
    description: "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "2022",
    title: "Net-Zero By 2040",
    description: "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "2023",
    title: "Renewable Electricity",
    description: "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    year: "2024",
    title: "Sustainability Summit",
    description: "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  }
];

export const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12 px-4 text-center shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-lg font-bold">Intel</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Sustainability Through the Ages</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore Intel's journey through time, discovering how our commitment
            to innovation has shaped a more sustainable future for technology 
            and our planet.
          </p>
        </div>
      </header>

      {/* Timeline */}
      <section className="py-8">
        <div className="flex flex-col md:flex-row md:overflow-x-auto gap-6 px-4 pb-4 md:scroll-smooth md:snap-x md:snap-mandatory">
          {timelineData.map((event, index) => (
            <Card key={index} className="flex-shrink-0 w-full md:w-80 bg-card border-2 border-blue-100 hover:border-primary hover:shadow-xl transition-all duration-300 md:snap-start">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 shadow-sm"
                />
                <time className="text-primary font-semibold text-sm mb-2 tracking-wide">
                  {event.year}
                </time>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-primary font-medium mt-6 px-4">
          Scroll to view timeline &nbsp;|&nbsp; Hover over cards to learn more!
        </p>
      </section>
    </div>
  );
};
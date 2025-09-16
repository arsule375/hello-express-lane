import React from 'react';
import { ChevronRight, Cpu, Leaf, Zap, Globe, Factory, Recycle, Target, Award } from 'lucide-react';

const timelineData = [
  {
    year: '1968',
    title: 'Intel Founded',
    description: 'Robert Noyce and Gordon Moore establish Intel with a vision to create semiconductor memory products.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format',
    icon: Factory
  },
  {
    year: '1971',
    title: 'First Microprocessor',
    description: 'Intel 4004, the world\'s first commercially available microprocessor, revolutionizes computing.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format',
    icon: Cpu
  },
  {
    year: '1993',
    title: 'Environmental Leadership',
    description: 'Intel becomes the first semiconductor company to eliminate ozone-depleting substances from manufacturing.',
    image: 'https://images.unsplash.com/photo-1574263867128-7e03f3c4d65c?w=400&h=250&fit=crop&auto=format',
    icon: Leaf
  },
  {
    year: '2008',
    title: 'Green Building Initiative',
    description: 'Intel invests $100M in green building technologies and sustainable facility design.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&auto=format',
    icon: Factory
  },
  {
    year: '2012',
    title: 'Renewable Energy',
    description: 'Intel becomes the largest voluntary purchaser of green power in the US EPA Green Power Partnership.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&auto=format',
    icon: Zap
  },
  {
    year: '2018',
    title: 'Carbon Neutral Manufacturing',
    description: 'Intel achieves carbon neutral manufacturing and sets ambitious 2030 sustainability goals.',
    image: 'https://images.unsplash.com/photo-1565618749003-eb9f58f6a1e4?w=400&h=250&fit=crop&auto=format',
    icon: Globe
  },
  {
    year: '2020',
    title: 'Circular Economy',
    description: 'Intel launches comprehensive circular economy initiatives, including waste reduction and material reuse programs.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&auto=format',
    icon: Recycle
  },
  {
    year: '2022',
    title: 'Net-Zero Commitment',
    description: 'Intel commits to net-zero greenhouse gas emissions across global operations by 2040.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop&auto=format',
    icon: Target
  },
  {
    year: '2024',
    title: 'Sustainability Leadership',
    description: 'Intel continues to lead the industry in sustainable technology innovation and environmental stewardship.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format',
    icon: Award
  }
];

const SubscriptionForm = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 px-4 bg-card" role="complementary" aria-labelledby="subscription-heading">
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="subscription-heading" className="text-3xl font-bold text-card-foreground mb-4">
          Stay Updated on Intel's Sustainability Journey
        </h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to receive the latest updates on our environmental initiatives and sustainable technology innovations.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <label htmlFor="email-input" className="sr-only">Email address</label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            aria-describedby="email-description"
            className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <div id="email-description" className="sr-only">
            We'll send you updates about Intel's sustainability initiatives
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {isSubmitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm opacity-80">
          © 2024 Intel Corporation. All rights reserved. | 
          <a href="#" className="hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded">Privacy Policy</a> | 
          <a href="#" className="hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export const Timeline = () => {
  return (
    <div className="min-h-screen rtl:text-right ltr:text-left" style={{background: 'var(--intel-gradient)'}} dir="auto">
      {/* Header */}
      <header className="text-center py-12 px-4" role="banner">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center gap-3 rtl:flex-row-reverse">
          <Leaf className="w-12 h-12 rtl:ml-3 rtl:mr-0 ltr:mr-3 ltr:ml-0" aria-hidden="true" />
          Sustainability Through the Ages
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore Intel's journey towards environmental responsibility and sustainable innovation
        </p>
      </header>

      {/* Timeline */}
      <main className="pb-16" role="main">
        {/* Desktop Timeline */}
        <div className="hidden lg:block px-8">
          <div className="overflow-x-auto rtl:overflow-x-reverse" role="region" aria-label="Timeline of Intel sustainability milestones">
            <div className="flex gap-8 pb-8 rtl:flex-row-reverse rtl:pr-8 rtl:pl-0 ltr:pl-0 ltr:pr-8" style={{minWidth: 'max-content'}}>
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <article key={index} className="flex-shrink-0 w-80">
                    <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                      <img 
                        src={item.image} 
                        alt={`Visual representation of ${item.title} from ${item.year}`}
                        className="w-full h-48 object-cover rounded-t-xl"
                        loading="lazy"
                      />
                      <div className="p-6">
                        <div className="text-primary font-bold text-xl mb-2 flex items-center gap-2 rtl:flex-row-reverse">
                          <IconComponent className="w-5 h-5 rtl:ml-2 rtl:mr-0 ltr:mr-2 ltr:ml-0" aria-hidden="true" />
                          <time dateTime={item.year}>{item.year}</time>
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                        <button 
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 rtl:flex-row-reverse"
                          aria-label={`Learn more about ${item.title}`}
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden px-4">
          <div className="space-y-8" role="region" aria-label="Timeline of Intel sustainability milestones">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <article key={index} className="bg-card rounded-xl shadow-lg">
                  <img 
                    src={item.image} 
                    alt={`Visual representation of ${item.title} from ${item.year}`}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="text-primary font-bold text-xl mb-2 flex items-center gap-2 rtl:flex-row-reverse">
                      <IconComponent className="w-5 h-5 rtl:ml-2 rtl:mr-0 ltr:mr-2 ltr:ml-0" aria-hidden="true" />
                      <time dateTime={item.year}>{item.year}</time>
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <button 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 rtl:flex-row-reverse"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      
      <SubscriptionForm />
      <Footer />
    </div>
  );
};
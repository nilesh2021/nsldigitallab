import { Search, Target, TrendingUp, Megaphone, BarChart3, Mail } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "SEO Growth",
    description: "Boost your organic visibility and rank higher on search engines with our proven SEO strategies."
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with compelling content and targeted campaigns."
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with data-driven paid advertising campaigns on Google, Facebook, and more."
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your target audience."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive analytics and transparent reporting."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email marketing campaigns."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-18 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16"><span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">  Services</span>
         
          
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#202851] leading-tight"> Digital Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive digital marketing solutions tailored to help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
group
bg-white
p-7
rounded-2xl
shadow-sm
hover:shadow-2xl
transition-all
duration-300
border
border-gray-100
hover:border-[#24c2f2]/30
hover:-translate-y-1
h-full
"
            >
              <div className=" w-14
  h-14
  bg-[#24c2f2]/10
  rounded-2xl
  flex
  items-center
  justify-center
  mb-5
  group-hover:bg-[#24c2f2]
  transition-all
  duration-300">
                <service.icon className="w-7 h-7 text-[#24c2f2] group-hover:text-white transition-colors duration-300" />
              </div>
             <h3 className="text-lg font-semibold mb-3 text-[#202851]">{service.title}</h3>
             <p className="text-gray-600 leading-7 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

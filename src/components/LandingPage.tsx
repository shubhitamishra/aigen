
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  ShieldIcon,
  SmartphoneIcon,
  BrainCircuitIcon,
  PlayIcon,
  StarIcon,
  UsersIcon,
  ZapIcon,
  ClockIcon,
  HeartIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });

  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonialInView = useInView(testimonialRef, { once: false, amount: 0.3 });

  const services = [
    {
      icon: <BrainCircuitIcon size={40} className="text-blue-500" />,
      title: "AI Solutions",
      description: "Custom AI chatbots, personalized AI agents, and intelligent automation solutions.",
    },
    {
      icon: <Code2Icon size={40} className="text-green-500" />,
      title: "Web Services",
      description: "Dynamic, responsive websites and web applications built with modern technologies.",
    },
    {
      icon: <SmartphoneIcon size={40} className="text-purple-500" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <ShieldIcon size={40} className="text-red-500" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
    },
  ];

  const features = [
    {
      icon: <ZapIcon className="h-6 w-6 text-blue-500" />,
      title: "Innovation First",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-red-500" />,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to achieve your goals.",
    },
    {
      icon: <CheckIcon className="h-6 w-6 text-green-500" />,
      title: "Quality Code",
      description: "We maintain high standards in our development practices and deliverables.",
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-orange-500" />,
      title: "Fast Delivery",
      description: "Efficient processes ensure timely delivery without compromising quality.",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp",
      content: "CodeResite transformed our business with their AI solutions. Exceptional quality and delivery!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "InnovateLabs",
      content: "Outstanding web development services. The team exceeded our expectations in every way.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      company: "FutureAI",
      content: "Professional cybersecurity consulting that gave us peace of mind. Highly recommended!",
      rating: 5,
    },
  ];

  const partners = [
    "TechCorp", "InnovateLabs", "FutureAI", "SecureNet", 
    "WebPro", "CloudTech", "DataSys", "SmartSolutions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Create Ideas into Reality
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses with cutting-edge AI solutions, web services, and cybersecurity
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={onGetStarted}
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="link" className="p-0 h-auto">
                      See our Demo
                      <PlayIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">NEW</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Beta</span>
                </div>
                <p className="text-lg font-medium">One-stop solution for creators - AI tools, templates, and more</p>
                <ArrowRightIcon className="h-5 w-5 mt-2 mx-auto text-blue-600" />
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About CodeResite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={aboutInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialRef}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={testimonialInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">See what our clients say about working with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={testimonialInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600">Trusted by leading companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-xl font-semibold text-gray-500">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to transform your business? Let's discuss how we can help.</p>
            </div>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input placeholder="Phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Required *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI Solutions</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="app">App Development</SelectItem>
                        <SelectItem value="security">Cybersecurity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CodeResite</h3>
              <p className="text-gray-400">Empowering businesses with cutting-edge AI solutions and digital services.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/presentation-maker" className="hover:text-white">Presentation Maker</Link></li>
                <li><Link to="/founders" className="hover:text-white">Founder</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/new" className="hover:text-white">Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>shubhitamishra@gmail.com</li>
                <li>India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CodeResite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

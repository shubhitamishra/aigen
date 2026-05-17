
import { motion } from "framer-motion";
import { Code2Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Founders = () => {
  const founders = [
    {
      name: "Balkrishna Garg",
      role: "Founder and CEO",
      description: "Certified Ethical Hacker, Linux, Arch, Offensive & Defensive security",
      image: "https://placehold.co/400x400/3B82F6/ffffff?text=BG",
      skills: ["Ethical Hacking", "Linux", "Security"],
    },
    {
      name: "Sanskar Dubey",
      role: "Founder and Director",
      description: "MediaWiki Open source Contributor, MERN Stack developer, AI Engineer",
      image: "https://i.ibb.co/rfNgMTKQ/sanskar.jpg",
      skills: ["MERN Stack", "AI", "Open Source"],
    },
    {
      name: "Mohd Zaid Sayyed",
      role: "Co-founder and Managing Director",
      description: "@GDG Prayagraj | Hackathons Winner | App Developer (Flutter/Dart)",
      image: "https://i.ibb.co/KpbxmG3X/zaid.jpg",
      skills: ["Flutter", "Dart", "Mobile Development"],
    },
    {
      name: "Shiva Pandey",
      role: "Chief Operating Officer (COO)",
      description: "Next Js Web developer || Python (Gen AI / ML / Deep Learning) || Hackathon Winner",
      image: "https://i.ibb.co/9kJL6FqV/shiva.jpg",
      skills: ["Next.js", "Python", "AI/ML"],
    },
    {
      name: "Devendra Singh",
      role: "Chief Technology Officer",
      description: "Full Stack Web Developer || Python & ML enthusiast || GSSoC'24 || Building Scalable Web Project's",
      image: "https://i.ibb.co/MDYttnhr/dev.jpg",
      skills: ["Full Stack", "Python", "ML"],
    },
    {
      name: "Adarsh Shukla",
      role: "Chief Marketing Officer (CMO)",
      description: "Data analytics | Data visualisation | Microsoft products propensity",
      image: "https://placehold.co/400x400/8B5CF6/ffffff?text=AS",
      skills: ["Data Analytics", "Marketing", "Microsoft"],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Founders
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The innovative minds behind CodeResite, driving excellence in technology
          </motion.p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                      <AvatarImage src={founder.image} alt={founder.name} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{founder.role}</p>
                    <p className="text-gray-600 mb-4 text-sm">{founder.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {founder.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2Icon size={24} className="text-blue-400" />
                <span className="text-xl font-bold">CodeResite</span>
              </div>
              <p className="text-gray-400">Empowering businesses with cutting-edge AI solutions and digital services.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/founders" className="hover:text-white">Founders</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/new" className="hover:text-white">New Tools</Link></li>
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
                <li>contact@coderesite.com</li>
                <li>+91 79920 89454</li>
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
};

export default Founders;

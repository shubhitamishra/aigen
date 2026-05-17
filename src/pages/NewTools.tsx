
import { motion } from "framer-motion";
import { Code2Icon, ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const NewTools = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "social-media",
      title: "Social Media Creators",
      isActive: false,
    },
    {
      id: "students",
      title: "Students",
      isActive: true,
    },
    {
      id: "marketing",
      title: "Marketing",
      isActive: true,
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      isActive: false,
    },
  ];

  const tools = [
    {
      title: "Presentation Maker",
      category: "students",
      onClick: () => navigate("/presentation-maker"),
    },
    {
      title: "Resume Builder",
      category: "students",
    },
    {
      title: "ATS Enhancer",
      category: "students",
    },
    {
      title: "Learning Guide",
      category: "students",
    },
    {
      title: "Career Roadmaps",
      category: "students",
    },
    {
      title: "Report Generator",
      category: "marketing",
    },
    {
      title: "Diagram Flow Creator",
      category: "students",
    },
  ];

  const handleToolClick = (tool: any) => {
    if (tool.onClick) {
      tool.onClick();
    }
  };

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
            AI Tools Suite
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive collection of AI-powered tools designed for creators, students, marketers, and security professionals
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant={category.isActive ? "default" : "outline"}
                  className={`px-6 py-3 ${
                    category.isActive 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!category.isActive}
                >
                  {category.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full hover:shadow-lg transition-all ${
                    tool.onClick ? "cursor-pointer hover:scale-105" : ""
                  }`}
                  onClick={() => handleToolClick(tool)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">🛠️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      disabled={!tool.onClick}
                    >
                      {tool.onClick ? "Explore Tool" : "Coming Soon"}
                      {tool.onClick && <ArrowRightIcon className="ml-2 h-4 w-4" />}
                    </Button>
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

export default NewTools;

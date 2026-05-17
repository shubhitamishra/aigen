
import { motion } from "framer-motion";
import { Code2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
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
            Blog
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest in AI, web development, and technology
          </motion.p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're working on exciting content about AI innovations, development tutorials, and industry insights. Stay tuned!
            </p>
          </motion.div>
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

export default Blog;

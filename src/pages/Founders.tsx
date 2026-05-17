
import { motion } from "framer-motion";
import { Code2Icon, Sparkles, Rocket, Globe, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";

const Founders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <NavBar onThemeChange={() => {}} />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            className="text-center text-blue-400 tracking-[0.3em] uppercase text-sm font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            The Visionary
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Meet Our Founder
          </motion.h1>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The innovative mind driving cutting-edge AI solutions and digital excellence
          </motion.p>
        </div>
      </section>

      {/* Founder Card */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/[0.04] backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/5">
              <CardContent className="p-0">
                <div className="md:flex">
                  {/* Left — Avatar & Identity */}
                  <div className="md:w-2/5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex flex-col items-center justify-center p-10 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-60" />
                      <Avatar className="h-36 w-36 relative ring-2 ring-white/20">
                        <AvatarImage src="https://placehold.co/400x400/3B82F6/ffffff?text=SM" alt="Shubhita Mishra" />
                        <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                          SM
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Shubhita Mishra</h3>
                    <p className="text-blue-400 font-medium mb-4">Founder & Director</p>
                    <div className="flex gap-3">
                      <a href="mailto:shubhitamishra@gmail.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white">
                        <Mail size={18} />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white">
                        <Globe size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Right — Details */}
                  <div className="md:w-3/5 p-10">
                    <p className="text-slate-300 leading-relaxed mb-8">
                      A passionate technologist and open-source contributor with deep expertise in
                      MERN stack development, AI engineering, and building scalable digital products.
                      Shubhita leads the vision of creating intelligent, user-centric solutions that
                      empower businesses to thrive in the digital age.
                    </p>

                    <h4 className="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium mb-4">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["MERN Stack", "AI / ML", "Open Source", "System Design", "Cloud Architecture", "Full Stack"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium mb-4">Highlights</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <Sparkles size={16} />, text: "MediaWiki Open Source Contributor" },
                        { icon: <Rocket size={16} />, text: "Built AI-powered presentation & content tools" },
                        { icon: <Globe size={16} />, text: "Delivered 50+ client projects across industries" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                          <span className="text-blue-400">{item.icon}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2Icon size={20} className="text-blue-400" />
              <span className="font-semibold text-white">CodeResite</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/blog" className="hover:text-white transition">Blog</Link>
              <Link to="/new" className="hover:text-white transition">Tools</Link>
              <Link to="/presentation-maker" className="hover:text-white transition">Presentation Maker</Link>
            </div>
            <p className="text-slate-600 text-sm">&copy; 2025 CodeResite</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Founders;

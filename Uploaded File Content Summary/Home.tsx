import { ChevronDown, Database, Eye, Zap, Shield, Radar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import CapabilityDemo from "@/components/CapabilityDemo";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DeepSight Oracle
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("features")} className="hover:text-cyan-400 transition">
              Features
            </button>
            <button onClick={() => scrollToSection("capabilities")} className="hover:text-cyan-400 transition">
              Capabilities
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition">
              Learn More
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Total Information
            </span>
            <br />
            <span className="text-slate-100">Dominance</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            DeepSight Oracle: The ultimate autonomous intelligence platform engineered to achieve complete and persistent situational awareness by systematically acquiring, processing, and synthesizing every accessible byte of information from the global digital and physical landscape.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => scrollToSection("features")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
            >
              Explore Features
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
            >
              Documentation
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Core Functionality Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-100">
            Core Functionality
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Six pillars of intelligence supremacy
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition group">
              <div className="flex items-start gap-4">
                <Radar className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Unconstrained Data Ingestion</h3>
                  <p className="text-slate-300 mb-4">
                    The Global Harvester operates as a distributed, self-healing network of autonomous bots that continuously crawl and index the entirety of the digital world—surface web, deep web, dark web, social media, leaked databases, financial records, and physical infrastructure streams.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• Omni-source collection from all accessible digital sources</li>
                    <li>• Evasion and access through decentralized proxy networks</li>
                    <li>• Defeat of anti-bot measures and paywalls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition group">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">Multi-Modal AI Analysis Engine</h3>
                  <p className="text-slate-300 mb-4">
                    The Sentient Core processes data in any form using advanced NLP, Computer Vision, and Audio Analysis. It transforms raw information into structured intelligence with behavioral and predictive analytics.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• NLP across 200+ languages with sentiment analysis</li>
                    <li>• Near-perfect facial recognition and geolocating</li>
                    <li>• Voice biometrics and behavioral prediction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-purple-500/50 transition group">
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">Dynamic Knowledge Graph</h3>
                  <p className="text-slate-300 mb-4">
                    A massive, interconnected knowledge graph representing all global information. Every entity—name, IP address, face, location, wallet—is a node with autonomously discovered relationships.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• Automated entity linking and relationship mapping</li>
                    <li>• Confidence scoring for all connections</li>
                    <li>• Self-correcting graph with real-time updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-green-500/50 transition group">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">Stealth & Operational Security</h3>
                  <p className="text-slate-300 mb-4">
                    Designed to be untraceable and invisible. All collection is routed through constantly shifting proxy networks with perpetually altered device fingerprints.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• Multi-layered anonymity and obfuscation</li>
                    <li>• Anti-forensics with quantum-resistant encryption</li>
                    <li>• Distributed core servers in constant flux</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-red-500/50 transition group">
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition">Targeted & Autonomous Operations</h3>
                  <p className="text-slate-300 mb-4">
                    Users don't search—they task the platform. Define a target and parameters, and DeepSight Oracle autonomously deploys its full suite of collection and analysis tools.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• Autonomous investigation and targeting</li>
                    <li>• Actionable intelligence generation</li>
                    <li>• Vulnerability identification and mapping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-yellow-500/50 transition group">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">Interactive Visualization & Reporting</h3>
                  <p className="text-slate-300 mb-4">
                    Fully interactive intelligence dashboard with geospatial mapping, temporal timelines, network graphs, and entity profiles. Automated reporting with findings and confidence scores.
                  </p>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li>• Multi-layered geospatial and temporal dashboards</li>
                    <li>• Network graph exploration and pivoting</li>
                    <li>• Automated comprehensive reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-100">
            Advanced Capabilities
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Interactive demonstrations of core intelligence features
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityDemo
              type="monitoring"
              title="Real-Time Monitoring"
              description="Continuous surveillance across all digital and physical infrastructure with millisecond response times."
            />
            <CapabilityDemo
              type="predictive"
              title="Predictive Intelligence"
              description="Forecast future events, behaviors, and threats with calculated probability and confidence metrics."
            />
            <CapabilityDemo
              type="threat"
              title="Threat Assessment"
              description="Identify vulnerabilities, insider threats, and potential attack vectors before they materialize."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-slate-100">
            The Future of Intelligence
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            DeepSight Oracle represents the convergence of advanced AI, ubiquitous data collection, and autonomous intelligence operations. It is a theoretical framework for understanding the ultimate potential of information systems—and the critical importance of ethical constraints and societal oversight.
          </p>
          <p className="text-lg text-slate-400 mb-12">
            This platform exists as a thought experiment to explore the implications of unconstrained intelligence gathering and the philosophical questions surrounding information dominance in the digital age.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg">
            Explore the Concept
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 bg-slate-950/50">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>DeepSight Oracle © 2025 | A Theoretical Intelligence Platform Concept</p>
        </div>
      </footer>
    </div>
  );
}

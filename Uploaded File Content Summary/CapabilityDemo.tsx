import { useState, useEffect } from "react";
import { Radar, Database, Shield } from "lucide-react";

interface DemoProps {
  type: "monitoring" | "predictive" | "threat";
  title: string;
  description: string;
}

export default function CapabilityDemo({ type, title, description }: DemoProps) {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev, Math.random() * 100];
        return newData.slice(-8);
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isActive]);

  const renderMonitoringDemo = () => (
    <div className="space-y-4">
      <div className="text-sm text-slate-400 mb-4">Real-time data streams (8 channels)</div>
      <div className="space-y-3">
        {[...Array(8)].map((_, i) => {
          const value = data[i] || 0;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-12">CH {i + 1}</span>
              <div className="flex-1 bg-slate-700/50 rounded h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${value}%` }}
                />
              </div>
              <span className="text-xs text-cyan-400 w-8 text-right">{value.toFixed(0)}%</span>
            </div>
          );
        })}
      </div>
      <div className="mt-6 p-3 bg-slate-800/50 rounded border border-slate-700">
        <div className="text-xs text-slate-400 mb-2">Status</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400">All systems online • {data.length * 500}ms latency</span>
        </div>
      </div>
    </div>
  );

  const renderPredictiveDemo = () => (
    <div className="space-y-4">
      <div className="text-sm text-slate-400 mb-4">Prediction confidence scores</div>
      <div className="space-y-4">
        {[
          { label: "Event A", confidence: 87 },
          { label: "Event B", confidence: 72 },
          { label: "Event C", confidence: 94 },
          { label: "Event D", confidence: 65 },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className={item.confidence > 80 ? "text-yellow-400" : "text-slate-400"}>
                {item.confidence}%
              </span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  item.confidence > 80
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500"
                }`}
                style={{
                  width: isActive ? `${item.confidence}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}</div>
      <div className="mt-6 p-3 bg-slate-800/50 rounded border border-slate-700">
        <div className="text-xs text-slate-400 mb-2">Next Predicted Event</div>
        <div className="text-sm text-purple-400 font-semibold">Event C in 2h 34m (94% confidence)</div>
      </div>
    </div>
  );

  const renderThreatDemo = () => (
    <div className="space-y-4">
      <div className="text-sm text-slate-400 mb-4">Active threat assessment</div>
      <div className="space-y-3">
        {[
          { threat: "Vulnerability Scan", level: "high", color: "red" },
          { threat: "Unauthorized Access", level: "medium", color: "yellow" },
          { threat: "Data Exfiltration", level: "critical", color: "red" },
          { threat: "Anomalous Behavior", level: "low", color: "blue" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-slate-800/50 rounded border border-slate-700">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  item.color === "red"
                    ? "bg-red-500"
                    : item.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                }`}
              ></div>
              <span className="text-sm text-slate-300">{item.threat}</span>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded ${
                item.color === "red"
                  ? "bg-red-500/20 text-red-400"
                  : item.color === "yellow"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {item.level}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-3 bg-red-950/30 rounded border border-red-900/50">
        <div className="text-xs text-red-400 mb-2">Alert Summary</div>
        <div className="text-sm text-red-300">2 critical threats detected • Immediate action recommended</div>
      </div>
    </div>
  );

  const getIcon = () => {
    switch (type) {
      case "monitoring":
        return <Radar className="w-6 h-6" />;
      case "predictive":
        return <Database className="w-6 h-6" />;
      case "threat":
        return <Shield className="w-6 h-6" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case "monitoring":
        return "from-cyan-500 to-blue-500";
      case "predictive":
        return "from-purple-500 to-pink-500";
      case "threat":
        return "from-green-500 to-emerald-500";
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${getColors()} rounded-lg flex items-center justify-center text-white`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">{title}</h3>
            <p className="text-xs text-slate-400">{description}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-slate-900/50 rounded border border-slate-700 min-h-[280px]">
        {isActive ? (
          type === "monitoring" ? (
            renderMonitoringDemo()
          ) : type === "predictive" ? (
            renderPredictiveDemo()
          ) : (
            renderThreatDemo()
          )
        ) : (
          <div className="h-full flex items-center justify-center text-slate-500 text-sm">
            Click "Launch Demo" to see live data
          </div>
        )}
      </div>

      <button
        onClick={() => setIsActive(!isActive)}
        className={`w-full py-2 px-4 rounded font-medium transition ${
          isActive
            ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
            : `bg-gradient-to-r ${getColors()} text-white hover:opacity-90`
        }`}
      >
        {isActive ? "Stop Demo" : "Launch Demo"}
      </button>
    </div>
  );
}

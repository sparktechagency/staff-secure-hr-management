// components/OurSolutionsAnimatedStates.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function OurSolutionsAnimatedStates() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = [500, 10, 98, 24];
          //   const suffixes = ["+", "K+", "%", "hrs"];
          const durations = [2000, 1800, 1500, 1200];

          targets.forEach((target, index) => {
            let start = 0;
            const increment = target / (durations[index] / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Active Clients", suffix: "+" },
    { label: "Placements", suffix: "K+" },
    { label: "Satisfaction", suffix: "%" },
    { label: "Avg. Response", suffix: "hrs" },
  ];

  return (
    <section ref={ref} className="pb-20">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const value = counts[index];
            const display =
              stat.suffix === "K+" ? `${value}K+` : `${value}${stat.suffix}`;

            return (
              <div
                key={index}
                className="text-center opacity-0 translate-y-4 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="bg-transparent ">
                  <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0C3188] mb-3 tracking-tight">
                    {display}
                  </h3>
                  <p className="text-base-color text-base md:text-lg xl:text-xl font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

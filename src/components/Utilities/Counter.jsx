import DocsTemplate from "../ui/DocsTemplate";
import CountUp from "react-countup";

export default function CounterTimelineStyle() {
  const data = [
    { value: 100, suffix: "+", label: "Students" },
    { value: 100, suffix: "+", label: "Clients" },
    { value: 50, suffix: "+", label: "Projects" },
    { value: 300, suffix: "+", label: "Tree's" },
  ];

  return (
    <DocsTemplate
      title="Animated Counter"
      preview={
        <div className="grid grid-cols-2 gap-6 max-w-md">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 10 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/10 border border-white/20 
                rounded-xl p-5 text-center shadow-lg hover:scale-105 transition"
              >
                <h2 className="text-2xl font-bold text-white">
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    duration={10}
                  />
                </h2>

                <p className="text-white/70 text-sm mt-1">{item.label}</p>
              </div>
            );
          })}
        </div>
      }
      installCode={`npm install react-countup`}
      usageCode={`<CounterTimelineStyle />`}
      componentCode={`import CountUp from "react-countup";

const data = [
    { value: 100, suffix: "+", label: "Students" },
    { value: 100, suffix: "+", label: "Clients" },
    { value: 50, suffix: "+", label: "Projects" },
    { value: 300, suffix: "+", label: "Tree's" },
];

export default function Counter() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {data.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
             key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 10 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/10 border border-white/20 
                rounded-xl p-5 text-center shadow-lg hover:scale-105 transition">

          <h2 className="text-2xl font-bold text-white">
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    duration={10}
                  />
          </h2>

          <p className="text-white/70 text-sm mt-1">{item.label}</p>

          </div>
        );
      })}
    </div>
  );
}`}
    />
  );
}

// src/components/ui/card.js
export function Card({ children, className }) {
  return (
    <div className={`bg-[#222] text-white p-6 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="text-gray-400">{children}</div>;
}

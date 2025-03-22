export function Card({ children }) {
  return <div className="border p-4 rounded-lg shadow">{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="font-bold text-lg">{children}</div>;
}
export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

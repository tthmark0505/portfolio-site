export default function Alert({
  title,
  message,
  variant = "info",
}) {
  const variantStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`w-full rounded-lg border-l-4 p-4 shadow-sm ${variantStyles[variant]}`}
    >
      {title && (
        <h3 className="mb-1 font-semibold">
          {title}
        </h3>
      )}

      <p className="text-sm">
        {message}
      </p>
    </div>
  );
}
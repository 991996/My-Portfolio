function CircularProgress({ size = 120, stroke = 6, progress = 65 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size}>
      {/* الدائرة الخلفية */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={stroke}
        fill="transparent"
      />

      {/* دائرة التقدم */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#b851db"
        strokeWidth={stroke}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {/* النص في المنتصف */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm dark:fill-gray-800 fill-gray-50"
      >
        {progress}%
      </text>
    </svg>
  );
}

export default CircularProgress;

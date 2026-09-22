const PATHS = {
  wide: "M2 7 C26 3 50 10 74 6 C90 3 106 9 118 7",
  newsletter: "M2 6 C34 1.5 70 9 104 4 C120 1.5 132 7 138 4.5",
} as const;

const VIEWBOX = {
  wide: "0 0 120 12",
  newsletter: "0 0 140 10",
} as const;

type UnderlineDoodleProps = {
  variant?: keyof typeof PATHS;
  color?: string;
  className?: string;
};

export default function UnderlineDoodle({
  variant = "wide",
  color = "#84c0bf",
  className,
}: UnderlineDoodleProps) {
  return (
    <svg
      viewBox={VIEWBOX[variant]}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={PATHS[variant]}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

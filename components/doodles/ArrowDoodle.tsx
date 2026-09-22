const CURVES = {
  beat: ["M13 3 C12.6 14 14 24 13 33"],
  step: [
    "M13 4 C13 17 11.5 28 13 39",
    "M13 4 C12.4 16 14 28 12.6 39",
    "M12.6 4 C13.4 17 11.8 27 13 39",
  ],
} as const;

const ARROWHEADS = {
  beat: "M7 27 L13 34 L19 26",
  step: "M7 32 L13 40 L19 31",
} as const;

const BOX = {
  beat: { viewBox: "0 0 26 40", width: 22, height: 32 },
  step: { viewBox: "0 0 26 46", width: 26, height: 44 },
} as const;

type ArrowDoodleProps = {
  variant: keyof typeof BOX;
  index?: number;
  color?: string;
  className?: string;
};

export default function ArrowDoodle({
  variant,
  index = 0,
  color = "#84c0bf",
  className,
}: ArrowDoodleProps) {
  const curves = CURVES[variant];
  const { viewBox, width, height } = BOX[variant];

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      aria-hidden="true"
      className={className}
    >
      <path
        d={curves[index % curves.length]}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d={ARROWHEADS[variant]}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

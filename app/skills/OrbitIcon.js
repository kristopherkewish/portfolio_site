export default function OrbitIcon({ iconRadius, iconCornerY, iconCornerX }) {
  return (
    <div
      className={`absolute aspect-square rounded-full bg-blue-400`}
      style={{
        height: `${iconRadius * 2}px`,
        top: `${iconCornerY}px`,
        left: `${iconCornerX}px`
      }}
    ></div>
  );
};

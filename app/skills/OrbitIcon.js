export default function OrbitIcon({ iconRadius, iconCornerY, iconCornerX, iconComponent }) {
    const IconGraphic = iconComponent;

  return (
    <div
      className={`absolute aspect-square rounded-full flex items-center justify-center`}
      style={{
        height: `${iconRadius * 2}px`,
        top: `${iconCornerY}px`,
        left: `${iconCornerX}px`,
      }}
    >
      <IconGraphic style={{ animationDirection: 'reverse' }}className='object-cover h-auto w-auto fill-blue-700 animate-[spin_60s_linear_infinite]' />
    </div>
  );
}

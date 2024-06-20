export default function TimelineInfo({ role }) {
  return (
    <div className="mb-10 text-xs flex h-1/3 w-4/5 lg:w-1/2 flex-col justify-center overflow-hidden rounded-lg drop-shadow-lg">
      <div className="rounded-t-lg bg-gray-900 p-3 text-white">
        <div className="lg:text-xl font-bold">{role.title}</div>
        <div className="lg:text-lg italic">{role.company}</div>
      </div>
      <div className="h-full rounded-b-lg bg-white p-3 text-black">
        <div className="lg:text-base font-normal">
          <ul>
            {role.descriptionPoints.map((descriptionPoint, index) => (
              <li key={index}>{descriptionPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

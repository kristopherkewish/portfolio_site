export default function TimelineInfo({ role }) {
  return (
    <div className="mb-10 flex h-1/3 w-4/5 flex-col justify-center overflow-hidden rounded-lg text-xs drop-shadow-lg lg:w-1/2">
      <div className="rounded-t-lg bg-gray-900 p-3 text-white">
        <div className="font-bold lg:text-xl">{role.title}</div>
        <div className="italic lg:text-lg">{role.company}</div>
      </div>
      <div className="h-full rounded-b-lg bg-white p-3 text-black">
        <div className="font-normal lg:text-base">
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

export default function TimelineInfo({ role }) {
  return (
    <div className="mb-10 flex h-1/3 w-1/2 flex-col justify-center overflow-hidden rounded-lg drop-shadow-lg">
      <div className="rounded-t-lg bg-gray-900 p-3 text-white">
        <div className="font-xl font-bold">{role.title}</div>
        <div className="font-l italic">{role.company}</div>
      </div>
      <div className="h-full rounded-b-lg bg-white p-3 text-black">
        <div className="font-normal">
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

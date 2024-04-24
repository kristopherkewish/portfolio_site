export default function Card({ title, description }) {
  return (
    <div className="mb-10 h-[400px] w-72 rounded-md bg-white drop-shadow-2xl">
      <div className="flex h-44 items-center justify-center rounded-t-md bg-slate-900">
        IMAGE PLACEHOLDER
      </div>
      <div className="flex flex-col p-5 text-black">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-base">{description}</div>
        <div className="absolute bottom-3 mt-5 w-fit cursor-pointer self-center rounded-full bg-slate-600 px-5 py-3 text-white transition hover:bg-slate-200 hover:text-slate-600 active:bg-slate-600 active:text-slate-200">
          Open App
        </div>
      </div>
    </div>
  );
}

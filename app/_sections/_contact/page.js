export default function Contact() {
  return (
    <div
      id="contact"
      class="absolute flex h-dvh w-screen flex-col items-center justify-center overflow-hidden bg-slate-800 text-white"
    >
      <div className="mb-10 text-8xl font-extrabold">CONTACT</div>
      <div className="mb-10 text-2xl">
        For work opportunities or business enquiries, please contact me via:{" "}
      </div>
      <div className="mb-10 font-mono text-xl">
        <span className="font-bold">Email: </span>kristopherkewish@gmail.com
      </div>
      <div className="mb-10 font-mono text-xl">
        <span className="font-bold">Phone: </span>0422 019 884
      </div>
    </div>
  );
}

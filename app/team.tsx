import Image from "next/image";

export default function Team() {
  return (
    <main className="bg-[#0F0F1A] text-white min-h-screen font-sans flex flex-col items-center justify-center px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-pink-400">Our Team</h1>
      <div className="rounded-xl overflow-hidden shadow-xl border-4 border-pink-400 mb-6">
        <Image
          src="https://placehold.co/600x300/18182A/FFF?text=Team+Photo"
          alt="Team Photo"
          width={600}
          height={300}
          className="object-cover w-full h-auto"
          priority
        />
      </div>
      <p className="text-lg text-gray-300 text-center max-w-xl">
        Meet our quirky, passionate, and slightly eccentric crew—always ready to turn the ordinary into extraordinary!
      </p>
    </main>
  );
}

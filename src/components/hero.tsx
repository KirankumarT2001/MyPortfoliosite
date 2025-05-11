export default function NavBare() {

  return <>
  <section id= "home" className="scroll-mt-28 mb-28 rounded-xl ">

  <div className="h-[110vh] rounded-xl">

     <div className="h-screen flex flex-col rounded-xl justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 text-white px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Hi, I'm <span className="text-blue-400 font-semibold">KIRAN KUMAR T</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8">
        A Full Stack Developer passionate about building impactful web apps and solving real-world problems.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300 "
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-2xl transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
  </section>
  </>
}
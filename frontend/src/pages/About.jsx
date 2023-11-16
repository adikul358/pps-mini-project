function About() {
  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-12 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-3 gap-x-20">
          <div className="flex flex-col col-span-2">
            <span className="text-2xl font-semibold">About</span>
            <span className="text-md font-light mt-1">Nexus Banking is a mini-project for demonstrating a seemless banking experience in comparision to tedious present-day solutions.</span>

            <span className="text-xl font-semibold mt-6">Developers</span>
            <span className="text-md font-light">Aditya Kulshrestha (RA2311033010065)</span>
            <span className="text-md font-light">Arrya Thakur (RA2311033010094)</span>
          </div>
          <div className="flex flex-col opacity-50">
            <span className="text-xl font-semibold">Open-Source Libraries</span>
            <span className="text-md font-light">React v18.2.0</span>
            <span className="text-md font-light">React Icons v4.12.0</span>
            <span className="text-md font-light">React Router v6.18.0</span>
            <span className="text-md font-light">react-scripts v5.0.1</span>
            <span className="text-md font-light">react-cookie v6.1.1</span>
            <span className="text-md font-light">Serve v14.2.1</span>
            <span className="text-md font-light">TailwindCSS v3.3.5</span>
            <span className="text-md font-light">Axios v1.6.2</span>
            <span className="text-md font-light">Flask v3.0.0</span>
            <span className="text-md font-light">Flask CORS v4.0.0</span>
          </div>
        </div>     
      </div>
  );
}

export default About;

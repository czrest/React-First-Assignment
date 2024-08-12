import sam from "/sam.png";

import { MENU } from "./data";

function App() {
  return (
    <main className="w-full h-full overflow-y-auto bg-neutral-900">
      <section className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-neutral-800 to-neutral-900 relative z-0">
        <div className="w-full h-full grid grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-white flex flex-col justify-center pl-28 relative">
            <p className="text-5xl font-bold absolute top-0 ml-2">
              Hi, I'm Sam.
            </p>
            <h1 className="text-20xl font-bold">creative developer</h1>
          </div>
          <img
            src={sam}
            alt="Samuel Torreda"
            className="h-[80rem] absolute top-0 right-0 z-0"
          />
        </div>
      </section>

      <section className="flex space-x-10 justify-center items-center w-full h-screen relative bg-gradient-to-t from-neutral-900 from-70% p-28">
        <div
          className="w-full max-w-96 flex flex-col gap-4 items-center bg-gradient-to-t from-neutral-900 from-70% text-white hover:bg-black rounded-lg duration-500"
        >
          <img
            src={"/react.svg"}
            className="w-full h-auto aspect-square p-5 rounded-b-none rounded-t-md"
          />
          <div className="flex flex-col w-full min-h-40 space-y-5 rounded-md p-5 z-10">
            <h1 className="font-bold text-xl">Title 1</h1>
            <p className="line-clamp-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              bibendum euismod nulla ac venenatis. Nullam porttitor eleifend mi,
              ut porta elit feugiat non. Proin non nibh sit amet risus ornare
              aliquet nec at turpis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Fusce a nisl in
              metus mollis euismod. Praesent dictum neque ac maximus vulputate.
              Nam ornare molestie lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras imperdiet bibendum lacus vitae
              sollicitudin. Phasellus ipsum nibh, cursus eu fringilla in, rutrum
              sit amet enim. Cras vestibulum vehicula tellus, vel accumsan elit
              vulputate non. Nullam sagittis metus ut ipsum viverra, vitae
              semper eros sodales. Donec elementum leo lorem, sit amet efficitur
              dui mattis id.
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-96 flex flex-col gap-4 items-center bg-gradient-to-t from-neutral-900 from-70% text-white hover:bg-black rounded-lg duration-500"
        >
          <img
            src={"/react.svg"}
            className="w-full h-auto aspect-square p-5 rounded-b-none rounded-t-md"
          />
          <div className="flex flex-col w-full min-h-40 space-y-5 rounded-md p-5 z-10">
            <h1 className="font-bold text-xl">Title 1</h1>
            <p className="line-clamp-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              bibendum euismod nulla ac venenatis. Nullam porttitor eleifend mi,
              ut porta elit feugiat non. Proin non nibh sit amet risus ornare
              aliquet nec at turpis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Fusce a nisl in
              metus mollis euismod. Praesent dictum neque ac maximus vulputate.
              Nam ornare molestie lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras imperdiet bibendum lacus vitae
              sollicitudin. Phasellus ipsum nibh, cursus eu fringilla in, rutrum
              sit amet enim. Cras vestibulum vehicula tellus, vel accumsan elit
              vulputate non. Nullam sagittis metus ut ipsum viverra, vitae
              semper eros sodales. Donec elementum leo lorem, sit amet efficitur
              dui mattis id.
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-96 flex flex-col gap-4 items-center bg-gradient-to-t from-neutral-900 from-70% text-white hover:bg-black rounded-lg duration-500"
        >
          <img
            src={"/react.svg"}
            className="w-full h-auto aspect-square p-5 rounded-b-none rounded-t-md"
          />
          <div className="flex flex-col w-full min-h-40 space-y-5 rounded-md p-5 z-10">
            <h1 className="font-bold text-xl">Title 1</h1>
            <p className="line-clamp-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              bibendum euismod nulla ac venenatis. Nullam porttitor eleifend mi,
              ut porta elit feugiat non. Proin non nibh sit amet risus ornare
              aliquet nec at turpis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Fusce a nisl in
              metus mollis euismod. Praesent dictum neque ac maximus vulputate.
              Nam ornare molestie lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras imperdiet bibendum lacus vitae
              sollicitudin. Phasellus ipsum nibh, cursus eu fringilla in, rutrum
              sit amet enim. Cras vestibulum vehicula tellus, vel accumsan elit
              vulputate non. Nullam sagittis metus ut ipsum viverra, vitae
              semper eros sodales. Donec elementum leo lorem, sit amet efficitur
              dui mattis id.
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-96 flex flex-col gap-4 items-center bg-gradient-to-t from-neutral-900 from-70% text-white hover:bg-black rounded-lg duration-500"
        >
          <img
            src={"/react.svg"}
            className="w-full h-auto aspect-square p-5 rounded-b-none rounded-t-md"
          />
          <div className="flex flex-col w-full min-h-40 space-y-5 rounded-md p-5 z-10">
            <h1 className="font-bold text-xl">Title 1</h1>
            <p className="line-clamp-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              bibendum euismod nulla ac venenatis. Nullam porttitor eleifend mi,
              ut porta elit feugiat non. Proin non nibh sit amet risus ornare
              aliquet nec at turpis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Fusce a nisl in
              metus mollis euismod. Praesent dictum neque ac maximus vulputate.
              Nam ornare molestie lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras imperdiet bibendum lacus vitae
              sollicitudin. Phasellus ipsum nibh, cursus eu fringilla in, rutrum
              sit amet enim. Cras vestibulum vehicula tellus, vel accumsan elit
              vulputate non. Nullam sagittis metus ut ipsum viverra, vitae
              semper eros sodales. Donec elementum leo lorem, sit amet efficitur
              dui mattis id.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

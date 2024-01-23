import type { Activity } from "../interfaces/activity";

function trimTitleToFit(i: string): string {
  if (i.length > 132) {
    const s = i.slice(0, 131);
    return s + "...";
  } else {
    return i;
  }
}

export default function ActivityItem(a: Activity) {
  const fromDate = a.from.toDate();
  const toDate = a.to.toDate();
  const from = `${fromDate.getDay()}/${fromDate.getMonth()}/${fromDate.getFullYear()}`;
  const to = `${toDate.getDay()}/${toDate.getMonth()}/${toDate.getFullYear()}`;

  const styles = {
    backgroundImage: `url('${a.image_link}')`,
  };

  return (
    <div
      key={a.title}
      className=" aspect-video bg-cyan-50 hover:bg-slate-50 font-semibold rounded-lg  shadow-gray-200 drop-shadow-md  w-fit  mx-2 sm:mx-4 flex flex-col  hover:shadow-none hover:drop-shadow-none transition-all snap-center "
    >
      {/* IMAGE */}

      <div
        style={styles}
        className={` min-h-[14rem] sm:min-h-[65%] min-w-[312px] sm:min-w-[512px] md:min-w-[620px] rounded-t-lg bg-cover flex flex-col justify-end align-middle`}
      >
        {a.register_link.length > 1 && (
          <div className="w-full h-[20%] bg-black/60 self-baseline opacity-80 sm:opacity-[0.001] sm:hover:opacity-100 transition-all flex flex-row">
            <a
              href={a.register_link}
              target="_blank"
              className="self-center text-white font-medium text-md sm:text-lg md:text-xl mx-2"
            >
              Register & See More {">"}
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-[0.75rem] py-[0.34rem] mb-2">
        {" "}
        <h2 className="mb-[0.10rem] sm:text-lg">{trimTitleToFit(a.title)}</h2>
        <p className="text-gray-400 text-sm line-clamp-3  font-normal pb-2">
          {a.full_description}
        </p>
        <div className="flex flex-row justify-between self-stretch pb-6">
          <p className="text-gray-500 text-sm sm:text-md font-normal ">
            From {from} to {to}
          </p>

          <button className="self-center md:pe-2 text-cyan-700 font-medium hover:text-cyan-900 active:scale-95 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

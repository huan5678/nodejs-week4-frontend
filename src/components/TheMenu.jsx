import {usePostsContext} from '../context/index';

function TheMenu() {
  const {user, setSelectedPage} = usePostsContext();
  return (
    <aside className="px-4 fixed top-0 left-0 right-0 container h-full translate-y-[92vh] z-50
    md:px-0 md:static md:col-span-1 md:translate-y-0">
      <nav className="flex flex-row mt-auto md:flex-col justify-center md:justify-start py-2 rounded-r-full rounded-l-full md:rounded-none md:py-8 md:px-6 md:space-y-6 bg-gray md:bg-white border-2 border-black md:mx-0 gap-6 md:gap-0">
        <button
          type="button"
          className="text-center rounded-full md:shadow-side md:border-black md:border-2 md:py-4
          md:rounded-lg md:bg-primary text-white order-4 md:order-none font-bold
          active:shadow-none active:-translate-x-1 active:translate-y-1 active:bg-info-dark
          md:hover:bg-secondary hover:text-black transition-all duration-300
          "
          onClick={() => setSelectedPage('ceratePost')}
        >
          <div className="max-h-[50px] max-w-[50px] grid place-content-center md:hidden
          rounded-full bg-primary text-white border-2 border-black md:bg-info hover:bg-secondary px-4 py-3
          ">
            <i className="bx bx-plus text-2xl" />
          </div>
          <span className="hidden md:block">張貼動態</span>
        </button>
        <button
          type="button"
          className="md:bg-white order-1 group
          md:order-none md:flex justify-start items-center gap-4"
        >
          <div className="max-h-[50px] max-w-[50px] grid place-content-center md:hidden
          rounded-full bg-white border-2 border-black md:bg-info group-hover:md:bg-primary px-4 py-3
          ">
            <i className="bx bx-home text-2xl" />
          </div>
          <img src={user.photo} alt="" className="hidden max-h-[50px] max-w-[50px] md:block border-2 border-black rounded-full" />
          <span className="font-bold hidden md:block group-hover:text-primary">{user.name}</span>
        </button>
        <button type="button" className="flex justify-start items-center gap-4 group">
          <div className="max-h-[50px] max-w-[50px] grid place-content-center transition-all duration-300
          rounded-full bg-white border-2 border-black md:bg-info group-hover:md:bg-primary px-4 py-3
          ">
            <i className="bx bx-bell text-2xl md:group-hover:text-white" />
          </div>
          <span className="hidden md:block font-bold group-hover:text-primary">追蹤名單</span>
        </button>
        <button type="button" className="flex justify-start items-center gap-4 group">
          <div className="max-h-[50px] max-w-[50px] grid place-content-center transition-all duration-300
          rounded-full bg-white border-2 border-black md:bg-info group-hover:md:bg-primary px-4 py-3
          ">
            <i className="bx bx-like text-2xl md:group-hover:text-white" />
          </div>
          <span className="hidden md:block font-bold group-hover:text-primary">我按讚的文章</span>
        </button>
      </nav>
    </aside>
  );
}

export default TheMenu;

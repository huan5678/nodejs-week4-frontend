import {usePostsContext} from '../context/index';

function TheHeader() {
  const {user} = usePostsContext();
  return (
    <header className="py-4 border-b-2 border-black bg-gray">
      <div className="container">
        <nav className="flex justify-between items-center">
          <a href="/">
            <h2 className="font-logo text-[26px] leading-9">MetaWall</h2>
          </a>
          <div className="flex items-center gap-2 relative group">
            <img
              src={user.photo}
              alt="avatarImage"
              className="rounded-full border-2 border-black max-h-[30px] max-w-[30px]"
            />
            <h3 className="font-mono font-bold border-b-2 border-black p-1">Member</h3>
            <div className="absolute top-full left-0 z-[9999]">
              <ul
                className="mt-2 min-w-[182px] bg-white border-2 border-black flex flex-col divide-y-2 divide-black relative after:w-full after:h-full after:translate-x-[6px] after:translate-y-[6px] after:content-[''] after:absolute after:bg-white after:shadow-[0_0_0_2px_#000400] after:z-[-1] group-hover:visible invisible"
              >
                <li className="hover:bg-gray text-center">
                  <button type="button" className="w-full py-2"> 我的貼文牆 </button>
                </li>
                <li className="hover:bg-gray text-center">
                  <button type="button" className="w-full py-2">修改個人資料</button>
                </li>
                <li className="hover:bg-gray text-center">
                  <button type="button" className="w-full py-2">登出</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default TheHeader;

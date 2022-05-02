import {usePostsContext} from './context/index';

import TheHeader from './components/TheHeader';
import TheMenu from './components/TheMenu';
import HomeView from './views/HomeView';
import CreatePostView from './views/CreatePostView';

function App() {
  const {selectPage} = usePostsContext();
  return (
    <main className="bg-gray">
      <div className="bg-pattern min-h-screen">
        <TheHeader />
        <section className="container py-12">
          <div className="md:grid md:grid-cols-3 md:gap-4">
            {
              (selectPage === 'Home') ? <HomeView /> : (selectPage === 'ceratePost') ? <CreatePostView /> : null
            }
            <TheMenu />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;

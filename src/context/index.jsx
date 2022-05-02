import {useState, useEffect, useContext, createContext} from "react";
import axios from "axios";

const postsContext = createContext();

const baseUrl = import.meta.env.VITE_API_PATH;

const imgurUrl = "https://api.imgur.com/3/";

const imgurAccessToken = import.meta.env.VITE_IMGUR_ACCESS_TOKEN;

export const PostsContextProvider = ({children}) => {

  const filterList = ['最新貼文', '舊到新貼文'];
  const [selectPage, setSelectedPage] = useState('Home');
  const [posts, setPosts] = useState([]);
  const [selectFilter, setSelectFilter] = useState(filterList[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [postImage, setPostImage] = useState('');
  const [user, setUser] = useState({});

  const handleSelectCtrl = (filter, keyWord) => {
    let selectFn = ''
    if (filter !== '') {
      setOpenDropdown(!openDropdown);
      setSelectFilter(filter);
      selectFn = filter;
    } else {
      selectFn = selectFilter;
    }
    switch (selectFn) {
      case '最新貼文':
        axios.get(`${baseUrl}/posts/?timeSort=desc&q=${keyWord}`)
          .then(res => setPosts(res.data.data))
        break;
      case '舊到新貼文':
        axios.get(`${baseUrl}/posts/?timeSort=asc&q=${keyWord}`)
          .then(res => setPosts(res.data.data))
        break;
    }
  }

  const handleGetUser = () => {
    axios.get(`${baseUrl}/users`)
      .then(res => setUser(res.data.data[0]))
  }

  const handleCreatePost = (data) => axios.post(`${baseUrl}/posts`, data);

  const handleGetPosts = () => {
    axios.get(`${baseUrl}/posts`)
      .then(res => {
        setPosts(res.data.data);
      })
  }

  const album = "tyv5ZSG";

  const handleUploadImg = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("album", album);

    const requestConfig = {
      method: "post",
      url: `${imgurUrl}image`,
      headers: {
        Authorization: `Bearer ${imgurAccessToken}`,
      },
      data: formData,
    };
    return axios(requestConfig)
  }

  function handleImageUpload(e) {
    handleUploadImg(e.target.files[0])
      .then((res) => {
        setPostImage(res.data.data.link);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  useEffect(() => {
    handleGetPosts();
    handleGetUser();

  }, []);

  return (
    <postsContext.Provider
      value={{
        selectPage,
        setSelectedPage,
        user,
        posts,
        handleGetPosts,
        filterList,
        selectFilter,
        handleSelectCtrl,
        openDropdown,
        setOpenDropdown,
        handleCreatePost,
        postImage,
        handleImageUpload,
      }}
    >
      {children}
    </postsContext.Provider>
  );
}

export const usePostsContext = () => useContext(postsContext);
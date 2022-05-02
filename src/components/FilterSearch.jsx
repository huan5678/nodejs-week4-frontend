import {useState} from 'react';
import {Field, Form, Formik} from 'formik';

import {usePostsContext} from '../context/index';

export default function FilterSearch() {
  const {
    selectFilter,
    setOpenDropdown,
    openDropdown,
    handleSelectCtrl,
    filterList,
  } = usePostsContext();

  const [keyWord, setKeyword] = useState('');

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-3">
      <div className="relative">
        <div className="
        flex justify-between items-center border-2 border-black bg-white py-3 px-4 focus-visible:outline-none
        gap-4 select-none h-full whitespace-nowrap
        " onClick={() => setOpenDropdown(!openDropdown)}>
          <span className="">{selectFilter}</span>
          <i className={
            `${openDropdown ? 'rotate-[-180deg]' : 'rotate-0'} transition-all duration-300 bx bx-chevron-down text-2xl`
          } />
        </div>
        <ul
          className={`${openDropdown ? 'scale-100 visible opacity-100' : 'scale-0 invisible opacity-0'} origin-top absolute right-0 bottom-0 translate-y-[105%] z-20 py-2 bg-white border-2 border-black rounded-md shadow-xl transition-all duration-300`}>
          {
            filterList.map(filter =>
              <li onClick={() => handleSelectCtrl(filter, keyWord)} key={filter}>
                <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-primary hover:text-white"> {filter} </a>
              </li>
            )
          }
        </ul>
      </div>
      <Formik
        initialValues={{searchInput: ''}}
        onSubmit={(values) => {
          handleSelectCtrl('', values.searchInput)
        }}
      >
        <Form className="flex w-full">
          <label htmlFor="searchInput" className="w-full">
            <Field
              name="searchInput">
              {({field}) => (
                <input
                  {...field}
                  type="text"
                  id="searchInput"
                  name="searchInput"
                  placeholder="搜尋貼文"
                  className="w-full h-full py-3 pl-4 border-2 border-black focus-visible:outline-none"
                />
              )}
            </Field>
          </label>
          <button
            type="submit"
            className="bg-primary btn-square text-white border-2 border-l-0 border-black p-3"
          >
            <i className="bx bx-search text-xl"></i>
          </button>
        </Form>
      </Formik>
    </div>
  )
}

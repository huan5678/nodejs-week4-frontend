import {Formik, Form, Field} from 'formik';
import * as yup from "yup";


import {usePostsContext} from '../context/index';

const schema = yup.object({
  userContent: yup.string().required('請輸入內容，此為必要欄位'),
  imgUrl: yup.array(),
}).required();

function TheCreatePost() {
  const {handleCreatePost, user, handleImageUpload, postImage, setSelectedPage, handleGetPosts
  } = usePostsContext();

  const handlePostSubmit = (data) => {
    const submitData = {
      user: user._id,
      content: data.userContent?.trim(),
      image: postImage ? postImage : null,
    };
    handleCreatePost(submitData).then(res => {
      setSelectedPage('Home');
      handleGetPosts();
    });
  };

  return (
    <section className="card p-8">
      <Formik
        initialValues={{
          userContent: '',
          imgUrl: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => handlePostSubmit(values)}
      >
        {({errors, touched, handleSubmit, values, handleBlur, handleChange, isValid, dirty}) => (
          <Form onSubmit={handleSubmit}>
            <div className="mx-auto space-y-4">
              <div className="space-y-1">
                <label htmlFor="userContent">
                  貼文內容
                </label>
                <Field name="userContent">
                  {({field}) => (
                    <div className="space-y-1">
                      <textarea
                        id="userContent"
                        value={values.userContent}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="userContent"
                        rows="6"
                        cols="45"
                        className="form-control py-3 px-6"
                        placeholder="輸入您的貼文內容"
                      />
                      {
                        errors[field.name] && touched[field.name] &&
                        <p className="text-danger flex-none">{errors[field.name]}</p>
                      }
                    </div>
                  )}
                </Field>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="imgUrl"
                  className="py-2 px-8 bg-black text-white rounded cursor-pointer w-auto"
                >上傳圖片
                </label>
                <Field name="imgUrl">
                  {({field}) => (
                    <div className="space-y-1">
                      <input
                        id="imgUrl"
                        type="file"
                        name="imgUrl"
                        onChange={(e) => handleImageUpload(e)}
                        value={values.imgUrl}
                        className="hidden"
                      />
                      {
                        errors[field.name] && touched[field.name] &&
                        <p className="text-danger flex-none">{errors[field.name]}</p>
                      }
                    </div>
                  )
                  }
                </Field>
              </div>
              {
                postImage ? (<img src={postImage} className="card-image" alt="" />) : null
              }
              <button type="submit" className={
                `text-center border-black border-2 py-4
            rounded-lg bg-info-dark text-black font-bold w-full
            transition-all duration-300
              ${isValid && dirty ?
                  'bg-secondary active:translate-y-1 cursor-pointer' :
                  'opacity-30 cursor-not-allowed active:translate-x-0'}
              `
              } disabled={!isValid || !dirty}
              >送出貼文</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default TheCreatePost
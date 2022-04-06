import React, { useEffect, useState, useContext } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../Firebase-confog'
import { userAuthState } from '../context'

const Home = () => {
  const { userState } = useContext(userAuthState)
  const [isAuth] = userState

  const [postList, setPostList] = useState([])
  const postCollectionRef = collection(db, 'posts')
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPost()
  }, [])

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
    window.location.reload()
  }

  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h1>Meetups, Plans, News</h1>
        </div>
        <div className='inside'>
          {postList.map((post) => {
            return (
              <>
                <div className='card'>
                  <div className='card-header'>
                    <h3>{post.title}</h3>
                  </div>
                  <div className='card-body'>
                    <p>{post.description}</p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      Posted by
                      <strong> @{post.author.name}</strong>
                    </span>
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <div className='deletepost'>
                        <button
                          onClick={() => {
                            deletePost(post.id)
                          }}
                          style={{
                            marginRight: '10px',
                            width: '40px',
                            height: '30px',
                          }}
                          className='deletebtn'
                        >
                          &#128465;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

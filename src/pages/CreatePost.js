import React, { useState, useEffect, useContext } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../Firebase-confog'
import { useNavigate } from 'react-router-dom'
import { userAuthState } from '../context'

const CreatePost = () => {
  const { userState } = useContext(userAuthState)
  const [isAuth, setIsAuth] = userState

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  let date = new Date()
  const postCollectionRef = collection(db, 'posts')
  let navigate = useNavigate()
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      description,
      date: date,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/')
  }
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <div className='container'>
        <div className='tocenter'>
          <div className='postDiv'>
            <div className='postitems'>
              <h2> Create a new Post</h2>
            </div>

            <div className='inputs'>
              <label>Title</label>
              <input
                placeholder='title'
                type='text'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='inputs'>
              <label>Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button onClick={createPost} className='submit'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost

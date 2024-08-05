import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useSelector, useDispatch } from 'react-redux'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'

const Error = () => {
  const errorMsg = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMsg) {
      toast.info(errorMsg)
      dispatch(clearError())
    }
  }, [errorMsg, dispatch])

  return <ToastContainer position="top-right" />
}

export default Error

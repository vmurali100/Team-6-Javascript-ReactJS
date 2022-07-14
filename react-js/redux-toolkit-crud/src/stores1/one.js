import {configureStore} from '@reduxjs/toolkit'
import  datareducer from '../slice1/dataSlice'

const stores1 = configureStore({
    reducer:{
        datainfo:datareducer
    }
})
export default stores1
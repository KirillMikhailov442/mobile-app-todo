import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/store';


type DispatchFunc = () => AppDispatch

const useAppDispatch: DispatchFunc = useDispatch 

export default useAppDispatch
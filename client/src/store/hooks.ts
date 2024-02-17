import {AppDispatch, RootState} from "./store";
import type { TypedUseSelectorHook } from 'react-redux'
import {useDispatch, useSelector} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
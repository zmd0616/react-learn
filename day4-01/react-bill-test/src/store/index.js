// 组合子模块，导出store实例
import billReducer from './modules/billStore';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: billReducer,
});

export default store;

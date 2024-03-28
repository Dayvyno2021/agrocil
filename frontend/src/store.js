import { configureStore } from '@reduxjs/toolkit';
import { allOrdersReducer, deleteOderReducer, getOrderReducer, myordersReducer, placeOrderReducer, updatePayoutReducer, updateToPaidReducer } from './reducers/orderReducers';
import { addPackageReducer, allPackagesReducer, choosePackageReducer, delPackageReducer } from './reducers/packageReducers';
import { createProductReducer, deleteProductReducer, getProductsReducer, singleProductReducer, updateProductReducer } from './reducers/productReducers';
import { allReferralReducer, deleteReferralReducer, refPayoutReducer, updateRefPayoutReducer } from './reducers/referralReducers';
import { adminUsersReducer, deleteNotificationReducer, deleteUserReducer, forgotPasswordReducer, getDownlinesReducer, loginReducer, makeAdminReducer, makeWithdrawalReducer, myProfileReducer, profilePhotoReducer, profileReducer, registerReducer, resetPasswordReducer, sendInfoReducer, sendMessageReducer, updateUserReducer, uploadPixReducer } from './reducers/userReducers';
import {allMessageReducer, deleteMessageReducer, getMessageReducer} from './reducers/messageReducers'

export const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    profileReducer: profileReducer,
    getProductsReducer: getProductsReducer,
    singleProductReducer: singleProductReducer,
    choosePackageReducer: choosePackageReducer,
    placeOrderReducer: placeOrderReducer,
    getOrderReducer: getOrderReducer,
    uploadPixReducer: uploadPixReducer,
    myordersReducer: myordersReducer,
    getDownlinesReducer: getDownlinesReducer,
    sendMessageReducer: sendMessageReducer,
    allOrdersReducer: allOrdersReducer,
    updateUserReducer: updateUserReducer,
    adminUsersReducer: adminUsersReducer,
    makeAdminReducer: makeAdminReducer,
    deleteUserReducer: deleteUserReducer,
    createProductReducer: createProductReducer,
    updateProductReducer: updateProductReducer,
    deleteProductReducer: deleteProductReducer,
    deleteOderReducer: deleteOderReducer,
    updateToPaidReducer: updateToPaidReducer,
    updatePayoutReducer: updatePayoutReducer,
    allReferralReducer: allReferralReducer,
    updateRefPayoutReducer: updateRefPayoutReducer,
    refPayoutReducer: refPayoutReducer,
    deleteReferralReducer: deleteReferralReducer,
    myProfileReducer: myProfileReducer,
    deleteNotificationReducer: deleteNotificationReducer,
    makeWithdrawalReducer: makeWithdrawalReducer,
    profilePhotoReducer: profilePhotoReducer,
    addPackageReducer: addPackageReducer,
    allPackagesReducer: allPackagesReducer,
    delPackageReducer: delPackageReducer,
    forgotPasswordReducer: forgotPasswordReducer,
    resetPasswordReducer: resetPasswordReducer,
    allMessageReducer: allMessageReducer,
    getMessageReducer: getMessageReducer,
    deleteMessageReducer: deleteMessageReducer,
    sendInfoReducer: sendInfoReducer,
  }
})
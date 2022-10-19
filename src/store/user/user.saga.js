import { takeLatest, put, all, call } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, signInFailed } from './user.action';

import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopUp, signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
   try {
      const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
      yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
   } catch (error) {
      yield put(signInFailed(error))
   }
}

export function* signInWithGoogle() {
   try {
      const {user} = yield call(signInWithGooglePopUp)
      yield call(getSnapShotFromUserAuth, user)
   }
   catch(error) {
      yield put(signInFailed(error))
   }
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
   try {
      const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
      yield call(getSnapShotFromUserAuth, user)
   }
   catch(error) {
      yield put(signInFailed(error))
   }
}

export function* isUserAuthenticated() {
   try {
      const userAuth = yield call(getCurrentUser);
      if(!userAuth) return;
      yield call(getSnapShotFromUserAuth, userAuth)
   } catch (error) {
      yield put(signInFailed(error))
   }
}

export function* onGoogleSignInStart() {
   yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
   yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onCheckUserSessions() {
   yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas () {
   yield all([call(onCheckUserSessions), call(onGoogleSignInStart), call(onEmailSignInStart)])
}
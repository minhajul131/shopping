import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    // if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    // }
}

 export const handeGooglelSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        };
        return signedInUser;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }

  export const handelSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false
        };
        return signedOutUser;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          const newUserInfo = res.user ;
          newUserInfo.error = "";
          newUserInfo.success = true;
        //   setUser(newUserInfo);
          updateUserName(name)
          // console.log(newUserInfo)
          return newUserInfo;
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          console.log(newUserInfo)
          newUserInfo.success = false;
          return newUserInfo;
        //   setUser(newUserInfo);
        });
    }

    export const signInWithEmailAndPassword = (email, password) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = "";
          newUserInfo.success = true;
          return newUserInfo;
          // navigate(-2)
          // navigate(from);
          // if (location.state?.form){
          //   navigate(location.state.form);
          //   console.log(navigate(location.state.form))
          // }
          // console.log(res.user);
        })
        .catch(function(error) {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
    
        user
          .updateProfile({
            displayName: name        
          })
          .then(function() {
            // Update successful
            // ...
          })
          .catch(function(error) {
            // An error occurred
            // ...
          });
      }
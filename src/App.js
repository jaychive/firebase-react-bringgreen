import Header from './component/Hd';
import Main from './component/Main';
import New from './component/New';
import Brand from './component/Brand';
import Review from './component/Review';
import Plus from './component/Plus';
import EventOne from './component/EventOne';
import EventTwo from './component/EventTwo';
import Products from './component/Products';


import { useState, useEffect } from 'react';
import { db } from './firebase/Firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import signIn from './firebase/firebase-sign-in';
import offlineSetting from './firebase/offlineSetting';


function App() {

  const [navidata, setNavi]=useState([]);
  const [propsdata, setProps]=useState([]);
  const [swiperinfo, setSwiperinfo]=useState([]);
  
  const naviRef = collection(db, "navidb");
  const propsRef = collection(db, "propsDB");
  const swiperRef = collection(db, "swiperinfo");

  useEffect(() => {
    const getUsers = async () => {
      const naviDoc = doc(naviRef, "Hhomamugwj1aKweGbVYF");
      const propsDoc = doc(propsRef, "4IZe1AZZf5N5qHWfChtl");
      const swiperDoc = doc(swiperRef, "H3L0B0nw665krADsd1nN");

      const naviSnap = await getDoc(naviDoc);
      const propsSnap = await getDoc(propsDoc);
      const swiperSnap = await getDoc(swiperDoc);

      if (naviSnap.exists()&&propsSnap.exists()&&swiperSnap.exists()) {
        setNavi(naviSnap.data());
        setProps(propsSnap.data());
        setSwiperinfo(swiperSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getUsers();
  }, [])

  console.log(navidata, propsdata, swiperinfo);

  return (
    <div className="App">
      <Header></Header>
      <Main sort="mainDB"></Main>
      <New sort="newDB"></New>
      <Brand sort="brandDB"></Brand>
      <Review sort="reviewDB"></Review>
      <Plus sort="plusDB"></Plus>
      <EventOne sort="event1DB"></EventOne>
      <EventTwo sort="event2DB"></EventTwo>
      <Products sort="productsDB"></Products>
      <Footer></Footer>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="py-5 border-top">
      <ul className="d-flex justify-content-center">
        <li><a href="#none">git</a></li>
        <li><a href="#none">instagram</a></li>
        <li><a href="#none">notion</a></li>
      </ul>
    </footer>
  )
}

export default App;

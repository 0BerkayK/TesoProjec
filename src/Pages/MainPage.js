import React from "react";
import AddNewRecord from "../Components/AddNewRecord";
import Footer from "../Components/Footer";
import LargeTitle from "../Components/LargeTitle";
import MainPagePicture from "../Components/MainPagePicture";
import ResultField from "../Components/ResultField";
import SearchAppTitle from "../Components/SearchAppTitle";
import SearchBox from "../Components/SearchBox";
import SearchButton from "../Components/SearchButton";
import Slider from "../Components/Slider";
import TopNewsHeader from "../Components/TopNewsHeader"
     

export default function MainPage() {
  return (
    <div>
      
      <AddNewRecord></AddNewRecord>
      <MainPagePicture></MainPagePicture>
      <SearchAppTitle></SearchAppTitle>
      <LargeTitle></LargeTitle>
      <SearchBox></SearchBox>
      <SearchButton></SearchButton>
      <ResultField></ResultField>
      <TopNewsHeader></TopNewsHeader> 
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}


  
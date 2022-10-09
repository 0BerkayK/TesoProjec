import React from "react";
import NewPagePicture from "../Components/NewPagePicture";
import ReturnToListPageButtton from "../Components/ReturnToListPageButtton";
import NewPageForm from "../Components/NewPageForm";
import AddButton from "../Components/AddButton";

export default function AddLinkPage() {
  return (
    <div>
      <NewPagePicture></NewPagePicture>
      <ReturnToListPageButtton></ReturnToListPageButtton>
      <NewPageForm></NewPageForm>
      <AddButton></AddButton>
    </div>
  );
}

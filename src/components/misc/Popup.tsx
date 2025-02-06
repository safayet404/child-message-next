import { BASE_API } from "@/constants/common";
import PopupClient from "./PopupClient";

export default async function Popup() {
  const popupResponse = await fetch(
    `${BASE_API}/general?filter[show_popup][_eq]=true&filter[status][_eq]=published&fields=popup_image,popup_image_link`
  );
  const { data } = await popupResponse.json();

  if (data?.popup_image)
    return (
      <PopupClient image={data.popup_image} link={data.popup_image_link} />
    );
}

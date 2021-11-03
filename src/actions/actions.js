import { ADD_ITEM_INFORM } from "../constatns/todo_type";
import axios from "axios";

export const addName = (name_user) => async (dispatch) => {
  const res_country = await axios.get(
    `https://api.nationalize.io/?name=${name_user}`
  );
  const res_male = await axios.get(
    `https://api.genderize.io/?name=${name_user}`
  );
  const country_user = res_country.data.country[1].country_id;
  const male_user = res_male.data.gender;
  dispatch({
    type: "ADD_ITEM_INFORM",
    payload: {
      id: name_user,
      name: name_user,
      male: male_user,
      country: country_user,
    },
  });
};

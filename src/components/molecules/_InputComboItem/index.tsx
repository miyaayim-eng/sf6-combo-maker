import { useState } from "react";
import { actionCategories } from "@/constants";
import styles from "./index.module.scss";

export const InputComboItem = ({
  id,
  value,
  name,
  onChange,
  onChangeCombo,
  commonData,
}) => {
  const [comboActionCategory, setComboActionCategory] = useState("");
  const [comboActionId, setComboActionId] = useState("");
  const [comboSelectActions, setSelectActions] = useState([]);
  // const [comboSelectedAction, setSelectedAction] = useState({});
  // console.log("commonData => ", commonData);
  // console.log("commonData.common_moves => ", commonData.common_moves);

  // const actionCategories = [
  //   "common_moves",
  //   "normal_moves",
  //   "unique_attacks",
  //   "special_moves",
  // ];

  // const actionCategories = [
  //   {
  //     name: "common_moves",
  //     display: "共通行動",
  //   },
  //   {
  //     name: "normal_moves",
  //     display: "通常技",
  //   },
  //   {
  //     name: "unique_attacks",
  //     display: "特殊技",
  //   },
  //   {
  //     name: "special_moves",
  //     display: "必殺技",
  //   },
  // ];

  const onChangeComboActionCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newComboActionCategory = e.target.value;

    setComboActionCategory(newComboActionCategory);

    if (newComboActionCategory == "common_moves") {
      setSelectActions(commonData.common_moves);
    }
    if (newComboActionCategory == "normal_moves") {
      setSelectActions(commonData.normal_moves);
    }
    if (newComboActionCategory == "unique_attacks") {
      setSelectActions(commonData.unique_attacks);
    }
    if (newComboActionCategory == "special_moves") {
      setSelectActions(commonData.special_moves);
    }
    // console.log("comboActionCategory => ", comboActionCategory);
  };

  const onChangeComboActionId = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newComboActionId = e.target.value;
    setComboActionId(newComboActionId);
    // console.log("comboActionId => ", comboActionId);
    // onChangeComboActionId();
    // setSelectedAction({
    //   actionCategory: comboActionCategory,
    //   actionId: comboActionId,
    // });
    const selectedAction = {
      actionCategory: comboActionCategory,
      actionId: comboActionId,
    };
    onChangeCombo(selectedAction);
    console.log("selectedAction => ", selectedAction);
  };

  return (
    <li className={styles.comboItem}>
      <div>
        <select
          id={id}
          value={value}
          name={name}
          onChange={onChangeComboActionCategory}
          className={styles.select}
        >
          <option value="" disabled className={styles.option}>
            -- 行動分類 --
          </option>
          {actionCategories.map((actionCategory) => (
            <option
              key={actionCategory.name}
              value={actionCategory.name}
              className={styles.actionCategory}
            >
              {actionCategory.display}
            </option>
          ))}
        </select>
        <select
          id={id}
          value={value}
          name={name}
          onChange={onChangeComboActionId}
          className={styles.select}
        >
          <option value="" disabled className={styles.option}>
            -- 行動 --
          </option>
          {comboSelectActions.map((comboSelectAction) => (
            <option
              key={comboSelectAction.id}
              value={comboSelectAction.id}
              className={styles.select}
            >
              {comboSelectAction.name}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
};

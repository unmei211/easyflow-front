import RoundContainer from "../../shared/ui/containers/round/RoundContainer.tsx";
import Page from "../Page.tsx";
import Items, { Direction } from "../../shared/ui/items/Items.tsx";

import "./IntroductionPage.css";

const IntroductionPage = () => {
  return (
    <Page className={"introduction__page"}>
      <RoundContainer className={"introduction__container"}>
        <Items direction={Direction.vertical} className={"introduction__items"}>
          <Items direction={Direction.vertical}>
            <div className={"introduction__header"}>
              Hello! It is easyflow task manager
            </div>
            <div className={"introduction__devel"}>
              dev by Vladislav Starovoytov
            </div>
          </Items>
          <div className={"introduction__text"}>
            This application is being developed so that you, my dear friend, can
            track your tasks
          </div>
          <div className={"introduction__text"}>
            You can choose different types of presentation of your tasks
          </div>
          <div className={"introduction__text"}>
            You can also search for other users, add them as friends and assign
            them tasks
          </div>
        </Items>
      </RoundContainer>
    </Page>
  );
};

export default IntroductionPage;

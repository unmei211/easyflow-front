import { LayoutProps } from "../LayoutProps.tsx";
import Items, { Direction } from "../../items/Items.tsx";

import "../Layout.css";
import RoundContainer from "../../containers/round/RoundContainer.tsx";

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header className={"layout__header"}>
        <RoundContainer className={"layout__header-container"}>
          <>
            <Items className="layout__header-left">
              <div>drop down list</div>
              <h1 className="layout__header-app">easyflow</h1>
              <Items
                direction={Direction.horizontal}
                className={"layout__navigation"}
              >
                <div>main page</div>
                <div>tasks</div>
                <div>friends</div>
              </Items>
            </Items>
            <div className="layout__profile-modal">modal profile</div>
          </>
        </RoundContainer>
      </header>
      <main className={"layout__main"}>{children}</main>
    </div>
  );
};

export default PublicLayout;

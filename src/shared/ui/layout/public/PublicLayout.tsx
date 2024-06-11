import { LayoutProps } from "../LayoutProps.tsx";

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div>drop down list</div>
        <ul className="layout__navigation">
          <li>first</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <div className="layout__profile-modal">modal profile</div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;

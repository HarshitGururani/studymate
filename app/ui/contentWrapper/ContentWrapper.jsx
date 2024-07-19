const ContentWrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1200px] my-0 mx-auto  ${className || ""}`}>
      {children}
    </div>
  );
};
export default ContentWrapper;

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
      <h1> Loading Semesters</h1>
    </div>
  );
};
export default loading;

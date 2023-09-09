const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='whitespace-pre-wrap rounded-lg bg-orange-600 px-4 py-2 text-xl text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-orange-500 hover:shadow-md'>
      {children}
    </button>
  );
};

export default Button;

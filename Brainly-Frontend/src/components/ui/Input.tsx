interface InputProps{
    placeholder:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?:any 
}

export function Input({
  placeholder,ref
}:InputProps) {
  return (
    <>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="border  rounded-md px-4 py-2 m-2 "
      />
    </>
  );
}
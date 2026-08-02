interface InputProps{
    placeholder:string
}

export function Input({
  placeholder,
}:InputProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="border  rounded-md px-4 py-2 m-2 "
      />
    </>
  );
}
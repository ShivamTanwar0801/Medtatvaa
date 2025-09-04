import React from 'react';
import Button from './Button';

const Input = ({emailHandler, email, setEmail, setError}) => {
  return (
    <form
      className="flex w-full max-w-[502px] justify-between gap-['auto'] rounded-[100px] bg-color-3/80 py-[6px] pl-3 pr-[6px] sm:py-[8px] sm:pl-[24px] sm:pr-[8px]"
      onSubmit={emailHandler}
    >
      <input
        placeholder="Buisness email* "
        className="w-full bg-transparent pl-2 placeholder-[#686868] placeholder:text-[14px] focus:outline-none"
        id="email"
        value={email}
        onChange={(ev) => {
          setEmail(ev.target.value);
          setError(''); // clear error when user types
        }}
        type="email"
        required
      />
      <Button className="button__gradient ml-2 text-nowrap text-n-1">
        Start a free trial
      </Button>
    </form>
  );
};

export default Input;

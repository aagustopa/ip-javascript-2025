import type { ComponentPropsWithoutRef, Ref } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'input'> {
  type?: string;
  className?: string;
  label?: string;
  id?: string;
  ref?: Ref<HTMLInputElement>
  value?: string,
}

export default function Input(props: Props) {
  const { type = 'text', className, label, id, ref, value, ...rest } = props;

  const classes = twMerge('bg-gray-dark rounded-full px-6 py-2', className);
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} className={classes} ref={ref} value={value} {...rest} />
    </div>
  );

  // if (label) {
  //   return (
  //     <div>
  //       <label className="flex flex-col gap-2">
  //         {label}
  //         <input type={type} className={classes} {...rest} />
  //       </label>
  //     </div>
  //   );
  // }

  // return <input type={type} className={classes} {...rest} />;
}

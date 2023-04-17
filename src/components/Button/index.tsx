/* eslint-disable  */
import tailwindMerger from "../../../utils/tailwindMerger";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Spinner from "../../components/Spinner";

/**
 * This function defines the possible configurations the button component could take if applied.
 * It can also be used for other components as well in order to have a button like behaviour -
 * <Link className={buttonVariants({variant:'primary', size:'md', className:'all the styles you want to apply'})}>
 *    Link Button
 * </Link> - and this link element would appear exactly like a button
 */
export const buttonVariants = cva(
  "w-max flex items-center justify-center px-6 gap-3 border-none cursor-pointer hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transtion-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-2 text-gray-5",
        primary: "text-white bg-primary-1",
        ghost: "bg-transparent text-white font-[400]",
      },
      size: {
        default: "h-[48px]",
        md: "h-[54px]",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function SMGButton(
  { className, disabled, size, variant, children, isLoading, ...props },
  ref
) {
  return (
    <button
      disabled={disabled ?? isLoading}
      {...props} // this for anyother property or properties that isn't destructured above
      className={tailwindMerger(buttonVariants({ className, variant, size }))}
      ref={ref}
    >
      {isLoading ? <Spinner classes="h-6 w-6" /> : children ?? "Button"}
    </button>
  );
});

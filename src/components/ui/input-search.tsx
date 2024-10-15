import { LucideProps, Search } from "lucide-react";
import * as React from "react";

export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, type, leadingIcon: LeadingIcon, ...props }, ref) => {
    return (
      <div className={className}>
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-fg-primary">
            {LeadingIcon ? (
              <LeadingIcon aria-hidden="true" className="size-4" />
            ) : (
              <Search aria-hidden="true" className="size-4" />
            )}
          </div>
          <input
            {...props}
            ref={ref}
            type="text"
            className="bg-grey block w-full rounded-md border border-border-ui py-1.5 pl-8 focus:outline-none placeholder:text-fg-tertiary focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  }
);
InputSearch.displayName = "InputSearch";

export { InputSearch };

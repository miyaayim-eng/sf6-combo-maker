import { memo, FC } from "react";

export const Page404: FC = memo(() => {
  return (
    <div className="py-12 md:py-20 px-8 md:px-16 xl:px-32">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-8xl md:text-9xl text-center">404</p>
        <p className="text-4xl md:text-5xl text-center mt-5">Page Not Found</p>
      </div>
    </div>
  );
});

import { SlideUp } from "../animated/slide-up";

export function ProjectHeader() {
  return (
    <div className="grid grid-cols-12 items-center px-12 mb-4">
      <SlideUp
        el="h2"
        text="App/Client"
        className="col-span-7 bg-foreground text-background px-2 w-fit text-center"
      />
      <SlideUp
        el="h2"
        text="Service"
        className="col-span-4 bg-foreground text-background px-2 w-fit text-center"
      />
      <SlideUp
        el="h2"
        text="Year"
        className="col-span-1 bg-foreground text-background px-2 w-fit text-center"
      />
    </div>
  );
}

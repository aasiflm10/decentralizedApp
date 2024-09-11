import { Button } from "@material-tailwind/react";
 

export function CustomButton({onClick}) {
    return (
      <div className="flex w-max gap-4 ">
        <Button size="lg" onClick={onClick} variant="outlined" ripple={true}>Show Drawer</Button>
      </div>
    );
}
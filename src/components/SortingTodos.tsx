import { Button } from "./Button"

type Props = {
  setFilter: (filter: "All" | "Completed" | "NotCompleted") => void;
};

export const SortingTodos = ({setFilter}: Props) => {
    return <>
        <div className="flex justify-center space-x-5">

            <Button onClick={() => setFilter("All")}>Alla</Button>
            <Button onClick={() => setFilter("Completed")}>Färdiga</Button>
            <Button onClick={() => setFilter("NotCompleted")}>Ofärdiga</Button>
        </div>
    </>
}
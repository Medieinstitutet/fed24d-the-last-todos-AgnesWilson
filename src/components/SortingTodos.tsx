import { Button } from "./Button"

type Props = {
  setFilter: (filter: "All" | "Completed" | "NotCompleted") => void;
  toggleSortOrder: () => void;
};

export const SortingTodos = ({setFilter, toggleSortOrder}: Props) => {
    return <>
        <div className="flex justify-center space-x-5">

            <Button onClick={() => setFilter("All")}>Alla</Button>
            <Button onClick={() => setFilter("Completed")}>Färdiga</Button>
            <Button onClick={() => setFilter("NotCompleted")}>Ofärdiga</Button>
            
            <button onClick={toggleSortOrder}><span aria-label="sortera A-Ö/Ö-A" className="material-symbols-outlined text-black">sort</span></button>
        </div>
    </>
}
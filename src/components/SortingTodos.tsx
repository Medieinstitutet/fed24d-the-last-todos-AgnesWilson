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
            
            <button onClick={toggleSortOrder}>
                <span aria-label="sortera A-Ö/Ö-A" 
                    className="material-symbols-outlined text-black cursor-pointer 
                            hover:border-2 hover:border-black hover:rounded-md focus:outline-blue-300">
                sort</span>
            </button>
        </div>
    </>
}
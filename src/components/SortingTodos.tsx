import { Button } from "./Button"

export const SortingTodos = () => {

    return <>
    <div className="flex justify-center space-x-5">

        <Button>Alla</Button>
        <Button>Färdiga</Button>
        <Button>Ofärdiga</Button>
    </div>
    </>
}
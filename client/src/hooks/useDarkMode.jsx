import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage(initialValue);
    if (value === true){
        document.body.classList.add('darkmode');
    }
    else {
        document.body.classList.remove('darkmode');
    }


    return [value, setValue];
}

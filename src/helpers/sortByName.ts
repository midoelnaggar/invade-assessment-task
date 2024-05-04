export const sortAscByName = (univertsies: IUniversity[]) => {
    return [...univertsies].sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

export const sortDesByName = (univertsies: IUniversity[]) => {
   return [...univertsies].sort((a, b) => {
        return b.name.localeCompare(a.name);
    });
}

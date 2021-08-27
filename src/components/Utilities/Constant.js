export const generateYears = () => {

    let years = []
    const number = 100;

    for(let i =0; i<=number ; i++) {
        years.push(new Date().getFullYear() - i)
    }

    return years
}

export const labels = {
    filteryear: 'Filter By Year'
}




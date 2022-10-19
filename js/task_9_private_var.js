// приватні змінні. Для того щоб звертатися до змінних не напряму

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary // доступ тільки через методи



    return {
        raise(amount) {
            salary += amount
        },
        lower(amount) {
            salary -= amount
        },
        current() {
            return `поточна зп ${employeeName} - ${salary}`
        },
    }
}

const salaryManager = salaryManagerFactory('Mango', 5000)
salaryManager.raise(1000) // піднімаємо salary на 1000

console.log(salaryManager.current())
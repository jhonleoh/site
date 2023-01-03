export default function ToggleTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.setItem("theme", "light")
        document.documentElement.classList.remove('dark')
    } else {
        localStorage.setItem("theme", "dark")
        document.documentElement.classList.add('dark')
    }
}

export const setThemeOnLoad = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
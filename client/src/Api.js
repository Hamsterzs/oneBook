export const login = async (credentials) => {
    const response = await (await fetch("/api/sign-in", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
    })).json()

    return response
}

export const signUp = async (credentials) => {
    const response = await (await fetch("/api/sign-up", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
    })).json()

    return response
}

export const signOut = async () => {
    const response = await (await fetch("/api/sign-out")).json()
    return response
}

export const getUser = async () => {
    const response = await (await fetch("/api/user")).json()
    return response
}
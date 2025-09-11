// Short duration JWT token (5-10 min)
export function getJwtToken() {
    return sessionStorage.getItem("jwt") || ""
}

export function setJwtToken(token: string) {
    sessionStorage.setItem("jwt", token)
}

export function removeJwtToken() {
    sessionStorage.removeItem("jwt");
}


// Longer duration refresh token (30-60 min)
export function getRefreshToken() {
    return sessionStorage.getItem("refreshToken") || ""
}

export function setRefreshToken(token: string) {
    sessionStorage.setItem("refreshToken", token)
}

export function removeRefreshToken() {
    sessionStorage.removeItem("refreshToken");
}
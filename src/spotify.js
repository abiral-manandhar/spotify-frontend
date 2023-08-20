
export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUrl = 'http://localhost:3000/'
const clientId = '6b27b6057da548b2aa1a84228d445f97'

export const getTokenFromUrl = ()=> {
    return window.location.hash.substring(1).split('&').reduce((initial, item) =>{
    let parts = item.split('=')
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
}, {})} 

const scopes = [

    'user-read-currently-playing',
    'user-read-recently-played', 
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog_true`;

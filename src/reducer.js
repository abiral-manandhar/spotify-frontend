
export const initialState = {
    playlists: [],
    user: null, 
    playing: false,
    item: null,
    // token: null,
}
const reducer = (state,action) =>{
    
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_WEEKLY':
           
        console.log('w')
        return{

                ...state,
                dw: action.dw
            }
            default: 
                return state
            
    }

}
export default reducer
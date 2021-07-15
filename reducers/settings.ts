const initialState = {
    color1: "",
    color2: "",
    isLoading: false
}

// 액션 이름
export const GET_COLOR = 'GET_COLOR' 
export const GET_COLOR_SUCCESS = 'GET_COLOR_SUCCESS' 
export const GET_COLOR_FAILURE = 'GET_COLOR_FAILURE' 

export const SET_COLOR = 'SET_COLOR' 
export const SET_COLOR_SUCCESS = 'SET_COLOR_SUCCESS' 
export const SET_COLOR_FAILURE = 'SET_COLOR_FAILURE' 

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COLOR: {
            return {
                ...state,
            }
        }
        case SET_COLOR: {
            return {
                ...state,
                isLoading: true,
            }
        }
    
        default: {
            return {
                ...state,
            }
        }
    }
}

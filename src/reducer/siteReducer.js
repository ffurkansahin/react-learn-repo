export default function siteReducer(state, action){
   switch(action.type){
        case 'SWITCH_THEME':
           return{
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light'
           }
        case 'SWITCH_LANGUAGE':
           return{
            ...state,
            language: state.language === 'tr' ? 'us' : 'tr'
           } 
   }
}

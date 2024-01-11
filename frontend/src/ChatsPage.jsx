/* eslint-disable react/prop-types */
import  {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps=useMultiChatLogic('953dea68-37e1-45d6-b989-75178845d262',
    props.user.username,
    props.user.secret
    );
    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100vh'}}/>
        </div>
    ) 
}

export default ChatsPage;







// /* eslint-disable react/prop-types */
// import  { PrettyChatWindow } from 'react-chat-engine-pretty';
// const ChatsPage = (props) => {
//     return(
//         <div style={{height:'100vh'}}>
//             <PrettyChatWindow
//             projectID='953dea68-37e1-45d6-b989-75178845d262'
//             username={props.user.username}
//             secret={props.user.secret}
//             style={{height:'100%'}}       
//             />
//         </div>
//     ) 
// }

// export default ChatsPage;





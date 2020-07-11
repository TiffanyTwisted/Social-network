let  renderReactTree=()=>{
    
}

let state = {
    contentPage:{
        PostData:[{id:1 ,message:'To live is to risk it all, otherwise you are just an inert chunk of randomly assembled molecules drifting wherever the universe blows you',like:27},{id:2,message:'Hi',like : 2}],
       newPostText:''
    },
   dialoguesPage:{
    dialogeData : [{id:1,name:"Rick Sanchez"},{id:2,name:"Bart Simpson"},{id:3,name:"Morty Sanchez"},{id:4,name:"Pitter Griffin"}],
    messageData : [{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"How old are you?"}]
   }
}

export let addPost = (postMesage)=>{
    let newPost = {
        id:3,
        message:postMesage,
        like:7
    }

   state.contentPage.PostData.push(newPost);
   renderReactTree(state);
}

export let updatePost  = (newText)=>{
   
   state.contentPage.newPostText = newText;
   renderReactTree(state);
}

export const subcribe =(observer)=>{
   renderReactTree = observer;
}


export default state;
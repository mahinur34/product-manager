"use server" //kural-1

export const testAction = async(id)=> { //kural-2 : async
    console.log(id);
}


export const formAction = async(formData)=> {
    console.log(formData)
}

//action server tarafında çalışır, basit async fonksiyonlardır, her yerde kulanılabilir.


export const getAllTasks = async()=>{
    const response = await fetch(`${process.env.API_URL}/tasks`,{cache:"no-store"});
    const tasks = await response.json()
    return tasks;
}
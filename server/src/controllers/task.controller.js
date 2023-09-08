import Task from "../models/task.model.js";

const getTasks = async (req, res) => {

    let taskList = await Task.find({userId: req.user.id}).populate('userId', ['username', 'email']);
    res.send(taskList)
}

const getTask = async (req, res) => {
    try {
        let { id } = req.params;
        let taskFound = await Task.findById(id);
    
        if(!taskFound) return res.status(404).send({message: "Task not found"})
    
        res.send({message: "Tasks encontrado", taskFound })
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}

const createTask = async (req, res) => {
    try {
        let { user } = req;
        let { title, description } = req.body;
    
        let newTask = new Task(
            {
                title,
                description,
                userId: user.id
            }
        );
    
        let savedTask = await newTask.save()
        res.send( { message: "Tasks creado", savedTask } )
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

const updateTask = async (req, res) => {
    try {
        let { id } = req.params;
        let { title, description } = req.body;

        let taskUpdated = await Task.findByIdAndUpdate(id, {title, description}, {new:true});
    
        if(!taskUpdated) return res.status(404).send({message: "Task not found"})
    
        res.send({message: "Tasks updated", taskUpdated })
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}

const deleteTask = async (req, res) => {
    try {
        let { id } = req.params;
        let taskDeleted = await Task.findByIdAndDelete(id);
    
        if(!taskDeleted) return res.status(404).send({message: "Task not found"})
    
        res.send({message: "Tasks deleted", taskDeleted })
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}

let taskCtr = { getTasks, getTask, createTask, updateTask, deleteTask }

export default taskCtr
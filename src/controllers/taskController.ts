import {Request, Response } from 'express'
let tasks: {id: number; name: string } []  = [];

export const getTasks = (req:Request, res: Response) => {
    res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({message: "Task name is require" });
    }
    const newTask = {id: tasks.length + 1, name}
    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== Number(id));
    res.json({message: "Task deleted"});
};